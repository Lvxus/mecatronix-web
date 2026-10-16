import type { ServiceFeatureIconId } from "./serviceFeatureIcons"

export type ServiceFeature = {
  icon: ServiceFeatureIconId
  title: string
  description: string
}

export type Service = {
  id: number
  image: string
  imageBase?: string
  imageWidth?: number
  imageHeight?: number
  title: string
  gallery: string[]
  slug: string
  description: string
  longDescription: string
  features: ServiceFeature[]
}

const services: Service[] = [
  {
    id: 1,
    image: "https://i.ibb.co/mCVTx2qM/mantenimientopreventivo.jpg",
    imageBase: "services/mantenimientopreventivo",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: [
      "https://i.ibb.co/mCVTx2qM/mantenimientopreventivo.jpg",
      "https://i.ibb.co/qMVWNTB0/preventivo7.jpg",
      "https://i.ibb.co/nqTfNv3X/preventivo6.jpg",
      "https://i.ibb.co/svmXPFK6/preventivo5.jpg",
      "https://i.ibb.co/DHPnhRVR/preventivo4.jpg",
      "https://i.ibb.co/zhDGM2Wm/preventivo3.jpg",
      "https://i.ibb.co/rfmPcrxF/preventivo2.jpg",
      "https://i.ibb.co/TBXDJkCg/preventivo1.jpg",
    ],
    title: "Mantenimiento Preventivo",
    slug: "mantenimiento-preventivo",
    description: "Mantenimiento preventivo de equipos de panadería, pastelería, gastronomía y hotelería, además de otras industrias. Lima y provincias.",
    longDescription:
      "El mantenimiento preventivo permite revisar una máquina antes de que una falla interrumpa la producción. Mecatronix Perú atiende solicitudes de panaderías, pastelerías, restaurantes, hoteles y empresas de otros sectores industriales en Lima y provincias.\n\nLa revisión se define según el tipo de equipo, su uso y las condiciones del lugar. Puede incluir inspección de componentes, limpieza técnica, lubricación, ajustes y evaluación de piezas con desgaste. Con esos hallazgos se determina qué tareas conviene realizar y si se requiere programar revisiones posteriores. En gastronomía se puede solicitar mantenimiento de hornos Rational; el alcance se confirma según el modelo y su condición.",
    features: [
      {
        icon: "calendarClock",
        title: "Revisión según el equipo",
        description: "Las tareas y su frecuencia se proponen considerando el tipo de máquina, su uso y las condiciones de operación.",
      },
      {
        icon: "clipboardList",
        title: "Tareas de mantenimiento",
        description: "La intervención puede considerar inspección, lubricación, ajustes y revisión de componentes sujetos a desgaste.",
      },
      {
        icon: "shield",
        title: "Menos paradas imprevistas",
        description: "Detectar señales de desgaste permite evaluar acciones antes de que el equipo presente una parada imprevista.",
      },
    ],
  },
  {
    id: 2,
    image: "https://i.ibb.co/wZg90368/mantenimientopredictivo.jpg",
    imageBase: "services/mantenimientopredictivo",
    imageWidth: 1500,
    imageHeight: 840,
    gallery: [

    ],
    title: "Mantenimiento Predictivo",
    slug: "mantenimiento-predictivo",
    description: "Evaluación predictiva de equipos industriales mediante mediciones de condición, según el activo y el alcance del proyecto.",
    longDescription:
      "El mantenimiento predictivo busca detectar cambios en la condición de una máquina para planificar una intervención antes de que una anomalía avance. Mecatronix Perú evalúa cada solicitud de acuerdo con el equipo, el proceso y la información disponible.\n\nSegún el activo y el alcance acordado, la evaluación puede considerar variables como vibración, temperatura, presión o parámetros eléctricos. Los puntos de medición y la frecuencia de seguimiento se definen para cada proyecto; no todas las técnicas aplican a todos los equipos. Atención en Lima y provincias, previa coordinación.",
    features: [
      {
        icon: "activity",
        title: "Monitoreo de condición",
        description: "Las variables a medir se seleccionan según el tipo de máquina y las condiciones de operación.",
      },
      {
        icon: "gauge",
        title: "Diagnóstico basado en datos",
        description: "Los resultados permiten valorar cambios de condición y definir si se requiere una revisión técnica.",
      },
      {
        icon: "calendarClock",
        title: "Intervención oportuna",
        description: "El seguimiento acordado ayuda a programar una intervención en función de los hallazgos.",
      },
    ],
  },
  {
    id: 3,
    image: "https://i.ibb.co/yBf5b7Rz/mantenimientocorrectivo.jpg",
    imageBase: "services/mantenimientocorrectivo",
    imageWidth: 721,
    imageHeight: 1600,
    gallery: [
      "https://i.ibb.co/yBf5b7Rz/mantenimientocorrectivo.jpg",
      "https://i.ibb.co/7xqdRwKJ/correctivo1.jpg",
      "https://i.ibb.co/TBCWqmRh/correctivo2.jpg",
      "https://i.ibb.co/vxqp6w52/correctivo3.jpg",
      "https://i.ibb.co/FLLg3Mh7/correctivo4.jpg",
      "https://i.ibb.co/ZzknDMkH/correctivo5.jpg",
      "https://i.ibb.co/ZpfxZr1r/correctivo6.jpg",
      "https://i.ibb.co/CptMwGx8/correctivo7.jpg",
    ],
    title: "Mantenimiento Correctivo",
    slug: "mantenimiento-correctivo",
    description: "Reparación de máquinas de panadería, pastelería y gastronomía, incluidos lavavajillas y hornos Rational. Lima y provincias.",
    longDescription:
      "El mantenimiento correctivo atiende equipos que presentan una falla, trabajan de forma irregular o dejaron de operar. La evaluación empieza con la información disponible sobre la máquina y el problema; luego se determina si la revisión puede realizarse en campo y qué intervención requiere el equipo.\n\nMecatronix Perú repara maquinaria de panadería, pastelería, gastronomía y otras industrias. En gastronomía, el servicio incluye reparación de lavavajillas y mantenimiento y reparación de hornos Rational, sujeto a revisión del modelo y la falla. Según el caso, el trabajo puede involucrar componentes mecánicos, eléctricos, electrónicos o de control. El alcance, los repuestos y la cotización se coordinan antes de ejecutar la reparación. Atención prioritaria en Lima y provincias.",
    features: [
      {
        icon: "hammer",
        title: "Intervención según la falla",
        description: "La reparación puede realizarse en las instalaciones del cliente cuando el equipo y el alcance lo permiten.",
      },
      {
        icon: "search",
        title: "Diagnóstico técnico",
        description: "Se revisan las causas posibles y el estado del equipo antes de definir las acciones correctivas.",
      },
      {
        icon: "clipboardList",
        title: "Alcance y repuestos",
        description: "La evaluación permite precisar los componentes requeridos y cotizar el trabajo antes de iniciar.",
      },
    ],
  },
  {
    id: 4,
    image: "https://i.ibb.co/Rk4j8y7b/auxilioindustrial.jpg",
    imageBase: "services/auxilioindustrial",
    imageWidth: 728,
    imageHeight: 713,
    gallery: [
      "https://i.ibb.co/Rk4j8y7b/auxilioindustrial.jpg",
      "https://i.ibb.co/DD5TL1JV/auxilio6.jpg",
      "https://i.ibb.co/spxPXc8y/auxilio5.jpg",
      "https://i.ibb.co/Ndn94WWF/auxilio4.jpg",
      "https://i.ibb.co/xRHYhcs/auxilio3.jpg",
      "https://i.ibb.co/RTcxpDyy/auxilio2.jpg",
      "https://i.ibb.co/gMdHhRqk/auxilio1.jpg",
    ],
    title: "Auxilio técnico y atención de emergencias",
    slug: "auxilio-tecnico-y-atencion-de-emergencias",
    description:
      "Auxilio técnico para fallas imprevistas en máquinas de panadería, gastronomía y otras industrias. Lima y provincias, previa coordinación.",
    longDescription:
      "Cuando una máquina se detiene o presenta una falla inesperada, el auxilio técnico permite coordinar una evaluación inicial. Para orientar la atención, se solicita información del equipo, los síntomas observados, la ubicación y, si es posible, fotografías o videos.\n\nMecatronix Perú revisa el requerimiento y confirma la disponibilidad y el tipo de atención posible. Según el caso, el técnico puede evaluar el equipo en las instalaciones del cliente, realizar una reparación en campo o recomendar una intervención adicional. La atención se coordina para negocios de panadería, pastelería, gastronomía, hotelería y otras industrias en Lima y provincias; no se ofrece un tiempo de llegada fijo sin confirmar previamente la ubicación y disponibilidad.",
    features: [
      {
        icon: "phone",
        title: "Evaluación inicial",
        description: "Compartir el equipo, la falla y la ubicación ayuda a determinar el tipo de atención requerida.",
      },
      {
        icon: "truck",
        title: "Atención coordinada",
        description: "La visita se programa de acuerdo con la ubicación, el requerimiento y la disponibilidad técnica.",
      },
      {
        icon: "alertTriangle",
        title: "Alcance de la intervención",
        description: "La evaluación define si la reparación es viable en campo o requiere trabajo adicional.",
      },
    ],
  },
  {
    id: 5,
    image: "https://i.ibb.co/v4dh7JWK/ventarepuestos.jpg",
    gallery: [

    ],
    title: "Venta e instalación de repuestos mecánicos, eléctricos y electrónicos",
    slug: "venta-e-instalacion-de-repuestos-mecanicos-electricos-y-electronicos",
    description:
      "Identificación, cotización e instalación de repuestos mecánicos, eléctricos y electrónicos para maquinaria industrial.",
    longDescription:
      "La selección de un repuesto requiere identificar el equipo y el componente que se necesita reemplazar. Mecatronix Perú puede apoyar con referencias, fotografías de la pieza o datos de placa para revisar alternativas mecánicas, eléctricas y electrónicas.\n\nAntes de confirmar el suministro se valida, según la información disponible, la compatibilidad, la disponibilidad y el costo. Si el cliente lo requiere y el alcance lo permite, también se coordina la instalación y la comprobación de funcionamiento. El servicio se cotiza para cada solicitud y se atiende principalmente en Lima y provincias.",
    features: [
      {
        icon: "package",
        title: "Identificación del componente",
        description: "La placa del equipo, la referencia de la pieza o fotografías ayudan a buscar una opción compatible.",
      },
      {
        icon: "wrench",
        title: "Instalación coordinada",
        description: "Cuando se solicita, se cotiza también el montaje y la comprobación del componente instalado.",
      },
      {
        icon: "clipboardList",
        title: "Validación previa",
        description: "Compatibilidad, existencia y precio se confirman antes de cerrar el suministro.",
      },
    ],
  },
  {
    id: 6,
    image: "https://i.ibb.co/Q3jDggkW/puestaenmarca.jpg",
    gallery: [

    ],
    title: "Instalación, montaje y puesta en marcha de equipos industriales",
    slug: "instalacion-montaje-y-puesta-en-marcha-de-equipos-industriales",
    description:
      "Instalación y montaje de equipos industriales, con puesta en marcha según el proyecto y las condiciones del sitio.",
    longDescription:
      "La instalación de un equipo industrial requiere considerar sus dimensiones, ubicación, conexiones y condiciones de operación. Mecatronix Perú coordina el montaje de acuerdo con el equipo y el alcance definido para el proyecto.\n\nEl trabajo puede incluir ubicación y nivelación, montaje, conexiones y pruebas iniciales de funcionamiento cuando forman parte del servicio contratado. Antes de iniciar se revisan las condiciones del espacio y los requerimientos de la máquina; la puesta en marcha y las pruebas con carga se confirman según el tipo de equipo y el proyecto. Atención en Lima y provincias.",
    features: [
      {
        icon: "factory",
        title: "Montaje en sitio",
        description: "El montaje se define considerando la ubicación, las características del equipo y las condiciones del espacio.",
      },
      {
        icon: "settings",
        title: "Puesta en marcha",
        description: "Las pruebas de funcionamiento y la puesta en marcha se incluyen según el alcance acordado.",
      },
      {
        icon: "clipboardList",
        title: "Coordinación del proyecto",
        description: "Se revisan previamente las conexiones y condiciones necesarias para instalar el equipo.",
      },
    ],
  },
  {
    id: 7,
    image: "https://i.ibb.co/4nTb29VH/ventilacion4.jpg",
    gallery: [
      "https://i.ibb.co/4nTb29VH/ventilacion4.jpg",
      "https://i.ibb.co/5W2PcfrX/ventilacion3.jpg",
      "https://i.ibb.co/4ggp220z/ventilacion2.jpg",
      "https://i.ibb.co/nqPm4Sb9/ventilacion.jpg"
    ],
    title: "Instalación de sistemas de ventilación y extracción de aire",
    slug: "instalacion-de-sistemas-de-ventilacion-y-extraccion-de-aire",
    description:
      "Diseño e instalación de ventilación y extracción de aire para plantas y locales gastronómicos, previa evaluación.",
    longDescription:
      "Un sistema de ventilación o extracción debe responder al espacio y al proceso donde se instalará. Mecatronix Perú evalúa las condiciones del local o planta y el tipo de aire que se necesita renovar o evacuar, como calor, humo, polvo o vapores de cocina.\n\nSegún el proyecto, el servicio puede comprender el diseño de la solución, la instalación de extractores y ductos, y su integración con el área de trabajo. El recorrido, los componentes y el alcance se definen después de revisar el lugar. Se atienden solicitudes en Lima y provincias.",
    features: [
      {
        icon: "fan",
        title: "Evaluación del espacio",
        description: "La solución toma en cuenta el ambiente, el proceso y las condiciones de instalación.",
      },
      {
        icon: "layers",
        title: "Diseño e instalación",
        description: "El sistema puede incluir extractores y ductos definidos según el alcance del proyecto.",
      },
      {
        icon: "activity",
        title: "Uso del sistema",
        description: "La configuración se orienta a las necesidades de renovación o extracción de aire identificadas.",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://20963350.fs1.hubspotusercontent-na1.net/hubfs/20963350/Imported_Blog_Media/Capacitacion-industrial-igual-a-seguridad-para-el-personal-2.png",
    gallery: [

    ],
    title: "Capacitación técnica industrial",
    slug: "capacitacion-tecnica-industrial",
    description:
      "Capacitación técnica para la operación y el cuidado de máquinas industriales, de acuerdo con el equipo y el personal.",
    longDescription:
      "La capacitación técnica puede ayudar al personal a conocer mejor los equipos que utiliza y las tareas básicas de cuidado relacionadas con su operación. Mecatronix Perú coordina el contenido de acuerdo con el tipo de máquina, las necesidades de la empresa y el nivel de los participantes.\n\nLos temas pueden incluir operación, identificación de señales de alerta y prácticas de mantenimiento autónomo, según el equipo y el alcance acordado. Antes de programar la actividad se definen los contenidos, la modalidad y el tiempo requerido. Atención en Lima y provincias.",
    features: [
      {
        icon: "bookOpen",
        title: "Contenidos a medida",
        description: "Los temas se seleccionan según los equipos y las necesidades de aprendizaje del grupo.",
      },
      {
        icon: "users",
        title: "Enfoque práctico",
        description: "La actividad puede incluir ejercicios prácticos cuando el entorno y el equipo lo permiten.",
      },
      {
        icon: "clipboardList",
        title: "Contenido acordado",
        description: "Los objetivos y el material de la capacitación se coordinan antes de la sesión.",
      },
    ],
  },
  {
    id: 9,
    image: "https://i.ibb.co/rKkG6pcR/implementacionauto.jpg",
    gallery: [

    ],
    title: "Diseño e Implementación de proyectos de automatización",
    slug: "diseno-e-implementacion-de-proyectos-de-automatizacion",
    description:
      "Diseño e implementación de automatización industrial con PLC, HMI, sensores y otros elementos de control.",
    longDescription:
      "Un proyecto de automatización comienza por entender el proceso, las máquinas involucradas y las tareas que se busca controlar o integrar. Mecatronix Perú desarrolla soluciones que pueden incluir PLC, HMI, sensores, variadores, neumática y otros elementos de control, de acuerdo con los requerimientos del cliente.\n\nEl alcance puede comprender la revisión de señales, la lógica de control, la integración con equipos existentes y las pruebas de funcionamiento acordadas. La arquitectura y los componentes se definen después de evaluar el proceso y las condiciones de instalación. Atención en Lima y provincias; otros destinos se revisan según el proyecto.",
    features: [
      {
        icon: "cpu",
        title: "Arquitectura de control",
        description: "La selección de controles y componentes depende del proceso y los equipos que se integrarán.",
      },
      {
        icon: "workflow",
        title: "Integración de señales",
        description: "Se define cómo interactuarán las señales y etapas de la máquina dentro del alcance del proyecto.",
      },
      {
        icon: "settings",
        title: "Puesta a punto",
        description: "Las pruebas y ajustes de la lógica se realizan según los objetivos definidos para la puesta en marcha.",
      },
    ],
  },
  {
    id: 10,
    image: "/images/other/intersadoservicios-700.webp",
    imageWidth: 700,
    imageHeight: 473,
    gallery: [

    ],
    title: "Modificaciones en línea de producción",
    slug: "modificaciones-en-linea-de-produccion",
    description:
      "Modificación e integración de líneas de producción para adaptar equipos y procesos a nuevos requerimientos.",
    longDescription:
      "Una línea de producción puede requerir cambios cuando se incorporan máquinas, se modifica el proceso o se necesita reorganizar el flujo de trabajo. Mecatronix Perú evalúa la instalación existente y el objetivo del cliente para delimitar las modificaciones necesarias.\n\nSegún el proyecto, los trabajos pueden involucrar integración de equipos, ajustes mecánicos, eléctricos o de control y coordinación de las etapas de instalación. La secuencia de trabajo y las paradas necesarias se acuerdan con la empresa antes de intervenir. La validación posterior se define de acuerdo con los cambios realizados. Atención en Lima y provincias.",
    features: [
      {
        icon: "gitBranch",
        title: "Revisión de la línea",
        description: "Se identifican los equipos y las etapas que necesitan integrarse o modificarse.",
      },
      {
        icon: "factory",
        title: "Planificación del trabajo",
        description: "Las actividades y las paradas requeridas se coordinan con la operación del cliente.",
      },
      {
        icon: "clipboardList",
        title: "Pruebas posteriores",
        description: "La puesta en marcha se revisa según los cambios efectuados y el alcance contratado.",
      },
    ],
  },
  {
    id: 11,
    image: "https://manpan.com/wp-content/uploads/2024/10/camaras-conservacion-congelacion-panaderia-2.jpg",
    gallery: [

    ],
    title: "Instalación de cámaras de conservación y congelación",
    slug: "instalacion-de-camaras-de-conservacion-y-congelacion",
    description:
      "Diseño e instalación de cámaras de conservación y congelación para panaderías, pastelerías y negocios gastronómicos.",
    longDescription:
      "Las cámaras de conservación y congelación permiten almacenar insumos y productos a temperaturas definidas para cada operación. Mecatronix Perú evalúa el espacio, el uso previsto, el volumen de almacenamiento y las condiciones necesarias para plantear una solución de refrigeración.\n\nSegún el proyecto, el servicio puede incluir diseño, instalación de paneles y equipos de refrigeración, y revisión del funcionamiento inicial. La configuración se define de acuerdo con la temperatura requerida, el tipo de producto y las características del local. Se atienden panaderías, pastelerías, restaurantes, hoteles y otras empresas en Lima y provincias.",
    features: [
      {
        icon: "snowflake",
        title: "Cadena de frío",
        description: "El aislamiento y los equipos se seleccionan según el espacio y las condiciones de conservación requeridas.",
      },
      {
        icon: "gauge",
        title: "Control de temperatura",
        description: "La solución considera el control de temperatura apropiado para el uso previsto de la cámara.",
      },
      {
        icon: "shield",
        title: "Solución según el producto",
        description: "El diseño toma en cuenta qué productos se almacenarán y las condiciones del establecimiento.",
      },
    ],
  },
  {
    id: 12,
    image: "https://i.ibb.co/3PGJf2N/dise-oinstalacion.jpg",
    gallery: [

    ],
    title: "Diseño e instalación de tableros eléctricos industriales",
    slug: "diseno-e-instalacion-de-tableros-electricos-industriales",
    description:
      "Diseño e instalación de tableros eléctricos industriales para sistemas de fuerza, control y automatización.",
    longDescription:
      "El diseño de un tablero eléctrico parte de conocer las cargas, los equipos que controlará y las condiciones de instalación. Mecatronix Perú puede desarrollar tableros de fuerza, control o automatización para máquinas y procesos industriales, de acuerdo con los requerimientos del proyecto.\n\nLa solución puede considerar selección de protecciones, organización de circuitos, identificación de componentes y conexión con los equipos correspondientes. Antes de cotizar se revisa la información técnica disponible y el alcance necesario. La instalación y las pruebas se coordinan según el lugar y el sistema a intervenir. Atención en Lima y provincias.",
    features: [
      {
        icon: "layers",
        title: "Ingeniería de tablero",
        description: "El esquema y los componentes se definen considerando las cargas y funciones requeridas.",
      },
      {
        icon: "bolt",
        title: "Montaje y conexionado",
        description: "El montaje y el conexionado se realizan según el diseño y las condiciones de instalación.",
      },
      {
        icon: "clipboardList",
        title: "Revisión del sistema",
        description: "Las comprobaciones se definen de acuerdo con el tablero y el alcance del servicio.",
      },
    ],
  },
  {
    id: 13,
    image: "https://www.iprecom.com/wp-content/uploads/2019/07/bomba-de-agua.jpg",
    gallery: [

    ],
    title: "Mantenimiento de bombas de agua",
    slug: "mantenimiento-de-bombas-de-agua",
    description:
      "Diagnóstico, mantenimiento y reparación de bombas de agua y sistemas asociados para empresas e industrias.",
    longDescription:
      "Una bomba con pérdida de caudal, presión irregular, ruido, vibración o fugas requiere revisar tanto el equipo como las condiciones del sistema donde trabaja. Mecatronix Perú evalúa bombas de agua y sistemas asociados para determinar el origen probable del problema y el tipo de mantenimiento requerido.\n\nDe acuerdo con el modelo y la falla, la intervención puede incluir revisión de componentes mecánicos y eléctricos, reparación o cambio de piezas y pruebas de funcionamiento. El alcance se define después de la evaluación; los repuestos y costos se cotizan por separado cuando corresponda. Atención en Lima y provincias.",
    features: [
      {
        icon: "activity",
        title: "Diagnóstico hidráulico",
        description: "Se revisan los síntomas reportados y las condiciones de funcionamiento del equipo y del sistema.",
      },
      {
        icon: "wrench",
        title: "Reparación de componentes",
        description: "La reparación o sustitución de piezas depende del diagnóstico y la disponibilidad del repuesto.",
      },
      {
        icon: "gauge",
        title: "Puesta a punto",
        description: "Al finalizar, se pueden realizar comprobaciones de funcionamiento según el trabajo ejecutado.",
      },
    ],
  },
  {
    id: 14,
    image: "https://mantenimientoindustrialcrm.com/wp-content/uploads/2020/10/generadores-electricos.jpg",
    gallery: [

    ],
    title: "Mantenimiento de grupos electrógenos",
    slug: "mantenimiento-de-grupos-electrogenos",
    description:
      "Mantenimiento y revisión de grupos electrógenos para empresas que requieren evaluar sus equipos de respaldo eléctrico.",
    longDescription:
      "Los grupos electrógenos proporcionan energía de respaldo cuando se interrumpe el suministro eléctrico. Mecatronix Perú evalúa solicitudes de mantenimiento o reparación considerando el modelo, las horas de uso, el historial disponible y las condiciones de operación.\n\nSegún el equipo y el alcance acordado, la revisión puede abarcar motor, alternador, baterías, filtros, fluidos, sistema de control y tablero de transferencia cuando corresponda. Las pruebas de arranque o funcionamiento bajo carga se coordinan de acuerdo con las condiciones del lugar y el proyecto. La intervención recomendada, los repuestos y la cotización se definen tras la evaluación. Atención en Lima y provincias.",
    features: [
      {
        icon: "zap",
        title: "Pruebas según el equipo",
        description: "Las comprobaciones de arranque y carga se coordinan según el equipo y las condiciones del sitio.",
      },
      {
        icon: "clipboardList",
        title: "Mantenimiento programado",
        description: "Las tareas de mantenimiento se determinan considerando el uso, el modelo y las recomendaciones disponibles.",
      },
      {
        icon: "shield",
        title: "Sistema de transferencia",
        description: "El tablero de transferencia y sus señales se revisan cuando forman parte del servicio solicitado.",
      },
    ],
  },
]

export function getServiceByIdParam(param: string): Service | undefined {
  const id = parseInt(param, 10)
  if (!Number.isFinite(id) || id < 1) return undefined
  return services.find((service) => service.id === id)
}

export function getServiceBySlugParam(param: string): Service | undefined {
  return services.find((service) => service.slug === param)
}

export const HOME_SERVICES_LIMIT = 4

export function getServicesForHome(): Service[] {
  return services.slice(0, HOME_SERVICES_LIMIT)
}

export default services
