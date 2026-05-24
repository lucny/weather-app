# ============================================
# PACKAGE.JSON - Konfigurace Node.js projektu
# ============================================
# Tento soubor obsahuje:
# - Metadata projektu (jméno, verze, popis)
# - Scripts pro build, vývoj, testing
# - Dependencies (runtime balíčky)
# - DevDependencies (vývojářské balíčky)
#
# Formát: JSON (JavaScript Object Notation)

{
  # ============================================
  # METADATA PROJEKTU
  # ============================================
  
  \"name\": \"weather-app\",
  # Jméno balíčku/projektu
  # Musí být v lowercase bez speciálních znaků (kromě pomlčky, tečky, při-pod-krčítka)
  # Používá se jako výchozí název programu
  
  \"private\": true,
  # Private=true znamená, že se projekt nikdy nebude publikovat na npm registry
  # Je určen jen pro místní vývoj a používání
  
  \"version\": \"0.0.0\",
  # Verzionování projektu - semver (semantic versioning)
  # FORMAT: major.minor.patch (0.0.0)
  # 0 = major verze
  # 0 = minor verze (nové features)
  # 0 = patch verze (bugfixy)
  # Zvýšíme když vydáme nový release
  
  \"type\": \"module\",
  # Specifikuje, že projekt používá ES6 moduly (import/export)
  # Bez tohoto by Node.js používal CommonJS (require/module.exports)
  # V ES6 modules: import { foo } from './bar.js'
  # V CommonJS: const { foo } = require('./bar.js')
  
  # ============================================
  # SCRIPTS - Příkazy pro spuštění
  # ============================================
  # Spuštění: npm run <script-name>
  
  \"scripts\": {
    # npm run dev
    # Spustí vývojový server s hot reload (HMR - Hot Module Replacement)
    # Server běží na lokálním portu (obvykle http://localhost:5173)
    # Automaticky refreshuje aplikaci když upravíš soubor
    \"dev\": \"vite\",
    
    # npm run build
    # Vytvoří produkční build aplikace
    # Spustí kompilaci, minifikaci, optimizaci
    # Výstup jde do složky 'dist' - lze deployovat na web
    \"build\": \"vite build\",
    
    # npm run lint
    # Spustí ESLint kontrolu kvality kódu
    # Detekuje chyby, potenciální problémy, nejednotný styl
    # Není nutné pro spuštění, ale je dobré pro kvalitu
    \"lint\": \"eslint .\",
    
    # npm run preview
    # Zobrazuje náhled produkčního buildu (dist)
    # Pomáhá ověřit, že se aplikace buildovala správně
    \"preview\": \"vite preview\"
  },
  
  # ============================================
  # DEPENDENCIES - Runtime balíčky
  # ============================================
  # Tyto balíčky jsou potřeba KDYŽ UŽIVATEL SPOUŠTÍ aplikaci
  # Jsou zahrnuty v produkčním buildu
  # Instalace: npm install <balíček-name>
  
  \"dependencies\": {
    \"react\": \"^19.2.6\",
    # Hlavní React knihovna
    # ^19.2.6 znamená: verze 19.2.6 a vyšší 19.x verze (kompatibilní)
    # Knihovna pro tvorbu interaktivních UI komponent
    # Používáme React Hooks: useState, useEffect, useContext, atd.
    
    \"react-dom\": \"^19.2.6\"
    # React DOM binding - mapuje React komponenty na HTML DOM
    # Poskytuje createRoot() a render() funkce
    # Bez toho by React nemohl renderovat do HTML stránky
  },
  
  # ============================================
  # DEVDEPENDENCIES - Vývojářské balíčky
  # ============================================
  # Tyto balíčky se NEMUSÍ instalovat u uživatelů
  # Jsou potřeba jen pro vývoj (build, linting, testing)
  # NEJSOU zahrnuty v produkčním buildu
  # Instalace: npm install --save-dev <balíček-name>
  
  \"devDependencies\": {
    \"@eslint/js\": \"^10.0.1\",
    # Základní ESLint pravidla pro JavaScript
    # Poskytuje recommended pravidla pro detekci chyb
    
    \"@types/react\": \"^19.2.14\",
    # TypeScript typu pro React (volitelně)
    # Pokud bychom chtěli používat TypeScript
    
    \"@types/react-dom\": \"^19.2.3\",
    # TypeScript typy pro React DOM
    
    \"@vitejs/plugin-react\": \"^6.0.1\",
    # Vite plugin pro React - umožňuje JSX transformaci
    # Bez toho by Vite neznal JSX syntax
    # Automaticky transformuje JSX do React.createElement()
    
    \"eslint\": \"^10.3.0\",
    # ESLint - Linter pro JavaScript
    # Kontoluje kvalitu kódu, styl, detekuje chyby
    
    \"eslint-plugin-react-hooks\": \"^7.1.1\",
    # ESLint plugin s pravidly pro React Hooks
    # Kontroluje: dependency arrays, rules of hooks
    
    \"eslint-plugin-react-refresh\": \"^0.5.2\",
    # ESLint plugin pro React Fast Refresh (HMR v Vite)
    # Kontroluje kompatibilitu s hot module replacement
    
    \"globals\": \"^17.6.0\",
    # Definuje globální objekty (window, document, console, atd.)
    # ESLint ví, že tyto objekty jsou dostupné bez definice
    
    \"vite\": \"^8.0.12\"
    # Vite - Build tool a development server
    # Moderní alternativa k Webpack/Parcel
    # Výhody: rychlý dev server, HMR, optimalizované buildy
    # Příkazy: vite (dev), vite build (produkce)
  }
}

# ============================================
# VERZE MANAGEMENT
# ============================================
# ^ = Kompatibilní s verzí (v0.x.x se může měnit x i y)
# ~ = Přibližně ekvivalentní (mění se jen poslední číslo)
# = = Přesná verze
# Příklady:
# ^19.2.6 = >=19.2.6 <20.0.0 (minor a patch mohou být vyšší)
# ~19.2.6 = >=19.2.6 <19.3.0 (jen patch se může měnit)
# 19.2.6 = přesně tato verze

# ============================================
# DALŠÍ UŽITEČNÉ INFORMACE
# ============================================
# npm install / npm i
# - Nainstaluje všechny dependencies v package.json
# - Vytvoří package-lock.json - pro konzistentní verze
# - Vytvoří node_modules/ - složka se všemi balíčky

# npm install --save <balíček>
# - Nainstaluje balíček a přidá do \"dependencies\"

# npm install --save-dev <balíček>
# - Nainstaluje balíček a přidá do \"devDependencies\"

# npm update
# - Aktualizuje všechny balíčky na nejnovější kompatibilní verze

# npm outdated
# - Zobrazuje zastaralé balíčky
