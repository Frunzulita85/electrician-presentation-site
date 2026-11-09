import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Voltaic Arad Electric | Servicii Electrician Autorizat Arad",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Arad și împrejurimi.",
  keywords: [
    "electrician Arad",
    "electrician autorizat Arad",
    "interventii electrice urgenta Arad",
    "reparatii instalatii electrice Arad",
    "schimbare tablou electric Arad",
    "servicii electrician ANRE Arad",
    "depanare electrica Arad"
  ],
  openGraph: {
    title: "Voltaic Arad Electric | Servicii Electrician Autorizat Arad",
    description:
      "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Arad și împrejurimi.",
    type: "website",
    locale: "ro_RO",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}