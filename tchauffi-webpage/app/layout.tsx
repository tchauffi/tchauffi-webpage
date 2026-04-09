import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://tchauffi.github.io/tchauffi-webpage";

export const metadata: Metadata = {
  title: "Thibaut Chauffier | Senior ML Research Engineer",
  description:
    "Senior ML Research Engineer bridging deep research and production impact — published author (ICCV 2025, Oral), inventor of 5 patents. Expert in diffusion models, 3D Gaussian splatting, and production AI systems.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Thibaut Chauffier | Senior ML Research Engineer",
    description:
      "Senior ML Research Engineer bridging deep research and production impact — published author (ICCV 2025, Oral), inventor of 5 patents. Expert in diffusion models, 3D Gaussian splatting, and production AI systems.",
    siteName: "Thibaut Chauffier",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Thibaut Chauffier — Senior ML Research Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thibaut Chauffier | Senior ML Research Engineer",
    description:
      "Senior ML Research Engineer — ICCV 2025 (Oral), 5 patents, diffusion models & 3D vision deployed at scale.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@tchauffi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${ibmPlexMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
