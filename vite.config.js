// ============================================
// VITE KONFIGURACE
// ============================================
// Vite - moderní build tool a dev server
// Nahrazuje Webpack/Parcel s lepší performance

import { defineConfig } from 'vite'
// defineConfig - TypeScript helper pro autocompletion v IDE

import react from '@vitejs/plugin-react'
// React plugin - přidává JSX transformaci do Vite
// Bez tohoto pluginu by Vite neznal JSX syntax

import tailwindcss from "@tailwindcss/vite";

// Dokumentace: https://vite.dev/config/
export default defineConfig({
  // Pluginy - rozšíření Vite funkcionality
  plugins: [
    // @vitejs/plugin-react - Umožňuje psát React komponenty v JSX syntaxi
    // Automaticky transformuje JSX do React.createElement() volání
    react(), tailwindcss()
  ],
  
  // Další možné konfigurace:
  // server: {
  //   port: 3000,              // Změní dev server port (defaultně 5173)
  //   open: true,              // Automaticky otevře aplikaci v prohlížeči
  // },
  // build: {
  //   outDir: 'dist',          // Výstupní složka pro build (defaultně 'dist')
  //   sourcemap: true,         // Vytvoří source maps pro debugging
  // }
})
