import SEO from "@/components/SEO"
import HistorySection from "@/components/about/HistorySection"
import MembershipSection from "@/components/about/MembershipSection"
import ServiceAbout from "@/components/about/ServiceAbout"

export default function About() {
  return (
    <main>
      <SEO
        title="Nosotros | Mecatronix Perú"
        description="Conoce la historia de Mecatronix Perú, nuestra visión y misión. Somos especialistas en automatización, control de procesos y mantenimiento industrial a nivel nacional."
        url="https://www.mecatronixperu.com/nosotros"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
        breadcrumbs={[
          {name: "Inicio", url: "https://www.mecatronixperu.com/"},
          {name: "Nosotros", url: "https://www.mecatronixperu.com/nosotros"},
        ]}
      />
      <HistorySection />
      <MembershipSection />
      <ServiceAbout />
    </main>
  )
}
