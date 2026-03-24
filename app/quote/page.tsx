import type { Metadata } from "next"
import ElectricianSite from "../../components/electrician-site"

export const metadata: Metadata = {
  title: "Request a Quote | Northwire Electric",
  description:
    "Quote-request page template for electricians, designed for urgent and planned local enquiries with straightforward lead capture.",
}

export default function QuotePage() {
  return <ElectricianSite currentPage="quote" />
}
