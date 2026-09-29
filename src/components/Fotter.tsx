import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import logoMecatronix from "/mecatronixLogoWB.png"
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "@/components/SocialIcons"

export default function Fotter() {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <hr className="border-primary w-full" />
          <picture>
            <source
              type="image/webp"
              srcSet="/images/logo/mecatronixLogo-400.webp 400w, /images/logo/mecatronixLogo-800.webp 800w"
              sizes="400px"
            />
            <img
              src={logoMecatronix}
              alt="Mecatronix Perú - Logo"
              width={400}
              height={91}
              loading="lazy"
              decoding="async"
              className="w-[400px] h-auto"
            />
          </picture>
          <hr className="border-primary w-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch text-center py-10 space-y-10 md:space-y-0">
          <div className="flex flex-col items-center flex-1 gap-1">
            <h3 className="text-primary text-sm md:text-lg font-semibold uppercase">Contactanos</h3>
            <a
              href="mailto:contacto@mecatronixperu.com"
              className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
              aria-label="Enviar correo a contacto@mecatronixperu.com"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="relative text-sm md:text-base z-10">
                contacto@mecatronixperu.com
              </span>
              <span
                className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
              />
            </a>
            <a
              href="tel:+51902778456"
              className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
              aria-label="Llamar al teléfono +51 902 778 456"
            >
              <Phone className="w-6 h-6 text-primary" />
              <span className="relative z-10 text-sm md:text-base">
                +51 902 778 456
              </span>
              <span
                className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
              />
            </a>
          </div>
          <div className="hidden md:block w-px bg-primary mx-8"></div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-primary text-sm md:text-lg font-semibold uppercase">Dirección</h3>
            <p className="text-gray-600 flex items-center justify-center gap-2 pt-2 text-sm md:text-base">
              <MapPin className="w-6 h-6 text-primary" /> Augusto Tamayo Vargas 119, Barranco - Lima - Perú
            </p>
          </div>
          <div className="hidden md:block w-px bg-primary mx-8"></div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-primary text-sm md:text-lg uppercase font-semibold">Nuestras Redes Sociales</h3>
            <div className="flex items-center justify-center gap-4 pt-3">
              <a href="https://www.facebook.com/profile.php?id=100063068537205&locale=bg_BG#" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Mecatronix Perú">
                <FacebookIcon className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/mecatronixperu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Mecatronix Perú">
                <InstagramIcon className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/mecatronix-peru/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Mecatronix Perú">
                <LinkedInIcon className="w-6 h-6 cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@mecatronixperu" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Mecatronix Perú">
                <TikTokIcon className="w-7 h-7 cursor-pointer" size={28} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-primary w-full" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-5">
          <Link
            to="/politica-de-privacidad"
            className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
            aria-label="Política de privacidad"
          >
            <span className="relative z-10 uppercase text-sm font-bold">
              Política de privacidad
            </span>
            <span
              className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
            />
          </Link>
          <span className="text-primary hidden md:block">|</span>
          <Link
            to="/terminos-y-condiciones"
            className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
            aria-label="Términos y condiciones"
          >
            <span className="relative z-10 uppercase text-sm font-bold">
              Términos y condiciones
            </span>
            <span
              className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
            />
          </Link>
          <span className="text-primary hidden md:block">|</span>
          <Link
            to="/libro-de-reclamaciones"
            className="
                  flex items-center gap-4 group cursor-pointer pb-1 relative w-fit
                  text-gray-600 transition-colors duration-200 font-medium
                  hover:text-primary
                "
            aria-label="Libro de reclamaciones"
          >
            <span className="relative z-10 uppercase text-sm font-bold">
              Libro de reclamaciones
            </span>
            <span
              className="
                    absolute left-0 bottom-0 h-px bg-primary rounded
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-full
                  "
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-6 px-4">
          <img
            src="/CCL.png"
            alt="Empresa Asociada a la Cámara de Comercio de Lima"
            title="Empresa Asociada a la Cámara de Comercio de Lima"
            width={120}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-auto object-contain"
          />
          <div className="text-center md:text-left">
            <p className="text-primary font-bold uppercase text-sm leading-tight">Empresa Asociada</p>
            <p className="text-gray-600 text-sm leading-tight">Cámara de Comercio de Lima</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-sm">
          <p className="text-gray-600 px-4 text-center md:text-left">2026 ©Todos los derechos reservados. Desarrollado por <a href="https://www.groblestudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Grobles Studio.</a></p>

        </div>
      </div>
    </footer>
  )
}
