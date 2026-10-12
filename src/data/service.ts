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
    description: "Mantenimiento preventivo para equipos de panadería, pastelería, gastronomía y hotelería, además de otras industrias. Atención en Lima y provincias.",
    longDescription:
      "El mantenimiento preventivo ayuda a reducir fallas inesperadas y a conservar las máquinas en condiciones adecuadas de operación. Mecatronix Perú prepara revisiones según el equipo, su uso y las necesidades de cada empresa, tanto para clientes de panadería y pastelería como de gastronomía, hotelería y otros sectores industriales.\n\nEl trabajo puede incluir inspecciones programadas, lubricación, ajustes y revisión o cambio de piezas sujetas a desgaste. La frecuencia y las tareas se definen según la evaluación del equipo y las condiciones de trabajo. La atención prioriza Lima y provincias; los proyectos fuera del país se evalúan según su alcance.",
    features: [
      {
        icon: "calendarClock",
        title: "Planes por calendario",
        description: "Rutinas definidas según horas de operación o intervalos de tiempo para no dejar pasar revisiones críticas.",
      },
      {
        icon: "clipboardList",
        title: "Checklist documentado",
        description: "Listas de verificación por equipo y criticidad, con registro para trazabilidad y auditorías.",
      },
      {
        icon: "shield",
        title: "Menos paradas imprevistas",
        description: "Enfoque en piezas de desgaste, lubricación y ajustes que reducen fallas sorpresivas en planta.",
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
    description: "Mantenimiento predictivo para equipos industriales en Lima y provincias. Monitoreo de vibración, temperatura y parámetros eléctricos para detectar anomalías.",
    longDescription:
      "El mantenimiento predictivo analiza señales de condición —como vibración, temperatura, presión y parámetros eléctricos— para identificar cambios que puedan indicar desgaste o una falla en desarrollo. La información ayuda a planificar una intervención según el estado observado del equipo. El alcance de las mediciones y el plan de seguimiento se determinan de acuerdo con cada activo y proyecto. Atención en Lima y provincias.",
    features: [
      {
        icon: "activity",
        title: "Monitoreo de condición",
        description: "Seguimiento de vibraciones, temperaturas y parámetros eléctricos para detectar tendencias anómalas.",
      },
      {
        icon: "gauge",
        title: "Diagnóstico basado en datos",
        description: "Interpretación de mediciones para anticipar intervenciones antes de que el equipo falle en servicio.",
      },
      {
        icon: "calendarClock",
        title: "Intervención oportuna",
        description: "Ventanas de mantenimiento alineadas al estado real del activo, optimizando recursos y paradas.",
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
    description: "Reparación y mantenimiento correctivo para máquinas de panadería, pastelería, gastronomía y hotelería. Atención en Lima y provincias.",
    longDescription:
      "El mantenimiento correctivo atiende máquinas que presentan una falla o dejaron de funcionar correctamente. Mecatronix Perú evalúa el problema y determina las acciones necesarias para recuperar la operación, según el estado del equipo y el alcance del trabajo. Atiende solicitudes de panaderías, pastelerías, negocios gastronómicos, hoteles y otras industrias.\n\nLa reparación puede involucrar componentes mecánicos, eléctricos o electrónicos. Cuando corresponde, también se revisan elementos de automatización y control. El diagnóstico permite definir la intervención, los repuestos requeridos y una cotización antes de iniciar el trabajo. La cobertura prioritaria es Lima y provincias; las solicitudes internacionales se revisan caso por caso.",
    features: [
      {
        icon: "hammer",
        title: "Reparación en campo",
        description: "Desmontaje, sustitución de componentes y pruebas funcionales para restablecer la operación segura.",
      },
      {
        icon: "search",
        title: "Causa raíz",
        description: "Análisis de la falla para evitar recurrencias y proponer mejoras en operación o mantenimiento.",
      },
      {
        icon: "clipboardList",
        title: "Informe técnico",
        description: "Registro de hallazgos, repuestos utilizados y recomendaciones posteriores al cliente.",
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
      "Auxilio técnico y reparación de equipos industriales ante fallas imprevistas. Atención en Lima y provincias, previa coordinación y según disponibilidad.",
    longDescription:
      "El auxilio técnico atiende solicitudes por fallas imprevistas en máquinas y equipos de operación. Mecatronix coordina la evaluación según la ubicación, el tipo de equipo, la falla reportada y la disponibilidad del servicio. El diagnóstico permite definir si es posible realizar la reparación en campo o si se requiere una intervención adicional. Se atienden empresas de distintos rubros en Lima y provincias.",
    features: [
      {
        icon: "phone",
        title: "Atención prioritaria",
        description: "Canal de contacto para paradas críticas con priorización según impacto en producción.",
      },
      {
        icon: "truck",
        title: "Desplazamiento rápido",
        description: "Coordinación logística para acortar tiempos de llegada del técnico a su planta.",
      },
      {
        icon: "alertTriangle",
        title: "Protocolos de seguridad",
        description: "Trabajo bajo procedimientos seguros en equipos energizados o en condiciones de riesgo.",
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
      "Identificación, suministro e instalación de repuestos mecánicos, eléctricos y electrónicos para equipos industriales en Lima y provincias.",
    longDescription:
      "Mecatronix apoya en la identificación de repuestos mecánicos, eléctricos y electrónicos según el equipo y la necesidad reportada. Cuando el alcance lo requiere, también coordina la instalación y las comprobaciones correspondientes. La disponibilidad, compatibilidad y cotización se revisan para cada solicitud antes de confirmar el suministro.",
    features: [
      {
        icon: "package",
        title: "Suministro de repuestos",
        description: "Identificación de referencias originales o equivalentes según fabricante y aplicación.",
      },
      {
        icon: "wrench",
        title: "Instalación calificada",
        description: "Montaje, torqueado y comisionado de componentes mecánicos, eléctricos y electrónicos.",
      },
      {
        icon: "clipboardList",
        title: "Trazabilidad",
        description: "Registro de series y lotes instalados para garantías y futuras auditorías de mantenimiento.",
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
      "Instalación, montaje y puesta en marcha de equipos industriales para empresas en Lima y provincias. Servicio sujeto a evaluación técnica.",
    longDescription:
      "Aseguramos el éxito de su inversión desde el primer día. Nos encargamos del montaje riguroso y la instalación de sus nuevos equipos industriales siguiendo los más altos estándares y normativas del fabricante. Realizamos las pruebas en vacío y con carga (puesta en marcha) para garantizar que la maquinaria opere en sus parámetros óptimos de seguridad y eficiencia antes de iniciar su producción.",
    features: [
      {
        icon: "factory",
        title: "Montaje en sitio",
        description: "Alineación, nivelación, anclaje y conexión mecánica según manual y normativa aplicable.",
      },
      {
        icon: "settings",
        title: "Puesta en marcha",
        description: "Parametrización, pruebas en vacío y en carga hasta validar desempeño nominal.",
      },
      {
        icon: "clipboardList",
        title: "Entrega documentada",
        description: "Checklist de arranque, registros de prueba y capacitación básica a operadores.",
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
      "Diseño e instalación de ventilación y extracción de aire para plantas y negocios gastronómicos en Lima y provincias, según evaluación.",
    longDescription:
      "Diseñamos e instalamos sistemas de ventilación y extracción de aire de acuerdo con las condiciones del local y las necesidades del proceso. En plantas y negocios gastronómicos, estos sistemas pueden contribuir a evacuar calor, polvo, humo o grasas y a mejorar la renovación del aire. El diseño, los componentes y el alcance se determinan tras revisar las condiciones de cada espacio.",
    features: [
      {
        icon: "fan",
        title: "Balance térmico y caudales",
        description: "Dimensionamiento y distribución de ductos para renovación de aire adecuada por ambiente.",
      },
      {
        icon: "layers",
        title: "Integración en obra",
        description: "Coordinación con estructuras, eléctricos y producción para minimizar interferencias.",
      },
      {
        icon: "activity",
        title: "Pruebas de funcionamiento",
        description: "Medición de presiones y caudales para verificar el diseño frente a condiciones reales.",
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
      "Capacitación técnica para la operación y el cuidado de equipos industriales. Programas para personal en Lima y provincias, según cada necesidad.",
    longDescription:
      "Empoderamos a su personal mediante programas de formación técnica enfocados en la correcta operación y el mantenimiento autónomo de la maquinaria. Un equipo capacitado es la mejor estrategia preventiva: maximiza el rendimiento productivo, reduce errores humanos y previene averías costosas causadas por un manejo inadecuado de la tecnología industrial.",
    features: [
      {
        icon: "bookOpen",
        title: "Contenidos a medida",
        description: "Módulos según su línea de proceso, equipos críticos y nivel del personal.",
      },
      {
        icon: "users",
        title: "Enfoque práctico",
        description: "Ejercicios en planta o taller para reforzar procedimientos seguros de operación.",
      },
      {
        icon: "clipboardList",
        title: "Material de apoyo",
        description: "Guías, checklists y referencias para sostener el aprendizaje después del curso.",
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
      "Automatización industrial con PLC, HMI, sensores y neumática. Diseño e integración de control para procesos en Lima y provincias.",
    longDescription:
      "Transformamos su industria integrando tecnologías avanzadas (PLC, HMI, sensores, neumática) que optimizan y controlan sus procesos de manera automática. Estudiamos su línea de producción para diseñar soluciones a la medida que reducen la intervención manual, minimizan los tiempos muertos, disminuyen el margen de error y aumentan significativamente la rentabilidad y estandarización de su producto.",
    features: [
      {
        icon: "cpu",
        title: "Arquitectura de control",
        description: "Selección de PLC, HMI, variadores y redes industriales según requisitos del proceso.",
      },
      {
        icon: "workflow",
        title: "Integración de señales",
        description: "Cableado, instrumentación y lógica para sincronizar etapas y alarmas con su operación.",
      },
      {
        icon: "settings",
        title: "Puesta a punto",
        description: "Depuración de secuencias, tiempos y seguridades hasta validar producción estable.",
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
      "Modificación de líneas de producción e integración de máquinas para empresas industriales en Lima y provincias, según evaluación.",
    longDescription:
      "Adaptamos sus instalaciones actuales a las nuevas y crecientes demandas del mercado. Ya sea para integrar nuevas máquinas, optimizar el flujo de trabajo o escalar el volumen de producción, realizamos modificaciones estructurales, mecánicas y eléctricas en su línea con la mínima interrupción posible, garantizando una transición fluida hacia una operación superior.",
    features: [
      {
        icon: "gitBranch",
        title: "Reingeniería de layout",
        description: "Propuestas de redistribución de equipos y flujos para ganar throughput o ergonomía.",
      },
      {
        icon: "factory",
        title: "Ejecución coordinada",
        description: "Ventanas de parada acotadas y plan de rollback para reducir riesgo en producción.",
      },
      {
        icon: "clipboardList",
        title: "Validación post-cambio",
        description: "Pruebas de ritmo, calidad y seguridad antes del cierre formal del proyecto.",
      },
    ],
  },
  {
    id: 11,
    image: "https://manpan.com/wp-content/uploads/2024/10/camaras-conservacion-congelacion-panaderia-2.jpg",
    gallery: [

    ],
    title: "Instalación de camaras de conservación y congelación",
    slug: "instalacion-de-camaras-de-conservacion-y-congelacion",
    description:
      "Instalación de cámaras de conservación y congelación para alimentos en panaderías, pastelerías y gastronomía. Atención en Lima y provincias.",
    longDescription:
      "Somos especialistas en el cálculo térmico, diseño e instalación de cámaras frigoríficas y túneles de congelación de alta eficiencia energética. Utilizamos paneles termoaislantes y equipos de refrigeración de última generación para asegurar temperaturas precisas y estables, garantizando la perfecta conservación de alimentos, masas, insumos o productos termosensibles.",
    features: [
      {
        icon: "snowflake",
        title: "Cadena de frío",
        description: "Montaje de equipos de refrigeración, aislamiento y sellado según temperatura objetivo.",
      },
      {
        icon: "gauge",
        title: "Control de temperatura",
        description: "Instrumentación y alarmas para mantener rangos seguros de conservación o congelación.",
      },
      {
        icon: "shield",
        title: "Cumplimiento HACCP",
        description: "Criterios orientados a buenas prácticas en instalaciones alimentarias cuando aplica.",
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
      "Diseño e instalación de tableros eléctricos industriales de fuerza, control y automatización en Lima y provincias.",
    longDescription:
      "Fabricamos e instalamos tableros eléctricos de fuerza, control y automatización adaptados a la carga y exigencia energética de su planta. Nuestros diseños priorizan la seguridad industrial, la facilidad de mantenimiento y la protección de sus motores y equipos contra sobrecargas, caídas de tensión o cortocircuitos, asegurando un suministro eléctrico continuo y confiable.",
    features: [
      {
        icon: "layers",
        title: "Ingeniería de tablero",
        description: "Diagramas unifilares, selección de protecciones y seccionado según carga y norma.",
      },
      {
        icon: "bolt",
        title: "Montaje y conexionado",
        description: "Cableado ordenado, identificación de circuitos y pruebas de aislamiento.",
      },
      {
        icon: "clipboardList",
        title: "Entrega y señalética",
        description: "Planos as built, etiquetado de breakers y instructivos para mantenimiento eléctrico.",
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
      "Mantenimiento y reparación de bombas de agua para procesos industriales en Lima y provincias. Diagnóstico según cada sistema.",
    longDescription:
      "Realizamos el diagnóstico, reparación y mantenimiento especializado de bombas de agua (centrífugas, periféricas, sumergibles) y sistemas hidroneumáticos. Inspeccionamos sellos mecánicos, rodamientos, alineación de ejes y consumo eléctrico para prevenir fugas, pérdida de presión o fallas inesperadas, garantizando el suministro continuo de fluidos vitales para su planta.",
    features: [
      {
        icon: "activity",
        title: "Diagnóstico hidráulico",
        description: "Revisión de presiones, caudales, cavitación y vibración en rodamientos y acoplamientos.",
      },
      {
        icon: "wrench",
        title: "Sello y rodamientos",
        description: "Cambio de sellos mecánicos, empaquetaduras y componentes de desgaste con alineación.",
      },
      {
        icon: "gauge",
        title: "Puesta a punto",
        description: "Ajuste de variadores, válvulas y protecciones para operación estable y eficiente.",
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
      "Mantenimiento de grupos electrógenos para empresas en Lima y provincias. Revisión de componentes y pruebas según el equipo.",
    longDescription:
      "El respaldo energético es crítico para la continuidad de la industria. Nuestro servicio incluye la revisión integral de motores diésel/gas, cambio de filtros, análisis de fluidos, revisión de alternadores y pruebas del panel de transferencia automática (tablero de transferencia). Con este mantenimiento preventivo, garantizamos que sus generadores arranquen de inmediato, protegiendo su producción ante cualquier apagón.",
    features: [
      {
        icon: "zap",
        title: "Pruebas de carga",
        description: "Ensayos bajo demanda para verificar regulación de voltaje/frecuencia y respuesta del motor.",
      },
      {
        icon: "clipboardList",
        title: "Mantenimiento programado",
        description: "Filtros, lubricantes, refrigerante y baterías según horas y fabricante.",
      },
      {
        icon: "shield",
        title: "Arranque confiable",
        description: "Chequeo de transferencias automáticas y señales de arranque para emergencias.",
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
