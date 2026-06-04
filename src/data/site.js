// ============================================================================
//  CONFIGURACIÓN DEL PORTAFOLIO  —  Editá todo desde acá
// ============================================================================
// Cambiá tu nombre, rol y redes. Agregá / editá tus proyectos más abajo.
// No necesitás tocar el código de diseño: con cambiar este archivo alcanza.
// ============================================================================

export const profile = {
  name: "DÉBORAH",
  // Rol que aparece debajo del nombre (podés poner el que quieras)
  role: "Automation & Dev",
  // Frase corta tipo "subtítulo" del héroe
  tagline: "Construyo automatizaciones y proyectos que hacen el trabajo pesado por vos.",
  // Texto del bloque "perfil de jugador"
  bio: "Diseño flujos que ahorran horas, conecto herramientas que no se hablaban entre sí y armo proyectos a medida. Mitad lógica, mitad creatividad.",
  location: "Argentina",
  // Email de contacto
  email: "deborah.i@argentinacolor.com",
  // Redes / enlaces (dejá la URL vacía "" para ocultar el botón)
  socials: [
    { label: "GitHub", url: "https://github.com/deborahirala", icon: "github" },
    { label: "LinkedIn", url: "", icon: "linkedin" },
    { label: "Email", url: "mailto:deborah.i@argentinacolor.com", icon: "mail" },
  ],
};

// "Stats de jugador" — barras de habilidad (valor de 0 a 100)
export const stats = [
  { label: "Automatización", value: 92 },
  { label: "No-Code / Low-Code", value: 88 },
  { label: "Desarrollo Web", value: 78 },
  { label: "Integraciones / APIs", value: 84 },
  { label: "Creatividad", value: 95 },
];

// ============================================================================
//  PROYECTOS  —  Agregá los tuyos acá
// ============================================================================
// category: "automation" | "dev" | "other"   (define el color/etiqueta)
// difficulty: "Fácil" | "Media" | "Difícil" | "Boss"  (badge tipo videojuego)
// tags: lista de tecnologías / herramientas
// link: URL del proyecto (dejá "" si no tiene)
// ============================================================================

export const projects = [
  {
    title: "Flujo de onboarding automático",
    category: "automation",
    difficulty: "Media",
    description:
      "Cuando entra un nuevo cliente, se crea su carpeta, se envían los correos de bienvenida y se carga todo en la base de datos. Cero trabajo manual.",
    tags: ["Make", "Google Workspace", "Webhooks"],
    link: "",
  },
  {
    title: "Bot de reportes diarios",
    category: "automation",
    difficulty: "Fácil",
    description:
      "Cada mañana junta los datos de ventas, arma un resumen y lo manda al chat del equipo automáticamente.",
    tags: ["n8n", "Slack", "Google Sheets"],
    link: "",
  },
  {
    title: "Sincronización multi-plataforma",
    category: "automation",
    difficulty: "Difícil",
    description:
      "Mantiene inventario y pedidos sincronizados entre la tienda online, el ERP y la planilla de control en tiempo real.",
    tags: ["Zapier", "REST API", "Airtable"],
    link: "",
  },
  {
    title: "Landing page interactiva",
    category: "dev",
    difficulty: "Media",
    description:
      "Sitio web a medida con animaciones, formulario de contacto y optimizado para celulares. Rápido y liviano.",
    tags: ["Astro", "JavaScript", "CSS"],
    link: "",
  },
  {
    title: "Dashboard de métricas",
    category: "dev",
    difficulty: "Difícil",
    description:
      "Panel que muestra en vivo los indicadores clave del negocio, con gráficos y filtros dinámicos.",
    tags: ["React", "Charts", "API"],
    link: "",
  },
  {
    title: "Proyecto creativo",
    category: "other",
    difficulty: "Boss",
    description:
      "Acá podés contar ese proyecto especial que mezcla diseño, código y un poco de magia. Editalo en src/data/site.js.",
    tags: ["Diseño", "Idea propia"],
    link: "",
  },
];
