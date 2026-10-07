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

## Agregar fotos reales

Por ahora los productos usan ilustraciones SVG de reemplazo. Para usar fotos:

1. Copia la imagen a `public/images/` (por ejemplo `public/images/closet.jpg`).
2. En `src/data/site.ts`, agrega `image: '/images/closet.jpg'` al producto,
   línea o servicio correspondiente.

## Estructura

```
src/
  data/site.ts         contenido de la página
  layouts/Layout.astro <head>, fuentes y animaciones
  components/          secciones (Header, Hero, Lines, Services, Products,
                       About, Advantage, Cta, Footer)
  styles/global.css    colores, tipografía y estilos base
```
