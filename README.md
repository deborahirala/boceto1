# ✏️ Portafolio — Cuaderno de bocetos animado

Portafolio personal con estética **dibujada a mano / boceto** y animaciones
dinámicas para presentar proyectos y automatizaciones. Hecho con
[Astro](https://astro.build) + [GSAP](https://gsap.com).

## ✨ Qué incluye

- Pantalla de carga donde un lápiz **dibuja** una línea
- Fondo de papel de cuaderno, tipografía manuscrita y trazos imperfectos
- Efecto "**hervido**" (_boil_): las líneas vibran como animación hecha a mano
- Garabatos (estrellas, flechas, espirales) que **se dibujan solos** al hacer scroll
- "Ficha" de habilidades con barras dibujadas a mano
- Proyectos como tarjetas tipo polaroid con cinta, que se enderezan al pasar el mouse
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
