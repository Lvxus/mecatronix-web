import SEO from "@/components/SEO"
import HeroHome from "@/components/home/HeroHome"
import FeaturesSection from "@/components/home/FeaturesSection"
import ServiceSectionHome from "@/components/home/ServiceSectionHome"
import ClientsSection from "@/components/home/ClientsSection"
import SectorSectionHome from "@/components/home/SectorSectionHome"

export default function Home() {
  return (
    <main>
      <SEO
        title="Mantenimiento de Equipos en Lima | Mecatronix Perú"
        description="Mantenimiento de equipos industriales, de panadería, pastelería y gastronomía en Lima. Servicio preventivo, correctivo y soporte técnico de Mecatronix Perú."
        url="https://www.mecatronixperu.com/"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
        breadcrumbs={[{
          name: "Inicio",
          url: "https://www.mecatronixperu.com/"
        }]}
      />
      <HeroHome />
      <FeaturesSection />
      <SectorSectionHome />
      <ServiceSectionHome />
      <ClientsSection />
    </main>
  )
}
