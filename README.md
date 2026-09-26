# Chispa Digital

Landing page de Chispa Digital para agentes de viajes independientes que quieren cobrar por su asesoría y hacer crecer su agencia.

## Subir a GitHub

1. Descomprimí este ZIP.
2. Creá un repositorio nuevo en GitHub.
3. Subí el contenido de esta carpeta, no una carpeta contenedora adicional.
4. Confirmá que `package.json` quede en la raíz del repositorio.

## Probar localmente

Necesitás Node.js 20 o superior.

```bash
npm install
npm run dev
```

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

El comando de build crea la carpeta `dist/`.

## Publicar gratis en Cloudflare Pages

1. En Cloudflare, abrí **Workers & Pages**.
2. Elegí **Create application** y luego **Pages > Connect to Git**.
3. Conectá el repositorio de GitHub.
4. Configurá:

| Campo | Valor |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `20` |

No hace falta agregar variables de entorno: es una landing estática.

## Video de YouTube

El reproductor conserva el recuadro asignado y no abre una ventana aparte. Para conectar el video definitivo:

1. Abrí `src/App.tsx`.
2. Buscá `VIDEO_ID_AQUI`.
3. Reemplazalo por el ID de YouTube.

Por ejemplo, para `https://www.youtube.com/watch?v=abc123`, usá `abc123`.

## Contactos

Los textos y enlaces de email, Instagram, LinkedIn y WhatsApp están en `src/App.tsx`.

## Estructura

```text
.
├── public/
│   ├── directora.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/error-boundary.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── docs/brandbook.png
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```