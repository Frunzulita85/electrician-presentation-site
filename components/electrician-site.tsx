"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BatteryCharging, MapPin, PhoneCall, ShieldCheck, Sparkles, Zap } from "lucide-react"

type ElectricianPage = "home" | "services" | "quote"

const services = [
  {
    title: "Intervenții Rapide & Depanare Non-Stop",
    copy: "Scurtcircuite, pene de curent, tablouri care sar sau mirosuri suspecte de la prize. Intervenție rapidă în Cluj-Napoca și zonele limitrofe.",
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
    copy: "Verificări periodice, buletine PRAM pentru spații comerciale, birouri, cabinete și imobile noi sau închiriate în Cluj.",
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
    copy: "Mă deplasez rapid în Cluj-Napoca și împrejurimi, identific defectul cu aparatură profesională și îți propun soluția optimă.",
  },
  {
    title: "3. Execuție Curată & Garantată",
    copy: "Lucrare realizată conform normativelor ANRE în vigoare, cu curățenie la final și garanție scrisă pentru manoperă.",
  },
]

const serviceAreas = [
  "Centru",
  "Mărăști",
  "Mănăștur",
  "Gheorgheni",
  "Zorilor",
  "Grigorescu",
  "Bună Ziua",
  "Florești",
  "Baciu",
  "Apahida",
  "Jucu",
  "Gilău"
]

const reviews = [
  {
    name: "Radu V. (Cluj-Napoca)",
    quote: "A intervenit rapid duminică seara când am rămas fără curent în jumătate de apartament în Mărăști. Profesionist, curat și foarte prompt.",
  },
  {
    name: "Mirela S. (Florești)",
    quote: "Am apelat pentru schimbarea tabloului electric vechi dintr-un bloc comunist. Totul trasat ca la carte, respectat termenul și prețul stabilit.",
  },
]

function getHref(basePath: string, page: ElectricianPage) {
  if (page === "home") return basePath || "/"
  return `${basePath}/${page}`
}

function DemoBanner() {
  return (
    <div className="bg-[#101820] px-4 py-2.5 text-center text-xs font-medium text-white md:text-sm">
      <span className="text-[#cf9f2e] font-semibold">SITE DEMO DE VÂNZARE:</span> Ești electrician în Cluj și vrei acest site personalizat cu datele tale?{" "}
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
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">Voltaic Cluj Electric</div>
          <div className="mt-1 text-sm font-medium text-[#101820]">Electrician Autorizat ANRE • Cluj-Napoca</div>
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
              Intervenții rapide în Cluj și Florești
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#101820] md:text-5xl">
              Electrician autorizat în Cluj-Napoca pentru urgențe, tablouri și instalații sigure.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#59636b]">
              Servicii electrice profesionale pentru locuințe, case și spații comerciale. Deplasare rapidă în toate cartierele Clujului și în localitățile limitrofe.
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
              {["Autorizat ANRE", "Intervenții în Cluj & Florești", "Garanție pentru lucrări"].map((item) => (
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
                alt="Electrician autorizat lucrând la un tablou electric în Cluj"
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
                  Pregătit pentru urgențe și programări la adrese din Cluj-Napoca, Florești, Baciu și Apahida.
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
              De ce au clienții din Cluj nevoie de un electrician autorizat?
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Intervenție promptă în oraș",
                copy: "Timp de deplasare redus în toate cartierele Clujului, pentru ca tu să nu pierzi timp așteptând în caz de pană sau avarie.",
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Servicii electrice Cluj</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              Soluții complete pentru orice problemă sau proiect electric.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#59636b]">
            De la depanări punctuale la instalații electrice complete pentru locuințe noi sau spații comerciale din Cluj-Napoca.
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
          Lucrări electrice executate la cele mai înalte standarde în Cluj.
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
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] bg-[#101820] p-8 text-white flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Contact rapid</div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Ai nevoie de un electrician în Cluj? Hai să discutăm.</h1>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Sună direct la numărul de telefon afișat sau scrie-ne pe WhatsApp pentru intervenții urgente în Cluj-Napoca și împrejurimi.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-white/60">Apel direct urgențe</div>
            <a href="tel:+40747856267" className="mt-1 block text-2xl font-bold text-[#cf9f2e]">0747 856 267</a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-8 flex flex-col justify-center items-center text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cf9f2e] mb-2">Conexiune instantanee</div>
          <h2 className="text-2xl font-semibold text-[#101820] mb-3">Preferi apelul direct?</h2>
          <p className="text-sm text-[#59636b] mb-6 max-w-md">
            Meseriașii din Cluj răspund cel mai repede la telefon sau WhatsApp. Ia legătura direct cu noi pentru orice urgență sau lucrare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a
              href="tel:+40747856267"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cf9f2e] px-6 py-3.5 text-sm font-bold text-[#101820] shadow-md hover:bg-[#b88d29] transition"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Sună: 0747 856 267</span>
            </a>
            <a
              href="https://wa.me/40747856267?text=Salut,%20am%20nevoie%20de%20un%20electrician%20in%20Cluj."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#20ba5a] transition"
            >
              <span>💬 WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function BuyWebsiteSection() {
  return (
    <section id="cumpara-site" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2.5rem] bg-[#101820] p-8 md:p-12 text-white shadow-xl text-center">
        <div className="inline-flex items-center rounded-full bg-[#cf9f2e]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#cf9f2e] mb-4">
          Ofertă limitată pentru electricieni în Cluj
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto leading-tight">
          Vrei acest site personalizat cu datele tale în 48 de ore?
        </h2>

        <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          Nu pierde timpul cu formulare lungi. Sună-ne direct sau dă-ne un mesaj pe WhatsApp și îl configurăm imediat pentru afacerea ta.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+40747856267"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#cf9f2e] px-8 py-4 text-base font-bold text-[#101820] shadow-lg hover:bg-[#b88d29] transition transform hover:-translate-y-0.5"
          >
            <PhoneCall className="h-5 w-5" />
            <span>Sună Acum: 0747 856 267</span>
          </a>

          <a
            href="https://wa.me/40747856267?text=Salut,%20am%20vazut%20site-ul%20demo%20pentru%20electrician%20in%20Cluj%20si%20sunt%20interesat%20sa-l%20cumpar!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[#20ba5a] transition transform hover:-translate-y-0.5"
          >
            <span>💬 Scrie-ne pe WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
          <div>✓ Fără avans sau bătăi de cap</div>
          <div>✓ Optimizat complet pentru Google & Mobil</div>
          <div>✓ Găzduire și suport incluse</div>
        </div>
      </div>
    </section>
  )
}

function Footer({ basePath }: { basePath: string }) {
  return (
    <footer className="border-t border-[#101820]/10 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">Voltaic Cluj Electric</div>
            <p className="mt-4 text-sm leading-relaxed text-[#59636b]">
              Servicii electrice autorizate ANRE în Cluj-Napoca și zona metropolitană. Intervenții rapide, montaj tablouri și instalații sigure pentru locuința ta.
            </p>
          </div>
          <div className="text-sm text-[#59636b]">
            <div className="font-semibold text-[#101820] mb-2">Navigare rapidă</div>
            <Link href={getHref(basePath, "home")} className="block hover:text-[#101820]">Acasă</Link>
            <Link href={getHref(basePath, "services")} className="mt-2 block hover:text-[#101820]">Servicii</Link>
            <Link href={getHref(basePath, "quote")} className="mt-2 block hover:text-[#101820]">Ofertă / Contact</Link>
          </div>
          <div className="text-sm text-[#59636b]">
            <div className="font-semibold text-[#101820] mb-2">Contact & Program</div>
            <div className="font-medium text-[#101820]">0747 856 267</div>
            <div className="mt-1">contact@voltaic-cluj.ro</div>
            <div className="mt-1">Cluj-Napoca, Florești, Baciu, Apahida</div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#101820]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-[#59636b] gap-4">
          <div>© {new Date().getFullYear()} Voltaic Cluj Electric. Toate drepturile rezervate.</div>
          <a href="https://twosquares.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#101820] transition">
            Website Dezvoltat de TwoSquares
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function ElectricianTemplateSite({
  currentPage,
  basePath = "",
}: {
  currentPage: ElectricianPage
  basePath?: string
}) {
  return (
    <div className="min-h-screen bg-[#eef2f1] text-[#101820]">
      <DemoBanner />
      <SiteHeader currentPage={currentPage} basePath={basePath} />
      {currentPage === "home" ? <HomePage basePath={basePath} /> : null}
      {currentPage === "services" ? <ServicesPage /> : null}
      {currentPage === "quote" ? <QuotePage basePath={basePath} /> : null}

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-7 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Zonă de acoperire</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#101820]">
                Prezenți prompt în toate cartierele din Cluj și împrejurimi.
              </h2>
              <p className="mt-3 text-sm text-[#59636b] leading-relaxed">
                Asigurăm deplasare rapidă pentru urgențe și lucrări programate atât în oraș, cât și în zonele rezidențiale exterioare.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-full bg-[#f6f8f7] border border-[#101820]/5 px-3.5 py-1.5 text-xs font-medium text-[#101820]">
                    <MapPin className="mr-1 inline h-3 w-3 text-[#cf9f2e]" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#101820]/10 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-2xl border border-[#101820]/10 bg-[#f6f8f7] p-5">
                <div className="text-sm font-semibold text-[#101820]">{review.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-[#59636b] italic">&ldquo;{review.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BuyWebsiteSection />

      <Footer basePath={basePath} />
    </div>
  )
}