import SEO from "@/components/SEO"
import sectors from "@/data/sectors"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function SectorsPage() {
  const siteUrl = "https://www.mecatronixperu.com"

  return (
    <main>
      <SEO
        title="Sectores que atendemos | Mecatronix Perú"
        description="Mantenimiento y reparación de máquinas para panadería, pastelería, gastronomía, hotelería y distintas industrias en Lima y provincias."
        url={`${siteUrl}/sectores`}
        image={`${siteUrl}/ogImageMecatronix.png`}
        breadcrumbs={[
          { name: "Inicio", url: `${siteUrl}/` },
          { name: "Sectores", url: `${siteUrl}/sectores` },
        ]}
      />
      <section className="max-w-7xl mx-auto px-4 py-12 md:px-0 md:py-20">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="text-sm font-bold uppercase text-primary">Mecatronix Perú</span>
          <h1 className="mt-2 text-3xl font-bold uppercase text-primary md:text-4xl">Sectores que atendemos</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Atendemos empresas de distintos rubros, con especial presencia en panadería, pastelería,
            gastronomía y hotelería. Nuestra cobertura prioritaria es Lima y provincias.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              to={`/sectores/${sector.slug}`}
              className="group rounded-2xl border border-primary/15 p-6 transition-shadow duration-500 hover:shadow-lg md:p-8"
            >
              <h2 className="text-xl font-bold uppercase text-primary md:text-2xl">{sector.name}</h2>
              <p className="mt-3 leading-relaxed text-gray-600">{sector.intro}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold uppercase text-primary">
                Conoce más <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
