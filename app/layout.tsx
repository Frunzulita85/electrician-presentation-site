import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Voltaic Timișoara Electric | Servicii Electrician Autorizat Timișoara",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Timișoara și împrejurimi.",
  keywords: [
    "electrician Timișoara",
    "electrician autorizat Timișoara",
    "interventii electrice urgenta Timișoara",
    "reparatii instalatii electrice Timișoara",
    "schimbare tablou electric Timișoara",
    "servicii electrician ANRE Timișoara",
    "depanare electrica Timișoara"
  ],
  openGraph: {
    title: "Voltaic Timișoara Electric | Servicii Electrician Autorizat Timișoara",
    description:
      "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Timișoara și împrejurimi.",
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