import fg from "fast-glob";
import { imageMeta } from "image-meta"
import { join } from "node:path";
import fs from "node:fs/promises";

const files = await fg(
  "public/gallery/*.{webp}"
);

const meta: { height: number, width: number }[] = []

for await (const file of files) {
  const data = await fs.readFile(file);
  const {
    height = 0,
    width = 0
  } = imageMeta(Buffer.from(data))

  const imageNumber = Number(file.match(/img-(\d+)/)?.[1] || "")

  meta[imageNumber - 1] = { height, width }
}

const outputPath = join(process.cwd(), "src/data/meta-gallery.json")
await fs.writeFile(outputPath, JSON.stringify(meta))