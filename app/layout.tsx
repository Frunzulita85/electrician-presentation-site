import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Voltaic Brașov Electric | Servicii Electrician Autorizat Brașov",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Brașov și împrejurimi.",
  keywords: [
    "electrician Brasov",
    "electrician autorizat Brasov",
    "interventii electrice urgenta Brasov",
    "reparatii instalatii electrice Brasov",
    "schimbare tablou electric Brasov",
    "servicii electrician ANRE Brasov",
    "depanare electrica Brasov"
  ],
  openGraph: {
    title: "Voltaic Brașov Electric | Servicii Electrician Autorizat Brașov",
    description:
      "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Brașov și împrejurimi.",
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