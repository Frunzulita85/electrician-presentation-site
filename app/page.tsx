import type { Metadata } from "next"
import ElectricianSite from "../components/electrician-site"

export const metadata: Metadata = {
  title: "VoltGuard Electric | Servicii Electrice & Depanare Rapidă Brașov",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Brașov și împrejurimi.",
}

export default function HomePage() {
  return <ElectricianSite currentPage="home" />
}