import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function loadWindowScript(relativePath) {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, relativePath), "utf8"), sandbox, { filename: relativePath });
  return sandbox.window;
}

const eventWindow = loadWindowScript("data/events.js");
const recognitionWindow = loadWindowScript("data/recognitions.js");
const proWindow = loadWindowScript("data/pro-briefs.js");
const paperWindow = loadWindowScript("data/papers.js");
const events = eventWindow.COMPETITION_EVENTS;
const recognitionData = recognitionWindow.FZU_RECOGNITION_DATA;
const recognitions = recognitionData.items;
const proBriefs = proWindow.PRO_BRIEFS;
const papers = paperWindow.PAPER_ITEMS;

assert(Array.isArray(events) && events.length > 0, "Competition data is empty");
assert(new Set(events.map((item) => item.id)).size === events.length, "Competition IDs must be unique");
for (const event of events) {
  assert(/^https:\/\//.test(event.sourceUrl), `${event.id}: source must use HTTPS`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(event.verifiedAt), `${event.id}: invalid verifiedAt`);
  assert(Array.isArray(event.milestones) && event.milestones.length > 0, `${event.id}: no milestones`);
  let previous = 0;
  for (const milestone of event.milestones) {
    const timestamp = Date.parse(milestone.at);
    assert(Number.isFinite(timestamp), `${event.id}: invalid milestone ${milestone.at}`);
    assert(!milestone.at.includes("T24:"), `${event.id}: use next-day 00:00 instead of 24:00`);
    assert(timestamp >= previous, `${event.id}: milestones must be chronological`);
    previous = timestamp;
  }
  if (event.recognition) {
    assert(["direct", "series"].includes(event.recognition.status), `${event.id}: invalid recognition status`);
    assert(event.recognition.level && event.recognition.officialName && event.recognition.source, `${event.id}: incomplete recognition metadata`);
  }
}
const recognized = events.filter((event) => event.recognition);
assert(recognized.length === 3, "Expected three current events matched to the FZU 2026 recognition lists");
assert(recognized.filter((event) => event.recognition.status === "direct").length === 2, "Expected two exact direct-recognition matches");
assert(recognitionData.year === 2026, "Recognition catalog must be the 2026 edition");
assert(Array.isArray(recognitions) && recognitions.length === 185, "Expected 185 FZU-recognized competitions");
assert(new Set(recognitions.map((item) => item.name)).size === recognitions.length, "Recognition names must be unique");
assert(recognitionData.sources.find((source) => source.type === "direct")?.count === 77, "Expected 77 direct-recognition entries");
assert(recognitionData.sources.find((source) => source.type === "classified")?.count === 108, "Expected 108 classified entries");
for (const item of recognitions) {
  assert(item.name && item.level, "Recognition entry is incomplete");
  assert(["direct", "classified"].includes(item.recognitionType), `${item.name}: invalid recognition type`);
}
assert(Array.isArray(proBriefs) && proBriefs.length === 3, "Expected three Pro briefs");
assert(new Set(proBriefs.map((item) => item.id)).size === proBriefs.length, "Pro brief IDs must be unique");
for (const brief of proBriefs) {
  assert(brief.title && brief.summary && /^https:\/\//.test(brief.sourceUrl), `${brief.id}: incomplete Pro brief`);
  assert(brief.actions.length === 3 && brief.directions.length === 3 && brief.sprint.length === 4, `${brief.id}: invalid Pro brief structure`);
}
const newestVerification = Math.max(...events.map((event) => Date.parse(`${event.verifiedAt}T00:00:00Z`)));
assert(Date.now() - newestVerification < 22 * 24 * 60 * 60 * 1000, "Competition data has not been verified for more than 21 days");

assert(Array.isArray(papers) && papers.length > 0 && papers.length <= 30, "Paper data must contain 1–30 items");
assert(new Set(papers.map((item) => item.id)).size === papers.length, "Paper IDs must be unique");
for (const paper of papers) {
  assert(/^\d{4}\.\d{4,5}$/.test(paper.id), `${paper.id}: unexpected arXiv identifier`);
  assert(paper.url === `https://arxiv.org/abs/${paper.id}`, `${paper.id}: unexpected source URL`);
  assert(paper.title && paper.abstract && paper.authors.length, `${paper.id}: incomplete metadata`);
  assert(Number.isFinite(Date.parse(paper.published)), `${paper.id}: invalid publication date`);
}

const updated = Date.parse(`${paperWindow.PAPER_DATA_UPDATED_AT}T00:00:00Z`);
assert(Number.isFinite(updated), "Paper update date is invalid");
assert(Date.now() - updated < 8 * 24 * 60 * 60 * 1000, "Paper data has not refreshed for more than 7 days");

const pages = ["index.html", "papers.html", "cet.html", "pro.html", "profile.html", "feedback.html", "privacy.html", "sources.html", "404.html"];
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  assert((html.match(/<h1[\s>]/g) || []).length === 1, `${page}: expected exactly one h1`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1].split(/[?#]/)[0];
    if (!target || /^(?:https?:|mailto:|#)/.test(target)) continue;
    assert(fs.existsSync(path.join(root, target)), `${page}: missing local resource ${target}`);
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.webmanifest"), "utf8"));
assert(manifest.name === "学生雷达" && manifest.start_url, "PWA manifest is incomplete");

const publicText = fs.readdirSync(root, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && !entry.parentPath.includes(`${path.sep}.git${path.sep}`))
  .map((entry) => fs.readFileSync(path.join(entry.parentPath, entry.name), "utf8"))
  .join("\n");
assert(!/(?:sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{20,})/.test(publicText), "Possible API token found in public files");

console.log(JSON.stringify({ competitions: events.length, fzuRecognizedMatches: recognized.length, recognitionCatalog: recognitions.length, proBriefs: proBriefs.length, competitionFreshness: "ok", papers: papers.length, paperFreshness: "ok", pages: pages.length, manifest: "ok", secrets: "none" }, null, 2));
