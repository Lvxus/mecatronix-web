import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import logoMecatronix from "/mecatronixLogoWB.png"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Inicio", to: "/" },
    { label: "Sobre nosotros", to: "/nosotros" },
    { label: "Servicios", to: "/servicios" },
    { label: "Sectores", to: "/sectores" },
    { label: "Contacto", to: "/contacto" }
  ];

  const isActiveLink = (to: string) => {
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      return location.pathname === (path || "/") && location.hash === `#${hash}`;
    }
    return location.pathname === to;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-xl">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 md:px-0">
        <div>
          <Link to="/" aria-label="Ir al inicio">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/logo/mecatronixLogo-400.webp 400w, /images/logo/mecatronixLogo-800.webp 800w"
                sizes="(min-width: 768px) 300px, 200px"
              />
              <img
                src={logoMecatronix}
                alt="Mecatronix Perú - Logo"
                width={300}
                height={68}
                decoding="async"
                fetchPriority="high"
                className="w-[200px] md:w-[300px] h-auto"
              />
            </picture>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li
                key={link.label}
                className={`
                  flex items-center gap-1 cursor-pointer transition-colors duration-200
                  font-semibold uppercase relative group
                  ${isActiveLink(link.to) ? "text-primary" : "text-primary"}
                `}
              >
                <Link to={link.to} className="pb-1 relative">
                  {link.label}
                  <span
                    className={`
                      absolute left-0 bottom-0 h-px bg-primary transition-all duration-300 ease-in-out rounded
                      ${isActiveLink(link.to) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Botón del menú hamburguesa para móvil */}
        <button
          className="md:hidden flex items-center justify-center text-primary"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile - Overlay */}
      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-primary z-40 flex flex-col transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-5">
          {/* <img src={logoMecatronix} alt="logo" className="w-[100px] h-auto" /> */}
          <p className="text-2xl uppercase font-bold text-white">Mecatronix Perú</p>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        {/* Mobile nav */}
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-white text-xl uppercase font-semibold">
            {links.map((link) => (
              <li
                key={link.label}
                className={`
                  cursor-pointer transition-colors duration-300
                  hover:text-secondary 
                  ${isActiveLink(link.to) ? 'text-secondary' : ''}
                `}
              >
                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
