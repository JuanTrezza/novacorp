# NovaCorp Cyberware Clinic

Sitio web de presentación para **NovaCorp Cyberware Clinic**, desarrollado con React + Vite y desplegado en GitHub Pages.

## 🌐 Preview de la web

- **Demo en vivo:** https://juantrezza.github.io/novacorp/

<div align="center">
  <img width="1200" alt="NovaCorp Cyberware Clinic Preview" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## ✨ Features

- UI estilo cyberpunk con Tailwind CSS
- Componentes React modernos
- Build optimizada con Vite
- Deploy automático a GitHub Pages con GitHub Actions

## 🧱 Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 3 + PostCSS + Autoprefixer

## 🚀 Desarrollo local

### Requisitos

- Node.js 20+
- npm

### Instalación

1. Clonar el repositorio
2. Instalar dependencias:

   npm install

3. Ejecutar en desarrollo:

   npm run dev

4. Generar build de producción:

   npm run build

5. Previsualizar build:

   npm run preview

## 📜 Scripts disponibles

- `npm run dev`: levanta servidor local en puerto 3000
- `npm run build`: compila para producción
- `npm run preview`: previsualiza la build
- `npm run lint`: chequeo de tipos con TypeScript
- `npm run clean`: limpia archivos de salida

## ⚙️ Deploy

El deploy se realiza automáticamente al hacer push a `main` usando el workflow en [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Configuración de base path para GitHub Pages en [vite.config.ts](vite.config.ts).

## 📁 Estructura del proyecto

- [src](src)
- [index.html](index.html)
- [vite.config.ts](vite.config.ts)
- [tailwind.config.js](tailwind.config.js)
- [postcss.config.js](postcss.config.js)
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
