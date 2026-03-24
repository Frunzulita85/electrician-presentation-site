import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BatteryCharging, CheckCircle2, MapPin, PhoneCall, ShieldCheck, Sparkles, Zap } from "lucide-react"

type ElectricianPage = "home" | "services" | "quote"

const services = [
  {
    title: "Emergency Fault Finding",
    copy: "Power loss, tripping circuits, burning smells, and the electrical jobs where the next step needs to feel obvious immediately.",
  },
  {
    title: "Consumer Units & Upgrades",
    copy: "Board changes, safety improvements, and upgrade work for homes that need cleaner capacity and compliance.",
  },
  {
    title: "Lighting & Power",
    copy: "Sockets, switches, feature lighting, garden lighting, and the visible electrical work homeowners compare carefully.",
  },
  {
    title: "EICRs & Landlord Safety",
    copy: "Certificates, inspections, remedials, and repeat electrical support for landlords and managed properties.",
  },
  {
    title: "Rewires & Renovations",
    copy: "Partial rewires, extension work, kitchen projects, and electrical planning around broader home improvements.",
  },
  {
    title: "Maintenance Support",
    copy: "Smaller fixes, scheduled checks, and longer-term support work that turns one-off jobs into repeat relationships.",
  },
]

const processSteps = [
  {
    title: "Explain the issue clearly",
    copy: "The homepage and quote path are built for both urgent fault-finding and more planned domestic electrical work.",
  },
  {
    title: "Route the enquiry properly",
    copy: "The structure supports same-day jobs, homeowner quote requests, and landlord or certificate-led enquiries without one generic path for all of them.",
  },
  {
    title: "Grow into stronger local coverage",
    copy: "The site is built for services, areas, FAQs, and trust content so it can become a proper local SEO asset over time.",
  },
]

const serviceAreas = ["Stockbridge", "Morningside", "Leith", "Trinity", "Portobello", "Corstorphine", "Newington", "Musselburgh"]

const reviews = [
  {
    name: "Hannah C.",
    quote: "This feels like a proper electrician website structure instead of a generic trade theme with the colours changed.",
  },
  {
    name: "Marcus T.",
    quote: "Good balance between urgent fault-finding, homeowner trust, and room to expand into certificates and service pages.",
  },
]

function getHref(basePath: string, page: ElectricianPage) {
  if (page === "home") return basePath || "/"
  return `${basePath}/${page}`
}

function PreviewNav({ currentPage, basePath }: { currentPage: ElectricianPage; basePath: string }) {
  const items = [
    { label: "Home", href: getHref(basePath, "home"), page: "home" as const },
    { label: "Services", href: getHref(basePath, "services"), page: "services" as const },
    { label: "Quote", href: getHref(basePath, "quote"), page: "quote" as const },
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
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">Northwire Electric</div>
          <div className="mt-1 text-sm text-[#59636b]">Domestic electrical work, fault finding, and local safety upgrades</div>
        </div>

        <PreviewNav currentPage={currentPage} basePath={basePath} />

        <a href="tel:+441313330880" className="inline-flex items-center rounded-full bg-[#101820] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d2a36]">
          <PhoneCall className="mr-2 h-4 w-4" />
          0131 333 0880
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
              Electrician lead-generation template
            </div>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#101820] md:text-6xl">
              A sharper electrician website for urgent faults, upgrade work, and stronger local SEO.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#59636b]">
              Built for electricians who need more than a generic trade homepage. This template balances emergency intent, homeowner trust, and cleaner service-page depth for long-term growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={getHref(basePath, "quote")} className="inline-flex items-center rounded-full bg-[#cf9f2e] px-5 py-3 text-sm font-semibold text-[#101820] transition hover:bg-[#b88d29]">
                Request Electrical Quote
              </Link>
              <Link href={getHref(basePath, "services")} className="inline-flex items-center rounded-full border border-[#101820]/10 bg-white px-5 py-3 text-sm font-semibold text-[#101820] transition hover:border-[#101820]/25">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Emergency-ready call flow", "Safety and upgrade positioning", "Structured for service-page SEO"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#101820]/10 bg-white px-4 py-4 text-sm text-[#59636b]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] bg-[#101820] shadow-[0_30px_80px_rgba(16,24,32,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80"
                alt="Electrician working on a domestic electrical installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/88 via-[#101820]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Multi-page electrician concept</div>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
                  Stronger hierarchy for faults, lighting, upgrades, certificates, and quote-first electrical enquiries.
                </h2>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] bg-[#101820] p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Emergency intent</div>
                <div className="mt-3 text-3xl font-semibold">24/7</div>
                <p className="mt-2 text-sm leading-relaxed text-white/78">
                  For electricians who still need a real website structure behind urgent local calls.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">SEO foundation</div>
                <p className="mt-3 text-sm leading-relaxed text-[#59636b]">
                  Room for services, area pages, FAQs, and safety-led trust content from the start.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#101820]/10 bg-[#fff5de] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101820]">Service blend</div>
                <p className="mt-3 text-sm leading-relaxed text-[#4f5860]">
                  Built for homeowners, landlords, upgrades, emergency faults, and repeat maintenance work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#101820]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Why this structure works</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              Electrician websites need clearer safety, urgency, and service separation than most generic trade templates give them.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Fault-finding and urgent response",
                copy: "The layout supports click-to-call behaviour for urgent electrical issues without turning the whole site into a shallow emergency page.",
              },
              {
                icon: ShieldCheck,
                title: "Certificates and trust signals",
                copy: "Useful when the business needs to talk about safety, inspections, remedials, and homeowner reassurance alongside core electrical work.",
              },
              {
                icon: BatteryCharging,
                title: "Upgrade and renovation fit",
                copy: "A stronger base for consumer units, lighting upgrades, extension work, and higher-value domestic electrical projects.",
              },
              {
                icon: Sparkles,
                title: "Expansion-ready SEO base",
                copy: "Built to grow into service pages, coverage pages, FAQs, and neighborhood-specific local content over time.",
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Core electrical services</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#101820]">
              Comprehensive enough for a real electrician business, not just a placeholder starter.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#59636b]">
            The first electrician template is intentionally broad enough for urgent callouts, homeowner upgrades, lighting work, certificates, and landlord-led support.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d17a]">Enquiry process</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Built around how local electrical jobs actually get won.</h2>
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
        <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">Services page direction</div>
        <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight text-[#101820]">Service lines arranged for electrician buying behaviour, not generic trade filler.</h1>
      </div>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={service.title} className="grid gap-4 rounded-[1.75rem] border border-[#101820]/10 bg-white p-5 md:grid-cols-[120px_1fr_auto] md:items-center">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cf9f2e]">0{index + 1}</div>
            <div>
              <h2 className="text-2xl font-semibold text-[#101820]">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#59636b]">{service.copy}</p>
            </div>
            <div className="rounded-full bg-[#cf9f2e] px-4 py-2 text-sm font-semibold text-[#101820]">Get quote</div>
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
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Electrical quote flow</div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">Shorter path for serious electrical enquiries.</h1>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <div>Built for faults, upgrades, and planned domestic jobs</div>
            <div>Works for emergency calls and certificate-led enquiries</div>
            <div>Easy fallback to direct calling when urgency matters</div>
          </div>
          <Link href={getHref(basePath, "services")} className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">
            View Electrical Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-[2rem] border border-[#101820]/10 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Full name", "Phone number", "Postcode", "Preferred time", "What electrical work is needed?"].map((field, index) => (
              <div key={field} className={`rounded-xl border border-[#101820]/10 px-4 py-3 text-sm text-gray-500 ${index === 4 ? "sm:col-span-2" : ""}`}>
                {field}
              </div>
            ))}
          </div>
          <div className="mt-5 inline-flex rounded-full bg-[#cf9f2e] px-5 py-3 text-sm font-semibold text-[#101820]">Request electrical quote</div>
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
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf9f2e]">Northwire Electric</div>
            <p className="mt-4 text-sm leading-relaxed text-[#59636b]">
              Domestic electrical work, upgrades, and local fault support with a cleaner digital structure for urgent jobs, homeowner trust, and long-term SEO growth.
            </p>
          </div>
          <div className="text-sm text-[#59636b]">
            <Link href={getHref(basePath, "home")} className="block">Home</Link>
            <Link href={getHref(basePath, "services")} className="mt-2 block">Services</Link>
            <Link href={getHref(basePath, "quote")} className="mt-2 block">Quote</Link>
          </div>
          <div className="text-sm text-[#59636b]">
            <div>0131 333 0880</div>
            <div className="mt-2">hello@northwireelectric.co</div>
            <div className="mt-2">Edinburgh and surrounding areas</div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#101820]/10 pt-6 text-sm text-[#59636b]">
          <a href="https://twosquares.co.uk" target="_blank" rel="noopener noreferrer">
            Website Developed by TwoSquares
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cf9f2e]">Coverage and trust</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#101820]">Ready for service-area pages, reviews, and local visibility growth.</h2>
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
