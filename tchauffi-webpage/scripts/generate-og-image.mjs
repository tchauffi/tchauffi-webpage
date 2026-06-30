import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../public/og-image.png");

// 1200x630 is the standard OG image size
const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Navy gradient background matching site -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e2a3a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#151e2a;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />

  <!-- Lumon-style horizontal accent lines (top-right corner) -->
  <line x1="700" y1="80"  x2="${width}" y2="80"  stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="750" y1="92"  x2="${width}" y2="92"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <line x1="800" y1="104" x2="${width}" y2="104" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

  <!-- Lumon-style horizontal accent lines (bottom-left corner) -->
  <line x1="0" y1="${height - 80}"  x2="500" y2="${height - 80}"  stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="0" y1="${height - 92}"  x2="450" y2="${height - 92}"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <line x1="0" y1="${height - 104}" x2="400" y2="${height - 104}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

  <!-- Left border accent -->
  <rect x="72" y="100" width="2" height="430" fill="rgba(255,255,255,0.15)" rx="1"/>

  <!-- Name -->
  <text
    x="108"
    y="240"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="72"
    font-weight="300"
    fill="#ffffff"
    letter-spacing="2"
  >Thibaut Chauffier</text>

  <!-- Title -->
  <text
    x="110"
    y="310"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="32"
    font-weight="300"
    fill="#ffffff"
  >Senior ML Research Engineer</text>

  <!-- Subtitle -->
  <text
    x="110"
    y="356"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="26"
    font-weight="300"
    fill="rgba(255,255,255,0.55)"
  >Computer Vision · Generative AI</text>

  <!-- Divider line -->
  <line x1="108" y1="390" x2="640" y2="390" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>

  <!-- Tags -->
  <text
    x="110"
    y="432"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="18"
    font-weight="300"
    fill="rgba(255,255,255,0.45)"
    letter-spacing="3"
  >ICCV 2025 (ORAL) · 5 PATENTS · DIFFUSION MODELS · 3D VISION</text>

  <!-- Location / edition -->
  <text
    x="110"
    y="520"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="14"
    font-weight="300"
    fill="rgba(255,255,255,0.35)"
    letter-spacing="4"
  >PARIS, FRANCE · EDITION 2026</text>

  <!-- URL -->
  <text
    x="110"
    y="555"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="14"
    font-weight="300"
    fill="rgba(255,255,255,0.3)"
    letter-spacing="2"
  >tchauffi.github.io/tchauffi-webpage</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`OG image generated at: ${outputPath}`);
