import SEO from "@/components/SEO"

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Términos y Condiciones | Mecatronix Perú"
        description="Conoce nuestros términos y condiciones de uso para el sitio web de Mecatronix Perú."
        url="https://www.mecatronixperu.com/terminos-y-condiciones"
        image="https://www.mecatronixperu.com/ogImageMecatronix.png"
        type="website"
        breadcrumbs={[
          {name: "Inicio", url: "https://www.mecatronixperu.com/"},
          {name: "Términos y Condiciones", url: "https://www.mecatronixperu.com/terminos-y-condiciones"}
        ]}
      />
      <section className="max-w-4xl mx-auto px-6 py-10 md:py-20 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-10 text-center md:text-left" data-aos="fade-up">
          Términos y Condiciones
        </h1>

        <div className="space-y-8 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Mecatronix Perú, usted acepta cumplir con los presentes
              términos y condiciones de uso. Si no está de acuerdo con alguno de ellos, le solicitamos
              que no utilice nuestro sitio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">2. Servicios ofrecidos</h2>
            <p>
              Mecatronix Perú ofrece servicios de mantenimiento, instalación y reparación de equipos
              mecatrónicos. La información publicada en este sitio web es de carácter informativo y
              puede estar sujeta a cambios sin previo aviso.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos y diseño
              gráfico, son propiedad de Mecatronix Perú o de sus respectivos titulares. Queda prohibida su
              reproducción total o parcial sin autorización expresa.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Limitación de responsabilidad</h2>
            <p>
              Mecatronix Perú no se responsabiliza por daños directos o indirectos derivados del uso o
              imposibilidad de uso de este sitio web, ni por la exactitud o actualidad de la información
              publicada.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">5. Enlaces externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. Mecatronix Perú no controla ni se
              responsabiliza por el contenido, las políticas de privacidad ni las prácticas de dichos
              sitios.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">6. Modificaciones</h2>
            <p>
              Mecatronix Perú se reserva el derecho de modificar estos términos en cualquier momento. Las
              modificaciones entrarán en vigor desde su publicación en el sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">7. Legislación aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia
              será sometida a los tribunales competentes de la ciudad de Lima.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">8. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con estos términos, puede contactarnos en{" "}
              <a href="mailto:contacto@mecatronixperu.com" className="text-primary underline">
                contacto@mecatronixperu.com
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4">Última actualización: Mayo 2026</p>
        </div>
      </section>
    </>
  )
}
