import { BadgeCheck } from "lucide-react"

export default function MembershipSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 pb-10 md:pb-20">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-[#f5f5f4] border border-gray-100 rounded-3xl p-6 md:p-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex items-center justify-center bg-white rounded-2xl p-6 md:p-8">
          <img
            src="/CCL.png"
            alt="Empresa Asociada a la Cámara de Comercio de Lima"
            title="Empresa Asociada a la Cámara de Comercio de Lima"
            width={320}
            height={128}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[320px] h-auto object-contain"
          />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase">
            <BadgeCheck className="w-5 h-5" />
            Membresía y respaldo
          </span>
          <h2 className="text-lg md:text-2xl font-bold uppercase text-primary">
            Empresa Asociada a la Cámara de Comercio de Lima
          </h2>
          <p className="text-gray-600 text-justify text-sm md:text-base">
            En Mecatronix Perú somos empresa asociada a la Cámara de Comercio de Lima,
            lo que respalda nuestra formalidad, trayectoria y compromiso con la calidad
            en cada servicio de mantenimiento y automatización industrial que brindamos
            a nuestros clientes a nivel nacional.
          </p>
        </div>
      </div>
    </section>
  )
}
