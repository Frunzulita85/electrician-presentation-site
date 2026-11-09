import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Voltaic Târgoviște Electric | Servicii Electrician Autorizat Târgoviște",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Târgoviște și împrejurimi.",
  keywords: [
    "electrician Targoviste",
    "electrician autorizat Targoviste",
    "interventii electrice urgenta Targoviste",
    "reparatii instalatii electrice Targoviste",
    "schimbare tablou electric Targoviste",
    "servicii electrician ANRE Targoviste",
    "depanare electrica Targoviste"
  ],
  openGraph: {
    title: "Voltaic Târgoviște Electric | Servicii Electrician Autorizat Târgoviște",
    description:
      "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Târgoviște și împrejurimi.",
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