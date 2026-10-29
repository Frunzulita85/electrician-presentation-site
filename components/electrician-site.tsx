import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BatteryCharging, MapPin, PhoneCall, ShieldCheck, Sparkles, Zap } from "lucide-react"

type ElectricianPage = "home" | "services" | "quote"

const services = [
  {
    title: "Intervenții Rapide & Depanare",
    copy: "Pierderi de curent, circuite care sar, mirosuri de ars și probleme electrice urgente care necesită o rezolvare imediată și sigură.",
  },
  {
    title: "Tablouri Electrice & Siguranțe",
    copy: "Înlocuiri de tablouri, modernizări și îmbunătățiri de siguranță pentru locuințe care au nevoie de o capacitate corectă și conformitate.",
  },
  {
    title: "Iluminat & Prize",
    copy: "Montaj prize, întrerupătoare, corpuri de iluminat, iluminat ornamental pentru grădină și lucrări electrice vizibile executate cu atenție.",
  },
  {
    title: "Verificări PRAM & Certificări",
    copy: "Măsurători, inspecții, buletine PRAM și suport tehnic periodic pentru spații comerciale, birouri și imobile închiriate.",
  },
  {
    title: "Renovări & Cablări Complete",
    copy: "Reablări parțiale sau totale, lucrări pentru extinderi, proiecte de bucătării și planificare electrică pentru renovări ample.",
  },
  {
    title: "Mentenanță Preventivă",
    copy: "Reparații minore, verificări programate și suport pe termen lung pentru a transforma lucrările punctuale în parteneriate de durată.",
  },
]

const processSteps = [
  {
    title: "Clarificarea problemei",
    copy: "Pagina principală și fluxul de cereri sunt concepute atât pentru depanări urgente, cât și pentru lucrări electrice planificate în locuințe.",
  },
  {
    title: "Dirijarea corectă a cererii",
    copy: "Structura acceptă solicitări pentru intervenții în aceeași zi, cereri de oferte de la proprietari și proiecte complexe fără a folosi un formular generic.",
  },
  {
    title: "Dezvoltare SEO locală puternică",
    copy: "Site-ul este construit pentru servicii, zone de acoperire, secțiuni de întrebări frecvente și conținut de încredere pentru a crește organic în căutări.",
  },
]

const serviceAreas = ["Centru", "Schei", "Tractorul", "Racadau", "Noua", "Stupini", "Florilor", "Ghimbav"]

const reviews = [
  {
    name: "Alexandru M.",
    quote: "În sfârșit, un site de profil care arată a platformă serioasă de electrician, nu o temă generică cu culori schimbate.",
  },
  {
    name: "Ioana P.",
    quote: "Un echilibru excelent între urgențe, încrederea oferită clientului și claritatea paginilor de servicii.",
  },
]

function getHref(basePath: string, page: ElectricianPage) {
  if (page === "home") return basePath || "/"
  return `${basePath}/${page}`
}

function PreviewNav({ currentPage, basePath }: { currentPage: ElectricianPage; basePath: string }) {
  const items = [
    { label: "Acasă", href: getHref(basePath, "home"), page: "home" as const },
    { label: "Servicii", href: getHref(basePath, "services"), page: "services" as const },
    { label: "Ofertă", href: getHref(basePath, "quote"), page: "quote" as const },
  ]

  return (
    <nav className="hidden items-center gap-8 text-sm text-[#59636b] md:flex">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={currentPage === item.page ? "text-[#101820]" : "transition hover:text-[#101820]"}>
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
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">VoltGuard Electric</div>
          <div className="mt-1 text-sm text-[#59636b]">Instalații electrice rezidențiale, depanare rapidă și modernizări de siguranță</div>
        </div>

        <PreviewNav currentPage={currentPage} basePath={basePath} />

        <a href="tel:+40721000000" className="inline-flex items-center rounded-full bg-[#101820] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d2a36]">
          <PhoneCall className="mr-2 h-4 w-4" />
          0721 000 000
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
              Servicii electrice autorizate
            </div>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#101820] md:text-6xl">
              Un site modern pentru electricieni pregătiți de urgențe, modernizări și SEO local puternic.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#59636b]">
              Construit pentru profesioniștii care au nevoie de mai mult decât o pagină de prezentare simplă. Acest șablon îmbină claritatea intervențiilor de urgență, încrederea clienților și profunzimea paginilor de servicii.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={getHref(basePath, "quote")} className="inline-flex items-center rounded-full bg-[#cf9f2e] px-5 py-3 text-sm font-semibold text-[#101820] transition hover:bg-[#b88d29]">
                Solicită o Ofertă Electrică
              </Link>
              <Link href={getHref(basePath, "services")} className="inline-flex items-center rounded-full border border-[#101820]/10 bg-white px-5 py-3 text-sm font-semibold text-[#101820] transition hover:border-[#101820]/25">
                Explorează Serviciile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Flux rapid pentru urgențe", "Poziționare pe siguranță și modernizări", "Structurat pentru SEO pe servicii"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#101820]/10 bg-white px-4 py-4 text-sm text-[#59636b]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
            <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#101820] p-6 shadow-[0_30px_80px_rgba(16,24,32,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1600&q=80"
                alt="Tablou electric cu siguranțe automate"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 z-10">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Siguranță și precizie tehnică</div>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
                  Diagnostice exacte și verificări riguroase pentru orice tip de instalație electrică.
                </h2>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] bg-[#101820] p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Disponibilitate urgențe</div>
                <div className="mt-3 text-3xl font-semibold">24/7</div>
                <p className="mt-2 text-sm leading-relaxed text-white/78">
                  Pentru electricianul care are nevoie de o structură solidă în spatele apelurilor locale urgente.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">Bază SEO solidă</div>
                <p className="mt-3 text-sm leading-relaxed text-[#59636b]">
                  Spațiu dedicat pentru pagini de servicii, zone de acoperire, întrebări frecvente și conținut de siguranță.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#101820]/10 bg-[#fff5de] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101820]">Portofoliu mixt</div>
                <p className="mt-3 text-sm leading-relaxed text-[#4f5860]">
                  Ideal pentru proprietari de locuințe, modernizări, panouri electrice și mentenanță pe termen lung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#101820]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">De ce funcționează această structură</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              Site-urile pentru electricieni au nevoie de mai multă claritate privind siguranța și urgențele decât șabloanele generice.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Depanare și răspuns rapid",
                copy: "Designul încurajează apelul telefonic rapid pentru probleme electrice urgente, fără a transforma tot site-ul într-o pagină superficială.",
              },
              {
                icon: ShieldCheck,
                title: "Certificate și semne de încredere",
                copy: "Esențial atunci când afacerea discută despre siguranță, inspecții, remedieri și garanții pentru lucrările efectuate.",
              },
              {
                icon: BatteryCharging,
                title: "Modernizări și extinderi",
                copy: "O bază solidă pentru panouri electrice, proiecte de iluminat, renovări și lucrări rezidențiale cu valoare ridicată.",
              },
              {
                icon: Sparkles,
                title: "Optimizare SEO pregătită",
                copy: "Construit pentru a crește organic prin pagini dedicate de servicii, zone deservite, întrebări frecvente și conținut local.",
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Servicii electrice principale</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              Suficient de complex pentru o afacere reală de electrician, nu doar o pagină de start provizorie.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#59636b]">
            Structura este gândită pentru apeluri de urgență, modernizări casnice, lucrări de iluminat, verificări și suport dedicat clienților rezidențiali.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d17a]">Procesul de preluare</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Construit în jurul modului în care se obțin lucrările locale.</h2>
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
        <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">Pagina de servicii</div>
        <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight text-[#101820]">Servicii structurate după comportamentul clienților, nu texte generice.</h1>
      </div>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={service.title} className="grid gap-4 rounded-[1.75rem] border border-[#101820]/10 bg-white p-5 md:grid-cols-[120px_1fr_auto] md:items-center">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">0{index + 1}</div>
            <div>
              <h2 className="text-2xl font-semibold text-[#101820]">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#59636b]">{service.copy}</p>
            </div>
            <div className="rounded-full bg-[#cf9f2e] px-4 py-2 text-sm font-semibold text-[#101820]">Cere ofertă</div>
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
        <div className="rounded-[2rem] bg-[#101820] p-8 text-white">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Formular de ofertă</div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">Modalitate rapidă pentru cereri serioase.</h1>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <div>Pregătit pentru defecțiuni, panouri și lucrări casnice</div>
            <div>Funcțional pentru urgențe și verificări periodice</div>
            <div>Opțiune simplă pentru apel direct când timpul contează</div>
          </div>
          <Link href={getHref(basePath, "services")} className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">
            Vezi Serviciile Electrice <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Nume complet", "Număr de telefon", "Adresă / Zonă", "Ora preferată", "Ce lucrări electrice sunt necesare?"].map((field, index) => (
              <div key={field} className={`rounded-xl border border-[#101820]/10 px-4 py-3 text-sm text-gray-500 ${index === 4 ? "sm:col-span-2" : ""}`}>
                {field}
              </div>
            ))}
          </div>
          <div className="mt-5 inline-flex rounded-full bg-[#cf9f2e] px-5 py-3 text-sm font-semibold text-[#101820]">Trimite solicitarea</div>
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
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">VoltGuard Electric</div>
            <p className="mt-4 text-sm leading-relaxed text-[#59636b]">
              Instalații electrice rezidențiale, modernizări și asistență locală pentru defecțiuni, cu o structură digitală curată pentru urgențe, încredere și creștere SEO pe termen lung.
            </p>
          </div>
          <div className="text-sm text-[#59636b]">
            <Link href={getHref(basePath, "home")} className="block">Acasă</Link>
            <Link href={getHref(basePath, "services")} className="mt-2 block">Servicii</Link>
            <Link href={getHref(basePath, "quote")} className="mt-2 block">Ofertă</Link>
          </div>
          <div className="text-sm text-[#59636b]">
            <div>0721 000 000</div>
            <div className="mt-2">contact@voltguard.ro</div>
            <div className="mt-2">Brașov și împrejurimi</div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#101820]/10 pt-6 text-sm text-[#59636b]">
          <a href="https://twosquares.co.uk" target="_blank" rel="noopener noreferrer">
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
      <SiteHeader currentPage={currentPage} basePath={basePath} />
      {currentPage === "home" ? <HomePage basePath={basePath} /> : null}
      {currentPage === "services" ? <ServicesPage /> : null}
      {currentPage === "quote" ? <QuotePage basePath={basePath} /> : null}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Acoperire și încredere</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#101820]">Pregătit pentru pagini de zonă, recenzii și vizibilitate locală crescută.</h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-full bg-[#f6f8f7] px-3 py-1 text-xs text-[#59636b]">
                    <MapPin className="mr-1 inline h-3 w-3" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {reviews.map((review) => (
                  <div key={review.name} className="rounded-2xl border border-[#101820]/10 bg-[#f6f8f7] p-4">
                    <div className="text-sm font-semibold text-[#101820]">{review.name}</div>
                    <p className="mt-2 text-sm leading-relaxed text-[#59636b]">{review.quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer basePath={basePath} />
    </div>
  )
}