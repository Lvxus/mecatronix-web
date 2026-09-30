import SEO from "@/components/SEO"
import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import AOS from "aos"
import { CircleCheck } from "lucide-react"
import services, { getServiceBySlugParam } from "@/data/service"
import { getServiceFeatureIcon } from "@/data/serviceFeatureIcons"
import ContactSectionService from "@/components/services/ContactSectionService"
import GalleryCarousel from "@/components/GalleryCarousel"
import { getSectorsForService } from "@/data/sectors"

export default function ServiceDetailPage() {

  const { serviceSlug } = useParams();
  const service = serviceSlug ? getServiceBySlugParam(serviceSlug) : undefined;

  const canonicalUrl = `https://www.mecatronixperu.com/servicios/${service?.slug}`

  const otherServices = service
    ? services.filter((s) => s.id !== service.id).slice(0, 9)
    : []
  const relatedSectors = service ? getSectorsForService(service.slug) : []

  useEffect(() => {
    if (!service) return
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        AOS.refresh()
      })
    })
  }, [service])

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <>
      {service ? (
        <SEO
          title={`${service.title} - Mecatronix Perú`}
          description={service.description ?? service.longDescription ?? "Servicio industrial especializado de Mecatronix Perú."}
          url={canonicalUrl}
          image={service.image}
          type="Service"
          breadcrumbs={[
            {name: "Inicio", url: "https://www.mecatronixperu.com/"},
            {name: "Servicios", url: "https://www.mecatronixperu.com/servicios"},
            {name: service.title, url: canonicalUrl},
          ]}
        />
      ) : null}
      <main key={service.slug}>
        <section className="py-10 md:py-15">
          <div className="mx-4 md:mx-0 space-y-5">
            <div className="max-w-7xl mx-auto">
              <Link
                to="/servicios"
                className="text-sm font-bold uppercase text-primary hover:underline"
              >
                ← Volver a servicios
              </Link>
            </div>
            <div
              className="w-full md:bg-primary pt-16 pb-10 md:bg-[linear-gradient(90deg,var(--color-primary)_0%,var(--color-primary)_70%,#f5f5f4_70%,#f5f5f4_100%)] md:pt-20 md:pb-40"
            >
              <div className="max-w-7xl mx-auto relative px-0 sm:px-4 md:px-0">
                <span className="text-primary md:text-white text-sm font-bold uppercase block text-center mb-8 md:mb-10" data-aos="fade-up" data-aos-delay="100">
                  Mecatronix Peru
                </span>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                  <div className="flex flex-col items-center justify-center space-y-4 md:space-y-5">
                    <h1 className="text-balance text-2xl md:text-4xl font-bold uppercase text-primary md:text-white text-center px-1" data-aos="fade-up" data-aos-delay="200">
                      {service.title}
                    </h1>
                    {service.longDescription ? (
                      <div className="prose prose-lg max-w-3xl text-primary md:text-white whitespace-pre-line max-md:w-full text-justify" data-aos="fade-up" data-aos-delay="500">
                        {service.longDescription}
                      </div>
                    ) : null}
                    <div className="flex" data-aos="fade-up" data-aos-delay="600">
                      <Link
                        className="relative overflow-hidden bg-transparent px-6 py-2 uppercase cursor-pointer font-bold border border-primary group transition-colors rounded-full duration-500 hover:text-primary text-sm text-primary md:text-white md:border-white"
                        to="/contacto"
                      >
                        <span
                          className="
                        absolute inset-0 
                        bg-white
                        translate-y-full
                        group-hover:translate-y-0
                        transition-transform duration-500 ease-in-out pointer-events-none
                      "
                        />
                        <span
                          className="relative z-10 transition-colors duration-500"
                        >
                          Cotizar servicio
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full min-w-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full max-h-[280px] rounded-3xl object-cover sm:max-h-[360px] md:max-h-[420px]"
                      data-aos="fade-up" data-aos-delay="300"
                    />
                  </div>
                </div>
                {service.features.length > 0 ? (
                  <div className="mx-auto mt-10 max-w-7xl max-md:relative max-md:px-0 md:absolute md:mt-20 md:px-0">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
                      {service.features.map((feature) => {
                        const Icon = getServiceFeatureIcon(feature.icon)
                        return (
                          <li
                            key={`${feature.icon}-${feature.title}`}
                            className="rounded-2xl p-5 shadow-xl bg-white md:p-6"
                            data-aos="fade-up"
                            data-aos-delay="150"
                          >
                            <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                              <Icon className="h-7 w-7 shrink-0" aria-hidden />
                            </div>
                            <h3 className="text-base font-bold uppercase text-primary leading-snug">{feature.title}</h3>
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 pb-16 pt-8 md:px-0 md:pb-20 md:pt-40">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[3fr_7fr] md:gap-12 lg:gap-16">
            <aside className="order-2 border-t border-stone-200 pt-8 md:order-1 md:border-t-0 md:pt-0 md:pr-4" data-aos="fade-up" data-aos-delay="100">
              <nav aria-label="Otros servicios">
                <p className="mb-4 text-xs font-bold uppercase tracking-wide text-primary">Otros servicios</p>
                <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/servicios/${s.slug}`}
                        className="text-sm font-medium text-balance text-gray-700 transition-colors hover:text-primary md:text-base flex items-center gap-2"
                      >
                        <CircleCheck className="w-5 h-5 shrink-0" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="order-1 min-w-0 md:order-2" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-bold uppercase text-primary md:text-3xl">Galería</h2>
              <hr className="mt-3 border-0 border-t-2 border-primary" />
              <GalleryCarousel
                images={service.gallery.length ? service.gallery : [service.image]}
                title={service.title}
              />
            </div>
          </div>
        </section>
        {relatedSectors.length > 0 ? (
          <section className="max-w-7xl mx-auto px-4 pb-14 md:px-0" aria-labelledby="related-sectors-title">
            <h2 id="related-sectors-title" className="text-xl font-bold uppercase text-primary">Sectores donde aplicamos este servicio</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {relatedSectors.map((sector) => (
                <li key={sector.slug}>
                  <Link to={`/sectores/${sector.slug}`} className="inline-flex rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white">
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <div className="">
          <ContactSectionService />
        </div>
      </main>
    </>
  )
}
