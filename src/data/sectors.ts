export type Sector = {
  slug: string
  name: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: { heading: string; paragraphs: string[] }[]
  relatedServices: string[]
}

const sectors: Sector[] = [
  {
    slug: "mantenimiento-industrial",
    name: "Mantenimiento industrial",
    title: "Mantenimiento industrial para distintos sectores",
    metaTitle: "Mantenimiento Industrial en Lima y Provincias | Mecatronix Perú",
    metaDescription: "Mantenimiento, reparación y soluciones mecatrónicas para empresas de distintos sectores en Lima y provincias. Proyectos fuera del país según alcance.",
    intro: "Mecatronix Perú realiza mantenimiento y reparación de máquinas para empresas de distintos rubros. La atención se concentra en Lima y provincias; los proyectos fuera del país se evalúan según su alcance.",
    sections: [
      {
        heading: "Experiencia en industrias variadas",
        paragraphs: [
          "Los trabajos atendidos incluyen clientes de generadores eléctricos, laboratorios, industria del plástico, fabricación de mallas de alambre, máquinas de melamine y tostadoras industriales de café. Cada solicitud se revisa de acuerdo con el equipo, la falla y las condiciones del proyecto.",
          "Panadería, pastelería, gastronomía y hotelería son los rubros con mayor presencia entre sus clientes. También se atienden requerimientos de otras industrias, según la necesidad técnica.",
        ],
      },
      {
        heading: "Mantenimiento, reparación y soluciones técnicas",
        paragraphs: [
          "El alcance puede incluir mantenimiento preventivo o correctivo, reparación mecánica y electrónica, automatización, mecatrónica y trabajos con PLC, de acuerdo con el equipo y la evaluación técnica.",
          "La atención principal es en Lima y provincias del Perú. Para solicitudes internacionales, Mecatronix puede evaluar el proyecto y cotizar según sus requerimientos y condiciones de ejecución.",
        ],
      },
    ],
    relatedServices: [
      "mantenimiento-preventivo",
      "mantenimiento-correctivo",
      "auxilio-tecnico-y-atencion-de-emergencias",
      "diseno-e-implementacion-de-proyectos-de-automatizacion",
      "instalacion-montaje-y-puesta-en-marcha-de-equipos-industriales",
    ],
  },
  {
    slug: "mantenimiento-de-equipos-de-panaderia",
    name: "Panadería",
    title: "Mantenimiento de equipos para panadería",
    metaTitle: "Mantenimiento de Equipos de Panadería | Mecatronix Perú",
    metaDescription: "Mantenimiento y reparación de máquinas para panaderías en Lima y provincias. Atención mecánica, electrónica y de automatización según cada equipo.",
    intro: "Mecatronix Perú atiende solicitudes de mantenimiento y reparación de equipos utilizados en panaderías. Es uno de los rubros principales de sus clientes, junto con pastelería, gastronomía y hotelería.",
    sections: [
      {
        heading: "Atención técnica para panaderías",
        paragraphs: [
          "El trabajo se define a partir del equipo, el problema reportado y la evaluación técnica. Según el caso, puede comprender mantenimiento preventivo o correctivo, reparación mecánica o electrónica y soluciones de automatización o PLC.",
          "La atención busca ayudar a las empresas a mantener sus máquinas operativas y resolver fallas que afectan su trabajo diario. El alcance, los repuestos y las condiciones de servicio se revisan antes de cotizar.",
        ],
      },
      {
        heading: "Servicio en Lima y provincias",
        paragraphs: [
          "Mecatronix prioriza la atención en Lima y provincias del Perú. Si el proyecto requiere viajar al exterior, puede evaluarse según el alcance, los equipos involucrados y las condiciones de ejecución.",
          "Para solicitar una evaluación, comparte el tipo de máquina, la falla observada y la ubicación del servicio. El equipo podrá revisar la información y orientar los siguientes pasos.",
        ],
      },
    ],
    relatedServices: [
      "mantenimiento-preventivo",
      "mantenimiento-correctivo",
      "auxilio-tecnico-y-atencion-de-emergencias",
      "diseno-e-implementacion-de-proyectos-de-automatizacion",
      "venta-e-instalacion-de-repuestos-mecanicos-electricos-y-electronicos",
    ],
  },
  {
    slug: "mantenimiento-de-equipos-de-pasteleria",
    name: "Pastelería",
    title: "Mantenimiento de equipos para pastelería",
    metaTitle: "Mantenimiento de Equipos de Pastelería | Mecatronix Perú",
    metaDescription: "Mantenimiento y reparación de máquinas para pastelerías en Lima y provincias. Soluciones mecánicas, electrónicas y de automatización según evaluación.",
    intro: "Mecatronix Perú brinda mantenimiento y reparación de máquinas para empresas de pastelería. Este rubro forma parte de su atención principal y se complementa con servicios para panadería, gastronomía y hotelería.",
    sections: [
      {
        heading: "Reparación y mantenimiento según cada máquina",
        paragraphs: [
          "Cada solicitud se evalúa de forma particular para entender la falla, el estado de la máquina y el trabajo requerido. Según el caso, la intervención puede ser preventiva o correctiva e incluir componentes mecánicos, electrónicos, automatización o PLC.",
          "La propuesta técnica y la cotización se preparan con base en la información del equipo y las condiciones del servicio. No todos los trabajos requieren la misma intervención.",
        ],
      },
      {
        heading: "Cobertura en Perú",
        paragraphs: [
          "La prioridad de atención es Lima y provincias. Mecatronix también puede evaluar solicitudes internacionales cuando el alcance del proyecto y las condiciones de ejecución lo permitan.",
          "Al contactarnos, indica la ubicación, el tipo de equipo y una descripción de la falla. Si cuentas con fotos o videos, puedes compartirlos para facilitar la evaluación inicial.",
        ],
      },
    ],
    relatedServices: [
      "mantenimiento-preventivo",
      "mantenimiento-correctivo",
      "auxilio-tecnico-y-atencion-de-emergencias",
      "diseno-e-implementacion-de-proyectos-de-automatizacion",
      "venta-e-instalacion-de-repuestos-mecanicos-electricos-y-electronicos",
    ],
  },
  {
    slug: "mantenimiento-para-gastronomia-y-hoteleria",
    name: "Gastronomía y hotelería",
    title: "Mantenimiento de equipos para gastronomía y hotelería",
    metaTitle: "Mantenimiento para Gastronomía y Hotelería | Mecatronix Perú",
    metaDescription: "Mantenimiento y reparación de máquinas para empresas de gastronomía y hotelería en Lima y provincias. Atención técnica según evaluación.",
    intro: "Gastronomía y hotelería están entre los principales rubros atendidos por Mecatronix Perú. El servicio se orienta al mantenimiento y reparación de las máquinas que cada negocio utiliza, previa evaluación de su requerimiento.",
    sections: [
      {
        heading: "Soporte para negocios de gastronomía y hotelería",
        paragraphs: [
          "Las necesidades pueden variar según la operación y el equipo. Mecatronix evalúa cada solicitud para definir si corresponde mantenimiento preventivo, reparación correctiva, atención de una falla o una solución mecánica, electrónica o de automatización.",
          "El tipo de equipo, el problema observado y las condiciones del lugar permiten delimitar el alcance del trabajo y preparar una cotización adecuada.",
        ],
      },
      {
        heading: "Atención en Lima y provincias",
        paragraphs: [
          "Mecatronix prioriza proyectos en Lima y provincias del Perú. También puede revisar trabajos fuera del país de acuerdo con el alcance y la viabilidad de cada solicitud.",
          "Para coordinar una evaluación, comparte la ubicación, una descripción de la máquina y la falla o necesidad de mantenimiento.",
        ],
      },
    ],
    relatedServices: [
      "mantenimiento-preventivo",
      "mantenimiento-correctivo",
      "auxilio-tecnico-y-atencion-de-emergencias",
      "instalacion-de-camaras-de-conservacion-y-congelacion",
      "instalacion-de-sistemas-de-ventilacion-y-extraccion-de-aire",
    ],
  },
]

export function getSectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug)
}

export function getSectorsForService(serviceSlug: string) {
  return sectors.filter((sector) => sector.relatedServices.includes(serviceSlug))
}

export default sectors
