import sectors from "@/data/sectors"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function SectorSectionHome() {
  return (
    <section className="bg-gray-50 px-4 py-16 md:py-20" data-aos="fade-up" data-aos-delay="100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase text-primary">Experiencia por rubro</span>
            <h2 className="mt-2 text-2xl font-bold uppercase text-primary md:text-3xl">Sectores que atendemos</h2>
          </div>
          <Link to="/sectores" className="group relative pb-1 font-bold uppercase text-primary">Todos los sectores
            <span className="absolute left-0 bottom-0 h-px w-0 rounded bg-primary transition-all duration-300 ease-in-out group-hover:w-full" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <Link key={sector.slug} to={`/sectores/${sector.slug}`} className="group rounded-2xl bg-white p-5 shadow-sm transition-shadow duration-500 hover:shadow-lg">
              <h3 className="font-bold uppercase text-primary">{sector.name}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase text-gray-600 group-hover:text-primary">
                Ver atención <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
