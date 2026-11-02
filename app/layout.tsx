import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Voltaic Cluj Electric | Servicii Electrician Autorizat Cluj",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Cluj-Napoca și împrejurimi.",
  keywords: [
    "electrician Cluj",
    "electrician Cluj Napoca",
    "interventii electrice urgenta Cluj",
    "reparatii instalatii electrice Cluj",
    "schimbare tablou electric Cluj",
    "servicii electrician autorizat",
    "depanare electrica Cluj"
  ],
  openGraph: {
    title: "Voltaic Cluj Electric | Servicii Electrician Autorizat Cluj",
    description:
      "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Cluj-Napoca și împrejurimi.",
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