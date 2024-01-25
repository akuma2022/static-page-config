const fs = require("fs-extra");

async function copyStatic() {
  try {
    // Copy assets directory
    await fs.copy("src/assets", "dist/assets");

    // Copy index.html
    await fs.copy("src/index.html", "dist/index.html");

    console.log("Assets and index.html copied successfully!");
  } catch (err) {
    console.error("Error while copying assets and index.html:", err);
  }
}

copyStatic();
