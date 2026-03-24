import type { Metadata } from "next"
import ElectricianSite from "../../components/electrician-site"

export const metadata: Metadata = {
  title: "Services | Northwire Electric",
  description:
    "Service-page template for electricians with stronger intent separation, local SEO structure, and clear quote pathways.",
}

export default function ServicesPage() {
  return <ElectricianSite currentPage="services" />
}
