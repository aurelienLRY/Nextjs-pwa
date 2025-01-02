import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconDirectory = path.join(process.cwd(), "public", "icons");

// Créer le dossier icons s'il n'existe pas
if (!fs.existsSync(iconDirectory)) {
  fs.mkdirSync(iconDirectory, { recursive: true });
}

async function generateIcons() {
  try {
    const inputImage = path.join(process.cwd(), "public", "app-icon.png");

    for (const size of sizes) {
      await sharp(inputImage)
        .resize(size, size)
        .toFile(path.join(iconDirectory, `icon-${size}x${size}.png`));

      console.log(`✓ Généré icon-${size}x${size}.png`);
    }

    console.log("Génération des icônes terminée !");
  } catch (error) {
    console.error("Erreur lors de la génération des icônes:", error);
  }
}

generateIcons();
