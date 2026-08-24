"""Fetch recent arXiv metadata for the student paper radar.

Uses one API request per run and stores metadata only. It does not download PDFs.
"""

from __future__ import annotations

import json
import pathlib
import re
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone


ROOT = pathlib.Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data" / "papers.js"
API = "https://export.arxiv.org/api/query"
CATEGORIES = ("cs.CV", "cs.AI", "cs.HC")
NS = {"atom": "http://www.w3.org/2005/Atom"}
BEIJING = timezone(timedelta(hours=8))
FETCH_OFFSETS = (0, 300, 600, 900, 1200, 1500)
FETCH_SIZE = 30
PER_DAY = 12
MAX_DAYS = 30
MAX_TOTAL = 180


def text(entry: ET.Element, name: str) -> str:
    node = entry.find(f"atom:{name}", NS)
    return " ".join((node.text or "").split()) if node is not None else ""


def fetch_page(start: int) -> list[dict[str, object]]:
    params = urllib.parse.urlencode(
        {
            "search_query": " OR ".join(f"cat:{category}" for category in CATEGORIES),
            "start": start,
            "max_results": FETCH_SIZE,
            "sortBy": "submittedDate",
            "sortOrder": "descending",
        }
    )
    request = urllib.request.Request(
        f"{API}?{params}",
        headers={"User-Agent": "LinXiaoBaStudentRadar/0.1 (mailto:792629666@qq.com)"},
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        root = ET.fromstring(response.read())

    papers = []
    for entry in root.findall("atom:entry", NS):
        identifier = text(entry, "id").rstrip("/").split("/")[-1]
        base_id = identifier.split("v")[0]
        categories = [node.attrib["term"] for node in entry.findall("atom:category", NS)]
        authors = [text(author, "name") for author in entry.findall("atom:author", NS)]
        papers.append(
            {
                "id": base_id,
                "title": text(entry, "title"),
                "authors": authors,
                "abstract": text(entry, "summary"),
                "published": text(entry, "published"),
                "updated": text(entry, "updated"),
                "categories": categories,
                "url": f"https://arxiv.org/abs/{base_id}",
            }
        )
    return papers


def load_previous() -> list[dict[str, object]]:
    if not OUTPUT.exists():
        return []
    match = re.search(r"window\.PAPER_ITEMS\s*=\s*(\[.*\]);\s*$", OUTPUT.read_text(encoding="utf-8"), re.S)
    return json.loads(match.group(1)) if match else []


def beijing_day(paper: dict[str, object]) -> str:
    return datetime.fromisoformat(str(paper["published"]).replace("Z", "+00:00")).astimezone(BEIJING).strftime("%Y-%m-%d")


def merge_archive(fresh: list[dict[str, object]], previous: list[dict[str, object]]) -> list[dict[str, object]]:
    unique = {str(paper["id"]): paper for paper in previous}
    unique.update({str(paper["id"]): paper for paper in fresh})
    ordered = sorted(unique.values(), key=lambda paper: str(paper["published"]), reverse=True)
    newest_day = datetime.strptime(beijing_day(ordered[0]), "%Y-%m-%d").replace(tzinfo=BEIJING)
    kept: list[dict[str, object]] = []
    counts: dict[str, int] = {}
    for paper in ordered:
        day = beijing_day(paper)
        day_date = datetime.strptime(day, "%Y-%m-%d").replace(tzinfo=BEIJING)
        if (newest_day - day_date).days >= MAX_DAYS or counts.get(day, 0) >= PER_DAY:
            continue
        kept.append(paper)
        counts[day] = counts.get(day, 0) + 1
        if len(kept) >= MAX_TOTAL:
            break
    return kept


def main() -> None:
    fresh: list[dict[str, object]] = []
    for index, start in enumerate(FETCH_OFFSETS):
        fresh.extend(fetch_page(start))
        if index + 1 < len(FETCH_OFFSETS):
            time.sleep(3)
    if not fresh:
        raise RuntimeError("arXiv returned no entries; keeping the previous data is safer")
    papers = merge_archive(fresh, load_previous())
    updated_at = datetime.now(BEIJING).strftime("%Y-%m-%d")
    output = (
        f'window.PAPER_DATA_UPDATED_AT = "{updated_at}";\n'
        "window.PAPER_ITEMS = "
        + json.dumps(papers, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(output, encoding="utf-8")
    print(f"Wrote {len(papers)} papers to {OUTPUT}")


if __name__ == "__main__":
    main()

