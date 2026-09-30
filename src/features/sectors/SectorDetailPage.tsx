import SEO from "@/components/SEO"
import { getSectorBySlug } from "@/data/sectors"
import services, { getServiceBySlugParam } from "@/data/service"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"

const siteUrl = "https://www.mecatronixperu.com"

export default function SectorDetailPage() {
  const { sectorSlug } = useParams()
  const sector = sectorSlug ? getSectorBySlug(sectorSlug) : undefined

  if (!sector) return <Navigate to="/sectores" replace />

  const relatedServices = sector.relatedServices
    .map((slug) => getServiceBySlugParam(slug))
    .filter((service): service is (typeof services)[number] => Boolean(service))
  const whatsappMessage = encodeURIComponent(`Hola, quisiera consultar por ${sector.name}.`)

  return (
    <main>
      <SEO
        title={sector.metaTitle}
        description={sector.metaDescription}
        url={`${siteUrl}/sectores/${sector.slug}`}
        image={`${siteUrl}/ogImageMecatronix.png`}
        breadcrumbs={[
          { name: "Inicio", url: `${siteUrl}/` },
          { name: "Sectores", url: `${siteUrl}/sectores` },
          { name: sector.name, url: `${siteUrl}/sectores/${sector.slug}` },
        ]}
      />
      <section className="bg-primary px-4 py-14 text-white md:py-24">
        <div className="mx-auto max-w-7xl" data-aos="fade-up" data-aos-delay="100">
          <Link to="/sectores" className="text-sm font-bold uppercase text-white/80 hover:text-white">← Sectores</Link>
          <div className="max-w-4xl pt-10">
            <span className="text-sm font-bold uppercase tracking-wide text-white/75">Mecatronix Perú</span>
            <h1 className="mt-3 text-3xl font-bold uppercase leading-tight md:text-5xl">{sector.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">{sector.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="group relative cursor-pointer overflow-hidden rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase text-white transition-colors duration-500 hover:text-primary">
                <span className="pointer-events-none absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-500">
                  Solicitar evaluación
                </span>
              </Link>
              <a
                href={`https://wa.me/51902778456?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group relative cursor-pointer overflow-hidden rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase text-white transition-colors duration-500 hover:text-primary"
              >
                <span className="pointer-events-none absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
                <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-500">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-12 md:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] md:px-0 md:py-20" data-aos="fade-up" data-aos-delay="200">
        <div className="space-y-10">
          {sector.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-2xl font-bold uppercase text-primary md:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-600">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
        <aside className="h-fit rounded-2xl bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-bold uppercase text-primary">Servicios relacionados</h2>
          <ul className="mt-5 space-y-4">
            {relatedServices.map((service) => (
              <li key={service.slug}>
                <Link to={`/servicios/${service.slug}`} className="group flex items-start gap-2 text-gray-700 hover:text-primary">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  <span>{service.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/servicios" className="group relative mt-6 inline-block pb-1 font-bold uppercase text-primary">Ver todos los servicios
            <span className="absolute left-0 bottom-0 h-px w-0 rounded bg-primary transition-all duration-300 ease-in-out group-hover:w-full" />
          </Link>
        </aside>
      </section>

      <section className="bg-gray-50 px-4 py-12 text-center md:py-16" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-bold uppercase text-primary md:text-3xl">¿Necesitas mantenimiento o reparación?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Cuéntanos qué equipo necesitas atender y dónde se encuentra para evaluar el alcance del servicio.</p>
        <Link to="/contacto" className="group relative mt-6 inline-flex cursor-pointer overflow-hidden rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold uppercase text-primary transition-colors duration-500 hover:text-white">
          <span className="pointer-events-none absolute inset-0 translate-y-full bg-primary transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
          <span className="relative z-10 transition-colors duration-500">Contactar a Mecatronix</span>
        </Link>
      </section>
    </main>
  )
}
