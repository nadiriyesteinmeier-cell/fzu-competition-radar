"""Fetch recent arXiv metadata for the student paper radar.

Uses one API request per run and stores metadata only. It does not download PDFs.
"""

from __future__ import annotations

import json
import pathlib
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone


ROOT = pathlib.Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data" / "papers.js"
API = "https://export.arxiv.org/api/query"
CATEGORIES = ("cs.CV", "cs.AI", "cs.HC")
NS = {"atom": "http://www.w3.org/2005/Atom"}


def text(entry: ET.Element, name: str) -> str:
    node = entry.find(f"atom:{name}", NS)
    return " ".join((node.text or "").split()) if node is not None else ""


def fetch() -> list[dict[str, object]]:
    params = urllib.parse.urlencode(
        {
            "search_query": " OR ".join(f"cat:{category}" for category in CATEGORIES),
            "start": 0,
            "max_results": 30,
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
    if not papers:
        raise RuntimeError("arXiv returned no entries; keeping the previous data is safer")
    return papers


def main() -> None:
    papers = fetch()
    updated_at = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d")
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
