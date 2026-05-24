# Soubor Struktura po inicializaci Vite + React projektu
# Detailní vysvětlení všech vytvořených souborů a složek

---

## 📦 Kompletní struktura adresáře

```
weather-app/                      # Kořenový adresář projektu
│
├── 📁 public/                   # Statické soubory - zkopírují se do buildu jak jsou
│   ├── icons.svg               # Sprite s ikonami (GitHub, Discord, atd.)
│   ├── favicon.svg             # Ikona aplikace v tab prohlížeče
│   └── vite.svg                # Logo Vite
│
├── 📁 src/                      # Zdrojový kód aplikace - sem píšeme náš kód
│   ├── 📁 assets/              # Obrázky a média
│   │   ├── hero.png            # Hero obrázek
│   │   ├── react.svg           # React logo
│   │   └── vite.svg            # Vite logo
│   │
│   ├── App.jsx                 # Hlavní React komponenta
│   ├── App.css                 # Styly pro App komponentu
│   │
│   ├── main.jsx                # Entry point - inicializace aplikace
│   │
│   └── index.css               # Globální CSS styly
│
├── 📁 docs/                     # Dokumentace
│   ├── 01.md                   # Tento soubor - podrobný popis inicializace
│   └── package-json-explained.md  # Vysvětlení package.json souboru
│
├── 📁 node_modules/            # Všechny nainstalované balíčky
│   ├── react/                  # React knihovna
│   ├── react-dom/              # React DOM rendering
│   ├── vite/                   # Vite build tool
│   └── ... (další balíčky)
│
├── 📄 index.html               # HTML template
├── 📄 package.json             # Konfigurační soubor
├── 📄 package-lock.json        # Lock soubor - zamezuje změny verzí
├── 📄 vite.config.js           # Konfigurace Vite builderu
├── 📄 eslint.config.js         # Konfigurace ESLint linteru
├── 📄 .gitignore               # Soubory k ignorování v Git
├── 📄 README.md                # Readme soubor
│
└── 🔧 .vite/                   # Vite cache (generuje se automaticky)
```

---

## 🔍 Detailní vysvětlení důležitých souborů

### 1. **index.html** - Vstupní HTML stránka
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Metadata tags -->
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>weather-app</title>
  </head>
  <body>
    <!-- Cílový element pro React aplikaci -->
    <div id="root"></div>
    
    <!-- Entry point - načítá main.jsx jako ES6 modul -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Důležité:**
- `<div id="root">` - sem se renduje celá React aplikace
- `type="module"` - umožňuje použít import/export
- `src="/src/main.jsx"` - cesta k entry pointu aplikace

---

### 2. **src/main.jsx** - Inicializace React aplikace
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Vytvoří React root a renduje App komponentu
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Co se děje:**
1. `createRoot()` - vytvoří React virtuální DOM root
2. `render()` - renderuje App komponentu do HTML
3. `<StrictMode>` - wrapper pro vývojové chyby a varování

---

### 3. **src/App.jsx** - Hlavní komponenta
```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* JSX - kombinace HTML a JavaScript */}
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </>
  )
}

export default App
```

**Klíčové pojmy:**
- **Functional Component** - funkce která vrací JSX
- **useState** - React Hook pro state management
- **JSX** - HTML-like syntax v JavaScriptu
- **onClick** - event handler pro interakci

---

### 4. **package.json** - Konfigurace projektu

```json
{
  "name": "weather-app",
  "version": "0.0.0",
  "type": "module",
  
  "scripts": {
    "dev": "vite",           // npm run dev - dev server
    "build": "vite build",   // npm run build - produkční build
    "lint": "eslint .",      // npm run lint - kontrola kódu
    "preview": "vite preview" // npm run preview - náhled buildu
  },
  
  "dependencies": {
    "react": "^19.2.6",      // Runtime balíčky
    "react-dom": "^19.2.6"
  },
  
  "devDependencies": {
    "vite": "^8.0.12",        // Build tool
    "@vitejs/plugin-react": "^6.0.1",  // React plugin
    "eslint": "^10.3.0",      // Code linter
    // ... další dev balíčky
  }
}
```

**Verze format:**
- `^19.2.6` = kompatibilní s 19.x verzí (minor/patch se mění)
- `~19.2.6` = jen patch verze se mění (19.2.x)
- `19.2.6` = přesně tato verze

---

### 5. **vite.config.js** - Konfiguraci Vite

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Plugin pro JSX transformaci
})
```

**Vite features:**
- ⚡ Bleskurychlý dev server (native ES6 moduly)
- 🔄 HMR - Hot Module Replacement (live reload)
- 📦 Optimalizovaný produkční build
- 🔧 Minimální konfigurace

---

### 6. **eslint.config.js** - Kontrola kódu

```javascript
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,        // Základní pravidla
      reactHooks.configs.flat.recommended,  // React Hooks pravidla
      reactRefresh.configs.vite,     // Vite compatibility
    ],
    languageOptions: {
      globals: { browser: true },    // Browser globals
      parserOptions: { jsx: true },  // JSX podpora
    },
  },
])
```

**ESLint kontroluje:**
- Syntaktické chyby
- Nepoužívané proměnné
- React best practices
- Code style konzistenci

---

## 🚀 Workflow vývoje

### 1. Instalace dependencí
```bash
npm install
# Nainstaluje všechny balíčky z package.json
# Vytvoří node_modules/ a package-lock.json
```

### 2. Spuštění dev serveru
```bash
npm run dev
# Spustí Vite dev server na http://localhost:5173
# Aplikace se hot-reloaduje při úpravě souborů
```

### 3. Vývoj
```
- Upravuješ soubory v src/
- Prohlížeč se automaticky refreshuje (HMR)
- ESLint kontroluje kvalitu v reálném čase
```

### 4. Produkční build
```bash
npm run build
# Vytvoří optimalizovaný build v dist/
# Soubory jsou minifikovány, bundlované
```

### 5. Nasazení
```
dist/ složka se deployuje na hosting:
- Vercel
- Netlify
- GitHub Pages
- Vlastní server
```

---

## 📚 Klíčové pojmy

### ESM (ES6 Modules)
```javascript
// Import
import { useState } from 'react'
import App from './App'

// Export
export default App
```

### JSX (JavaScript XML)
```javascript
// JSX - HTML-like syntax v JavaScriptu
const element = <h1>Hello {name}!</h1>

// Kompiluje se na:
const element = React.createElement('h1', null, `Hello ${name}!`)
```

### React Hooks
```javascript
// useState - sate management
const [count, setCount] = useState(0)

// useEffect - side effects (později)
useEffect(() => { /* ... */ }, [deps])

// usuContext - globální state (později)
const value = useContext(MyContext)
```

### HMR (Hot Module Replacement)
- Funkcionalita Vite dev serveru
- Upravíš soubor → server ho aktualizuje → browser se refreshuje
- Zachovává state aplikace → rychlejší vývoj

---

## 🔧 Běžné úkoly

### Přidání nového balíčku
```bash
npm install axios                    # Production
npm install --save-dev prettier      # Development
```

### Spuštění linteru
```bash
npm run lint          # Zobrazí chyby
npm run lint --fix    # Automatické opravy
```

### Aktualizace balíčků
```bash
npm update            # Všechny balíčky
npm update react      # Konkrétní balíček
npm outdated          # Zastaralé verze
```

---

## ✅ Ověření instalace

```bash
# Ověř verze
node --version        # Měl by být v14+
npm --version         # Měl by být v6+

# Test dev serveru
npm run dev
# Měl by vytvořit:
# ✔ VITE v8.x.x  ready in XXX ms
# ➜  Local:   http://localhost:5173/

# Test buildu
npm run build
# Měl by vytvořit dist/ s index.html, assets/
```

---

## 📝 Další doporučené kroky

1. **Smazat demo obsah**
   - Přepsat App.jsx pro weather app
   - Přidat vlastní komponenty

2. **Přidat CSS framework** (volitelně)
   - Tailwind CSS
   - Material-UI
   - Bootstrap

3. **Přidat state management** (pro komplexní app)
   - Context API
   - Zustand
   - Redux

4. **API integrace**
   - Fetch nebo Axios
   - Environment variables (.env)

5. **Testing**
   - Vitest
   - React Testing Library

6. **Deployment**
   - Build: `npm run build`
   - Deploy dist/ na hosting

---

## 🎓 Learning Resources

- [Vite docs](https://vitejs.dev/)
- [React docs](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

---

**Gratulace! Máš úspěšně inicializovaný React projekt s Vite! 🎉**
