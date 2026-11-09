import type { Metadata } from "next"
// Asigură-te că numele fișierului din folderul components este exact acesta:
import ElectricianTemplateSite from "../components/electrician-site"

export const metadata: Metadata = {
  title: "Voltaic Arad Electric | Servicii Electrician Autorizat Arad",
  description:
    "Servicii profesionale de instalații electrice, intervenții de urgență, tablouri electrice, iluminat și verificări PRAM în Arad și împrejurimi.",
}

export default function HomePage() {
  return <ElectricianTemplateSite currentPage="home" />
}