const base = process.env.API_BASE || "http://127.0.0.1:8787";
const health = await fetch(`${base}/health`).then((response) => response.json());
if (!health.ok || !health.keyConfigured) throw new Error("API health check failed");
const invalid = await fetch(`${base}/api/paper-analysis`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ paperId: "bad" }) });
if (invalid.status !== 400) throw new Error(`Expected 400, received ${invalid.status}`);
console.log(JSON.stringify({ health: "ok", keyConfigured: true, invalidInputGuard: "ok", model: health.model }));

