# 🎮 Portafolio Arcade

Portafolio personal con estética de videojuego para presentar proyectos y
automatizaciones. Hecho con [Astro](https://astro.build) + [GSAP](https://gsap.com).

## ✨ Qué incluye

- Pantalla de carga estilo arcade ("LOADING / PRESS START")
- Cursor personalizado y fondo de partículas conectadas
- Título con efecto _glitch_ y grilla neón animada
- Sección de "perfil de jugador" con barras de stats
- Proyectos como un menú de **SELECCIONAR MISIÓN** (con categorías y dificultad)
- Animaciones al hacer scroll
- Responsive (se adapta al celular)

## ✏️ Cómo edito mi contenido

Todo lo personalizable está en **un solo archivo**:

```
src/data/site.js
```

Ahí podés cambiar:
- Tu **nombre**, rol, bio y email
- Tus **redes** (LinkedIn, GitHub, etc.)
- Las **barras de stats** (habilidades)
- Tus **proyectos** (título, descripción, categoría, dificultad, tecnologías y link)

No hace falta tocar nada del diseño.

## 🚀 Cómo lo veo / corro

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321
```

Para generar la versión final lista para publicar:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # previsualiza el build
```

## 🌐 Publicar (gratis)

El sitio es estático, así que se puede subir a GitHub Pages, Netlify o Vercel.
Avisame y te dejo configurado el deploy automático.
