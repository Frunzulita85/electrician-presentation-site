import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Northwire Electric | Electrical Services",
  description:
    "A comprehensive electrician website template built for urgent faults, homeowner trust, and stronger service-page SEO structure.",
  keywords: ["electrician website template", "local electrician website", "emergency electrician template", "electrical services website", "electrician lead generation site"],
  openGraph: {
    title: "Northwire Electric | Electrical Services",
    description:
      "A comprehensive electrician website template built for urgent faults, homeowner trust, and stronger service-page SEO structure.",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
