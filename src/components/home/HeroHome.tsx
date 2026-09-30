import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const carouselImages = [
  {
    id: 1,
    base: "hero/herohome1",
    fallback: "https://i.ibb.co/RGNvg6YF/herohome1.jpg",
    width: 1200,
    height: 628,
    title: "Especialistas en Equipos \nAlimentarios",
    description:
      "Proteja su inversión y evite interrupciones en su producción. Más de 15 años de experiencia en equipos de panadería, pastelería y horeca.",
  },
  {
    id: 2,
    base: null,
    fallback: "https://i.ibb.co/B5xDYRZJ/mantenimiento-industrial.jpg",
    width: 1200,
    height: 800,
    position: "center 60%",
    title: "Mantenimiento \nIndustrial",
    description:
      "Garantizamos la máxima disponibilidad de su planta mediante estrategias preventivas y correctivas integrales, minimizando los tiempos de inactividad de su maquinaria.",
  },
  {
    id: 3,
    base: null,
    fallback:
      "https://images.unsplash.com/photo-1717386255773-a456c611dc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: 1470,
    height: 980,
    title: "Automatización \nIndustrial",
    description:
      "Modernizamos sus líneas de producción con sistemas de control inteligente. Aumente la eficiencia, reduzca errores y optimice sus procesos operativos al máximo.",
  },
  {
    id: 4,
    base: "hero/solucionesmecatronicas",
    fallback: "https://i.ibb.co/rGDp1Hrw/solucionesmecatronicas.png",
    width: 1203,
    height: 941,
    title: "Soluciones \nMecatrónicas",
    description:
      "Desarrollamos e integramos sistemas electroneumáticos y servocontrolados a medida, logrando una sinergia perfecta entre mecánica, electrónica y software.",
  },
  {
    id: 5,
    base: "hero/solucioneselectronicas",
    fallback: "https://i.ibb.co/TM70q1pQ/solucioneselectronicas.jpg",
    width: 1204,
    height: 1600,
    title: "Soluciones \nEléctricas",
    description:
      "Diseño, montaje y puesta en marcha de tableros de automatización, control de motores con variadores de frecuencia y sistemas de fuerza para la industria.",
  },
];

export default function HeroHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[85vh] min-h-70 flex items-center overflow-hidden">
      {/* Contenedor de slides */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselImages.map((slide) => (
          <div key={slide.id} className="relative w-full h-full shrink-0">
            {slide.base ? (
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    slide.id === 1
                      ? `/images/${slide.base}-768.webp 768w, /images/${slide.base}-1200.webp 1200w`
                      : `/images/${slide.base}-768.webp 768w, /images/${slide.base}-${slide.width}.webp ${slide.width}w`
                  }
                  sizes="100vw"
                />
                <img
                  src={slide.fallback}
                  alt={slide.title}
                  width={slide.width}
                  height={slide.height}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: slide.position ?? "center" }}
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={slide.id === 1 ? "high" : "auto"}
                />
              </picture>
            ) : (
              <img
                src={slide.fallback}
                alt={slide.title}
                width={slide.width}
                height={slide.height}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: slide.position ?? "center" }}
                loading={slide.id === 1 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={slide.id === 1 ? "high" : "auto"}
              />
            )}
            <div className="absolute inset-0 bg-black/40"></div>

            <div
              className="relative z-10 flex justify-center w-full h-full"
              data-aos="fade-up"
            >
              <div className="flex flex-col max-w-7xl w-full px-4 md:px-0 justify-center">
                {slide.id === 1 ? (
                  <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg uppercase whitespace-pre-line">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg uppercase whitespace-pre-line">
                    {slide.title}
                  </h2>
                )}
                <p className="text-white text-base md:text-xl mb-6 drop-shadow whitespace-pre-line">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
        aria-label="Anterior"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
        aria-label="Siguiente"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full border border-white transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-white/40"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
