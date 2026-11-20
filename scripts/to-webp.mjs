import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = "public/images";
const quality = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

for await (const file of walk(root)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;

  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");

  await sharp(file).webp({ quality }).toFile(out);

  const before = (await stat(file)).size;
  const after = (await stat(out)).size;

  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`,
  );
}