import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Voltaic Cluj Electric",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Brașov și împrejurimi.",
  keywords: [
    "electrician Brasov",
    "interventii electrice urgenta",
    "reparatii instalatii electrice",
    "schimbare tablou electric",
    "servicii electrician autorizat",
    "depanare electrica"
  ],
  openGraph: {
    title: "Voltaic Cluj Electric",
    description:
      "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Brașov și împrejurimi.",
    type: "website",
    locale: "ro_RO",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}