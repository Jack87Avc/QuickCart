// moveProductImages.js

const fs = require("fs");
const path = require("path");

const productsDummyData = require("./src/assets/assets.js").productsDummyData;

const srcAssetsPath = path.join(__dirname, "src", "assets");
const destAssetsPath = path.join(__dirname, "public", "assets");

if (!fs.existsSync(destAssetsPath)) {
  fs.mkdirSync(destAssetsPath, { recursive: true });
}

const copied = new Set();

productsDummyData.forEach((product) => {
  product.image.forEach((imgPath) => {
    const filename = path.basename(imgPath); // ex: cannon_camera_image.jpg
    const srcFile = path.join(srcAssetsPath, filename);
    const destFile = path.join(destAssetsPath, filename);

    if (fs.existsSync(srcFile) && !fs.existsSync(destFile)) {
      fs.copyFileSync(srcFile, destFile);
      copied.add(filename);
      console.log(`✅ Copiat: ${filename}`);
    } else if (!fs.existsSync(srcFile)) {
      console.warn(`❌ Fișier lipsă: ${filename}`);
    }
  });
});

if (copied.size === 0) {
  console.log("🔍 Niciun fișier nou de copiat.");
} else {
  console.log(`🎉 Gata! Copiate ${copied.size} imagini.`);
}
