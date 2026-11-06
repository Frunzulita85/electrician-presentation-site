"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BatteryCharging, MapPin, PhoneCall, ShieldCheck, Sparkles, Zap } from "lucide-react"

type ElectricianPage = "home" | "services" | "quote"

const services = [
  {
    title: "Intervenții Rapide & Depanare Non-Stop",
    copy: "Scurtcircuite, pene de curent, tablouri care sar sau mirosuri suspecte de la prize. Intervenție rapidă în Brașov și zonele limitrofe.",
  },
  {
    title: "Tablouri Electrice & Automatizări",
    copy: "Înlocuire panouri vechi cu siguranțe automate moderne, montaj diferențiale, sisteme de protecție la supratensiune și dimensionare corectă.",
  },
  {
    title: "Iluminat Interior, Exterior & Prize",
    copy: "Montaj corpuri de iluminat, spoturi LED, prize, întrerupătoare, extinderi de circuite pentru electrocasnice mari și iluminat arhitectural.",
  },
  {
    title: "Verificări PRAM & Buletine de Măsurători",
    copy: "Verificări periodice, buletine PRAM pentru spații comerciale, birouri, cabinete și imobile noi sau închiriate în Brașov.",
  },
  {
    title: "Reablări & Instalații Noi (Case/Apartamente)",
    copy: "Proiectare și execuție instalații electrice complete pentru case noi, renovări capitale de apartamente sau extinderi de rețele.",
  },
  {
    title: "Mentenanță Preventivă & Verificări",
    copy: "Revizii periodice ale instalațiilor, strângeri de contacte, diagnoze termografice și mentenanță pentru asociații de proprietari sau firme.",
  },
]

const processSteps = [
  {
    title: "1. Contact & Diagnoză Telefonică",
    copy: "Sună direct sau trimite o cerere. Discutăm problema întâmpinată pentru a estima urgența și materialele necesare.",
  },
  {
    title: "2. Deplasare & Constatare la Fața Locului",
    copy: "Mă deplasez rapid în Brașov și împrejurimi, identific defectul cu aparatură profesională și îți propun soluția optimă.",
  },
  {
    title: "3. Execuție Curată & Garantată",
    copy: "Lucrare realizată conform normativelor ANRE în vigoare, cu curățenie la final și garanție scrisă pentru manoperă.",
  },
]

const serviceAreas = [
  "Centrul Istoric",
  "Astra",
  "Tractorul",
  "Coresi",
  "Noui",
  "Șchei",
  "Răcădău",
  "Bartolomeu",
  "Săcele",
  "Ghimbav",
  "Cristian",
  "Râșnov"
]

const reviews = [
  {
    name: "Radu V. (Brașov - Astra)",
    quote: "A intervenit rapid duminică seara când am rămas fără curent în jumătate de apartament. Profesionist, curat și foarte prompt.",
  },
  {
    name: "Mirela S. (Ghimbav)",
    quote: "Am apelat pentru schimbarea tabloului electric vechi dintr-o casă recent renovată. Totul trasat ca la carte, respectat termenul și prețul stabilit.",
  },
]

function getHref(basePath: string, page: ElectricianPage) {
  if (page === "home") return basePath || "/"
  return `${basePath}/${page}`
}

function DemoBanner() {
  return (
    <div className="bg-[#101820] px-4 py-2.5 text-center text-xs font-medium text-white md:text-sm">
      <span className="text-[#cf9f2e] font-semibold">SITE DEMO DE VÂNZARE:</span> Ești electrician în Brașov și vrei acest site personalizat cu datele tale?{" "}
      <a
        href="#cumpara-site"
        className="ml-2 inline-flex items-center underline text-[#cf9f2e] hover:text-white font-semibold transition"
      >
        Află detalii & Sună acum →
      </a>
    </div>
  )
}

function PreviewNav({ currentPage, basePath }: { currentPage: ElectricianPage; basePath: string }) {
  const items = [
    { label: "Acasă", href: getHref(basePath, "home"), page: "home" as const },
    { label: "Servicii", href: getHref(basePath, "services"), page: "services" as const },
    { label: "Ofertă / Contact", href: getHref(basePath, "quote"), page: "quote" as const },
  ]

  return (
    <nav className="hidden items-center gap-8 text-sm text-[#59636b] md:flex">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={currentPage === item.page ? "font-semibold text-[#101820]" : "transition hover:text-[#101820]"}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

function SiteHeader({ currentPage, basePath }: { currentPage: ElectricianPage; basePath: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#101820]/10 bg-[#f6f8f7]/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">Voltaic Brașov Electric</div>
          <div className="mt-1 text-sm font-medium text-[#101820]">Electrician Autorizat ANRE • Brașov</div>
        </div>

        <PreviewNav currentPage={currentPage} basePath={basePath} />

        <a
          href="tel:+40747856267"
          className="inline-flex items-center gap-2 rounded-full bg-[#cf9f2e] px-4 py-2 text-sm font-semibold text-[#101820] shadow-md transition hover:bg-[#b88d29]"
        >
          <PhoneCall className="h-4 w-4" />
          <span>0747 856 267</span>
        </a>
      </div>
    </header>
  )
}

function HomePage({ basePath }: { basePath: string }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f6f8f7]">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,_rgba(207,159,46,0.18),_transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#cf9f2e]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">
              Intervenții rapide în Brașov și Săcele
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#101820] md:text-5xl">
              Electrician autorizat în Brașov pentru urgențe, tablouri și instalații sigure.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#59636b]">
              Servicii electrice profesionale pentru locuințe, case și spații comerciale. Deplasare rapidă în toate cartierele Brașovului și în localitățile limitrofe.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={getHref(basePath, "quote")} className="inline-flex items-center rounded-full bg-[#cf9f2e] px-5 py-3 text-sm font-semibold text-[#101820] transition hover:bg-[#b88d29]">
                Solicită o Intervenție / Ofertă
              </Link>
              <Link href={getHref(basePath, "services")} className="inline-flex items-center rounded-full border border-[#101820]/10 bg-white px-5 py-3 text-sm font-semibold text-[#101820] transition hover:border-[#101820]/25">
                Vezi Toate Serviciile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Autorizat ANRE", "Intervenții în Brașov & Împrejurimi", "Garanție pentru lucrări"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#101820]/10 bg-white px-4 py-4 text-sm font-medium text-[#101820]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
            <div className="relative h-[580px] w-full overflow-hidden rounded-[2.5rem] bg-[#101820] shadow-[0_30px_80px_rgba(16,24,32,0.18)]">
              <Image
                src="/hero-electrician.webp"
                alt="Electrician autorizat lucrând la un tablou electric în Brașov"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/25 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 z-10">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Siguranță la tine acasă</div>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
                  Rezolvăm problemele electrice de la prima vizită, fără riscuri ascunse.
                </h2>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] bg-[#101820] p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Disponibilitate</div>
                <div className="mt-3 text-3xl font-semibold">Luni - Sâmbătă</div>
                <p className="mt-2 text-sm leading-relaxed text-white/78">
                  Pregătit pentru urgențe și programări la adrese din Brașov, Săcele, Ghimbav și Cristian.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">Aparatură profesională</div>
                <p className="mt-3 text-sm leading-relaxed text-[#59636b]">
                  Diagnostic precis cu multimetre, detectoare de cabluri și echipamente calibrate.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#101820]/10 bg-[#fff5de] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101820]">Transparență totală</div>
                <p className="mt-3 text-sm leading-relaxed text-[#4f5860]">
                  Costuri comunicate înainte de începerea lucrării, fără costuri surpriză pe loc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#101820]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Standarde ridicate</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              De ce au clienții din Brașov nevoie de un electrician autorizat?
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Intervenție promptă în oraș",
                copy: "Timp de deplasare redus în toate cartierele Brașovului, pentru ca tu să nu pierzi timp așteptând în caz de pană sau avarie.",
              },
              {
                icon: ShieldCheck,
                title: "Conformitate ANRE & Siguranță",
                copy: "Lucrări executate riguros conform normativelor tehnice, protejându-ți locuința împotriva riscului de incendiu.",
              },
              {
                icon: BatteryCharging,
                title: "Capacitate corectă pentru consumatori",
                copy: "Dimensionarea corectă a siguranțelor și cablurilor pentru plite cu inducție, aer condiționat și electrocasnice moderne.",
              },
              {
                icon: Sparkles,
                title: "Garantarea lucrărilor efectuate",
                copy: "Oferim seriozitate maximă și garanție pentru toate montajele și reparațiile realizate la tablouri sau circuite.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-[#101820]/10 bg-[#f6f8f7] p-5">
                <item.icon className="h-5 w-5 text-[#cf9f2e]" />
                <h3 className="mt-4 text-xl font-semibold text-[#101820]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#59636b]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Servicii electrice Brașov</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              Soluții complete pentru orice problemă sau proiect electric.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#59636b]">
            De la depanări punctuale la instalații electrice complete pentru locuințe noi sau spații comerciale din Brașov.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-[#101820]/10 bg-white p-6">
              <h3 className="text-2xl font-semibold text-[#101820]">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#59636b]">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#101820] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d17a]">Cum lucrăm</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Un proces simplu, transparent și eficient pentru tine.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/74">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">Servicii Detaliate</div>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[#101820] md:text-5xl">
          Lucrări electrice executate la cele mai înalte standarde în Brașov.
        </h1>
      </div>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={service.title} className="grid gap-4 rounded-[1.75rem] border border-[#101820]/10 bg-white p-6 md:grid-cols-[100px_1fr_auto] md:items-center">
            <div className="text-2xl font-bold text-[#cf9f2e]">0{index + 1}</div>
            <div>
              <h2 className="text-2xl font-semibold text-[#101820]">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#59636b]">{service.copy}</p>
            </div>
            <Link href="/quote" className="inline-flex justify-center rounded-full bg-[#cf9f2e] px-4 py-2 text-sm font-semibold text-[#101820] transition hover:bg-[#b88d29]">
              Cere Ofertă
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function QuotePage({ basePath }: { basePath: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1