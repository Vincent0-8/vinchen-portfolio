import sharp from "sharp";
import fs from "fs";
import path from "path";

const rootDir = path.resolve("..");
const catalystSource = path.join(rootDir, "Feature Photo List", "Catalyst Marketplace");
const centSource = path.join(rootDir, "Feature Photo List", "Cent Graphic");
const catalystDest = path.resolve("public", "images", "projects", "catalyst");
const centDest = path.resolve("public", "images", "projects", "cent-graphics");

async function convertFolder(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file, ext);
    const srcPath = path.join(srcDir, file);

    if (ext === ".jpg" || ext === ".png") {
      const destPath = path.join(destDir, `${basename}.webp`);
      await sharp(srcPath).webp({ quality: 85 }).toFile(destPath);
      console.log(`Converted: ${file} -> ${basename}.webp`);
    } else if (ext === ".webp") {
      const destPath = path.join(destDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${file}`);
    }
  }
}

async function run() {
  console.log("Processing Catalyst...");
  await convertFolder(catalystSource, catalystDest);
  console.log("Processing Cent Graphics...");
  await convertFolder(centSource, centDest);
  console.log("Done!");
}

run();
