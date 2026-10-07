# INDEMUG — Landing page

Landing page de INDEMUG S.A.C. hecha con [Astro](https://astro.build).

## Comandos

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor local en `http://localhost:4321` |
| `npm run build`   | Genera el sitio estático en `./dist/`     |
| `npm run preview` | Previsualiza el build                     |

## Editar contenido

Todos los textos, teléfonos, horarios, servicios y productos están en
`src/data/site.ts`. No hace falta tocar los componentes.

## Imágenes

Las fotos están en `public/images/` (formato WebP). Hay fotos propias de INDEMUG
y fotos de Unsplash; el detalle está en `public/images/CREDITOS.md`.

Para cambiar una foto:

1. Copia la imagen a `public/images/` (por ejemplo `public/images/closet.webp`).
2. En `src/data/site.ts`, cambia el campo `image` del producto, línea o servicio.

Si un elemento no tiene `image`, se muestra una ilustración SVG de reemplazo.

## Estructura

```
src/
  data/site.ts         contenido de la página
  layouts/Layout.astro <head>, fuentes y animaciones
  components/          secciones (Header, Hero, Lines, Services, Products,
                       About, Advantage, Cta, Footer)
  styles/global.css    colores, tipografía y estilos base
```
