import type { Metadata } from "next"
import ElectricianSite from "../components/electrician-site"

export const metadata: Metadata = {
  title: "Northwire Electric | Electrician Services Edinburgh",
  description:
    "Local electrician website template homepage built for urgent enquiries, homeowner trust, and service-page SEO expansion.",
}

export default function HomePage() {
  return <ElectricianSite currentPage="home" />
}
