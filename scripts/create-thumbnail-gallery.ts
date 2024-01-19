import fg from "fast-glob";
import sharp from "sharp";
import { join, dirname, basename } from "node:path";

const files = await fg(
  "public/gallery/*.{webp}"
);

for await (const file of files) {
  console.info(`Converting ${file}`);
  const newFilePath = join(dirname(file), "thumbnails", basename(file));

  const convert = sharp(file)
    .webp({
      lossless: false,
      quality: 25
    });

  await convert.toFile(newFilePath);
  console.info(`Converted to ${newFilePath}`);
}