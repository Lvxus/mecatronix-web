import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import ScrollToTop from "@/utils/ScrollToTop"
import HomePage from "@/features/home"
import AboutPage from "@/features/about"
import ServicesPage from "@/features/services"
import ServiceDetailPage from "@/features/services/ServiceDetailPage"
import ContactPage from "@/features/contact"
import PrivacyPolicyPage from "@/features/privacy-policy"
import TermsPage from "@/features/terms"
import ComplaintsBookPage from "@/features/complaints"
import SectorsPage from "@/features/sectors"
import SectorDetailPage from "@/features/sectors/SectorDetailPage"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  })

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/sectores" element={<SectorsPage />} />
          <Route path="/sectores/:sectorSlug" element={<SectorDetailPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
          <Route path="/terminos-y-condiciones" element={<TermsPage />} />
          <Route path="/libro-de-reclamaciones" element={<ComplaintsBookPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
