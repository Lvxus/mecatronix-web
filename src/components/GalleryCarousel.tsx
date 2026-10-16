import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface GalleryCarouselProps {
  images: string[]
  title: string
  altTexts?: string[]
  showArrows?: boolean
}

export default function GalleryCarousel({
  images,
  title,
  altTexts = [],
  showArrows = images.length > 1,
}: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentIndex, images.length])

  if (images.length === 1) {
    return (
      <div className="mt-4 overflow-hidden rounded-3xl md:mt-6">
        <img
          src={images[0]}
          alt={altTexts[0] ?? `${title} 1`}
          className="h-[min(420px,65vh)] w-full object-cover sm:h-[min(480px,70vh)] md:h-[min(720px,70vh)]"
        />
      </div>
    )
  }

  return (
    <div className="mt-4 md:mt-6 relative overflow-hidden rounded-3xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={altTexts[index] ?? `${title} ${index + 1}`}
            className="h-[min(420px,65vh)] w-full shrink-0 object-cover sm:h-[min(480px,70vh)] md:h-[min(720px,70vh)]"
          />
        ))}
      </div>

      {/* Flechas */}
      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
            aria-label="Anterior"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
            aria-label="Siguiente"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full border border-white transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-white/40 w-2"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
