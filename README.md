# Pagina de Arte Crypto Grafico

```sh
npm create astro@latest
```
![home](/public/images/main.png)
## 🚀 Estructura del Projecto

Dentro del proyecto de Astro, estan las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── bg.webp
│   ├── components/
│   │   └── NavMain.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── topArt.json
│   └── pages/
│       └── index.astro
│   └── styles/
└── package.json
```

Astro busca archivos con extensión `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en el nombre de su archivo.

No hay nada especial acerca de `src/components/`, pero es el lugar donde nos gusta poner componentes de Astro/React/Vue/Svelte/Preact.

Cualquier activo estático, como imágenes, puede colocarse en el directorio `public/`.

## 🧞 Comandos para usar este proyecto


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 ¿Quieres aprender más?
Siéntete libre de consultar [nuestra documentación](https://docs.astro.build) o unirte a nuestro [servidor de Discord.](https://astro.build/chat).
