import services from "@/data/service"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServicesList() {
  return (
    <section className="max-w-7xl mx-auto py-10 md:py-20">
      <div className="mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="100">
        <span className="text-primary text-sm font-bold uppercase">Mecatronix Peru</span>
        <h1 className="text-2xl md:text-3xl font-bold uppercase text-primary">Nuestros Servicios</h1>
      </div>
      <hr className="my-8 border-t border-primary mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="300" />
      <div className="space-y-12 mx-4 md:mx-0" data-aos="fade-up" data-aos-delay="400">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/servicios/${service.slug}`}
            className="border-b border-primary/20 pb-12 grid grid-cols-1 md:grid-cols-[120px_minmax(0,520px)_1fr] items-start gap-4 md:gap-6 group cursor-pointer hover:no-underline"
            aria-label={`Ver más detalles de ${service.title}`}
          >
            <span className="text-5xl md:text-6xl font-bold text-gray-300 leading-none">
              {String(service.id).padStart(2, "0")}
            </span>
            <h3 className="text-lg md:text-2xl uppercase font-bold text-primary leading-tight">
              {service.title}
            </h3>
            <span className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary shrink-0 md:justify-self-end group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-360" />
            </span>
            <span className="hidden md:block" />
            <img
              src={service.image}
              alt={service.title}
              width={service.imageWidth}
              height={service.imageHeight}
              className="w-full h-100 object-cover rounded-3xl"
            />
            <p className="text-[15px] md:text-lg text-gray-500 leading-relaxed max-w-xl">
              {service.description}
            </p>
          </Link>
        ))}
  
      </div>
    </section>
  )
}
