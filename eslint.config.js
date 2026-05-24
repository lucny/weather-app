// ============================================
// ESLINT KONFIGURACE
// ============================================
// ESLint - Linter pro kontrolu kvality a konzistence JavaScriptu
// Detekuje chyby, potenciální problémy a vynucuje code style

// Importy pluginů a konfigurací
import js from '@eslint/js'
// Základní ESLint pravidla pro JavaScript

import globals from 'globals'
// Globální objekty pro různé prostředí (browser, Node.js, atd.)

import reactHooks from 'eslint-plugin-react-hooks'
// Plugin pro pravidla React Hooks
// Kontroluje: dependencies, rules of hooks, atd.

import reactRefresh from 'eslint-plugin-react-refresh'
// Plugin pro React Fast Refresh (HMR v Vite)
// Kontroluje kompatibilitu kódu s Hot Module Replacement

import { defineConfig, globalIgnores } from 'eslint/config'
// Konfigurace ESLint v "flat config" formátu (nový standard)

// Exportuj konfiguraci jako pole objektů
export default defineConfig([
  // 1. GLOBÁLNÍ IGNOROVÁNÍ
  // Definuj soubory/složky, které ESLint nebude kontrolovat
  globalIgnores(['dist']),  // Ignoruj produkční build
  // Další možnosti: ['node_modules', '.git', '.env']
  
  // 2. PRAVIDLA PRO JS/JSX SOUBORY  
  {
    // Zacílení souborů - která pravidla se mají aplikovat
    files: ['**/*.{js,jsx}'],  // Všechny .js a .jsx soubory
    
    // Rozšíření - Použij existující sady pravidel
    extends: [
      // Doporučená ESLint pravidla (detekuje běžné chyby)
      js.configs.recommended,
      
      // React Hooks pravidla (kontroluje rules of hooks)
      // - dependency arrays
      // - React.useCallback, useMemo
      // - Custom hooks
      reactHooks.configs.flat.recommended,
      
      // React Fast Refresh pravidla (Vite HMR)
      // - Detekuje kód nekompatibilní s live reload
      reactRefresh.configs.vite,
    ],
    
    // Nastavení jazyka
    languageOptions: {
      // Globální objekty dostupné v kódu (bez "définice")
      // browser: window, document, console, atd.
      globals: globals.browser,
      
      // Možnosti parseru ECMAScript
      parserOptions: {
        // ecmaFeatures - Povoluj JSX syntax
        ecmaFeatures: { jsx: true },
        // Další možnosti: sourceType: 'module', ecmaVersion: 2021
      },
    },
  },
])

// ============================================
// JAK SPUSTIT ESLINT
// ============================================
// npm run lint              - Kontroluj kód
// npm run lint -- --fix     - Automaticky oprav problémy
// npm run lint -- --max-warnings=0  - Treťuj warnings jako chyby
