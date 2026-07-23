import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("creates a static homepage for GitHub Pages", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>Tommy Miller/);
  assert.match(html, /Curious by nature/);
  assert.match(html, /Building with intention/);
  assert.match(html, /trusted data foundations/);
  assert.match(html, /https:\/\/github\.com\/mille880/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/thomasmiller6\//);
});

test("includes the public assets required by the homepage", async () => {
  await Promise.all([
    access(new URL("og.png", outputRoot)),
    access(new URL("favicon.svg", outputRoot)),
    access(new URL("_next/", outputRoot)),
  ]);
});
