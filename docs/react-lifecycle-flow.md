# 🔄 Životní cyklus React aplikace - Vite + Weather App

## Vizuální tok inicializace

```
1. START - npm run dev
   │
   ├─→ Vite Dev Server spuštěn
   ├─→ http://localhost:5173
   ├─→监視souborů změn
   └─→ Připraven na HMR

2. BROWSER otevře http://localhost:5173
   │
   ├─→ Zavolá index.html
   └─→ Výchozí HTML stránka

3. index.html se načte
   │
   ├─→ Meta tags (charset, viewport, title, favicon)
   ├─→ Div#root - prázdný container
   └─→ Script: <script type=\"module\" src=\"/src/main.jsx\"></script>

4. main.jsx se načte a spustí
   │
   ├─→ Import React a ReactDOM
   ├─→ Import App komponenta
   └─→ createRoot(document.getElementById('root'))

5. React inicializace
   │
   ├─→ Vytvoří virtuální DOM (VDOM)
   ├─→ Vytvoří React root object
   └─→ Připraven na rendering

6. Renderování App komponenty
   │
   ├─→ App() funkce se zavolá
   ├─→ useState(0) - vytvoří state: count = 0
   ├─→ return JSX
   └─→ JSX se transformuje na React.createElement() volání

7. React kód → HTML DOM
   │
   ├─→ Virtual DOM → Real DOM
   ├─→ DOM prvky se vloží do div#root
   └─→ Browser vykreslí stránku

8. VÝSLEDEK - Aplikace je vidět
   │
   └─→ Uživatel vidí \"Count is 0\" a tlačítko

9. USER INTERACTION
   │
   ├─→ Klikne na tlačítko
   └─→ onClick event handler se zavolá

10. setCount volaní
    │
    ├─→ State se změní: count = 1
    ├─→ React detekuje změnu
    └─→ Komponenta se RE-RENDERUJE

11. RE-RENDERING
    │
    ├─→ App() funkce se zavolá ZNOVU
    ├─→ count je teď 1
    ├─→ return nový JSX s count=1
    └─→ Virtual DOM se aktualizuje

12. RECONCILIATION (porovnání)
    │
    ├─→ React porovná staré a nové VDOM
    ├─→ Najde jen změnu: \"Count is 0\" → \"Count is 1\"
    └─→ Aktualizuje jen ten konkrétní text v DOM

13. BROWSER UPDATE
    │
    ├─→ DOM se změní
    ├─→ Browser vykreslí nový obsah
    └─→ Uživatel vidí \"Count is 1\"

14. HMR - Hot Module Replacement
    │
    ├─→ Úprava App.jsx v editoru
    ├─→ Vite detekuje změnu (filesystem watcher)
    ├─→ Vite posílá update signal do prohlížeče
    ├─→ Modul se nahradí bez REFRESH stránky
    ├─→ React si zachová STATE (count se nezmění na 0)
    └─→ Nový design se zobrazí s count=1
```

---

## 📊 Component Rendering Flow

```
                    ┌─────────────────┐
                    │   index.html    │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  main.jsx (EP)  │
                    │  - createRoot   │
                    └────────┬────────┘
                             │
            ┌────────────────▼────────────────┐
            │      React Virtual DOM          │
            │  (JavaScript representation)    │
            └────────────────┬────────────────┘
                             │
                    ┌────────▼────────┐
                    │  App Component  │
                    │  - setUp state  │
                    │  - Render JSX   │
                    └────────┬────────┘
                             │
            ┌────────────────▼────────────────┐
            │    Real DOM (HTML in Browser)   │
            │    - Visual representation      │
            │    - User vidí tuto stránku     │
            └────────────────┬────────────────┘
                             │
                    ┌────────▼────────┐
                    │  User vidí si:  │
                    │  - Text         │
                    │  - Tlačítka      │
                    │  - Obrázky      │
                    └────────┬────────┘
                             │
                  ┌──────────▼──────────┐
                  │  User klikne na UI  │
                  └──────────┬──────────┘
                             │
            ┌────────────────▼────────────────┐
            │  Event Handler se zavolá        │
            │  onClick={() => setCount(...)}  │
            └────────────────┬────────────────┘
                             │
            ┌────────────────▼────────────────┐
            │  State se změní (setCount)      │
            │  React to detekuje              │
            └────────────────┬────────────────┘
                             │
            ┌────────────────▼────────────────┐
            │  RE-RENDER: App() se zavolá     │
            │  Opět s novým state             │
            └────────────────┬────────────────┘
                             │
            ┌────────────────▼────────────────┐
            │  Nový VDOM se vytvoří           │
            │  Porovnání se starým VDOM       │
            │  (Reconciliation)               │
            └────────────────┬────────────────┘
                             │
            ┌────────────────▼────────────────┐
            │  Jen změny se send do Real DOM  │
            │  (Efficiency!)                  │
            └────────────────┬────────────────┘
                             │
            ┌────────────────▼────────────────┐
            │  Browser vykreslí UPDATE        │
            │  User vidí nový obsah!          │
            └────────────────────────────────┘
```

---

## 🔁 State Flow Diagram

```
┌─────────────────────────────────────────┐
│  const [count, setCount] = useState(0)  │
└─────────────────────────────────────────┘
         │                     ▲
         │                     │
         │ počáteční stav      │ setCountUpdateFN
         │                     │
         ▼                     │
    ┌─────────┐         ┌──────────────┐
    │ count=0 │◄────────│ onClick ev   │
    └─────────┘         └──────────────┘
         │                     ▲
         │                     │
         │ render s count=0    │ setCount((c) => c +1)
         │                     │
         ▼                     │
    ┌─────────────────────────────────┐
    │ \"Count is 0\" + Button           │
    │ (HTML na stránce)               │
    └─────────────────────────────────┘
         │
         │ User klikne
         │
         ▼
    ┌────────────────┐
    │ onClick called │
    │ setCount(1)    │
    │ → count=1      │
    └────────────────┘
         │
         │ Komponenta se re-renderuje
         │
         ▼
    ┌──────────────┐
    │ JSX Return   │
    │ count=1      │
    │ \"Count is 1\" │
    └──────────────┘
         │
         │ DOM Update
         │
         ▼
    ┌─────────────────────────────────┐
    │ \"Count is 1\" + Button           │
    │ (HTML na stránce - Updated!)    │
    └─────────────────────────────────┘
```

---

## 📦 File Processing Flow - Vite

```
Developer edituje:
    src/App.jsx
         │
         ▼
    ┌─────────────────────┐
    │ Vite detekuje soubor│
    │ (File Watcher)      │
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │ Vite transformuje:  │
    │ - JSX → JavaScript  │
    │ - CSS → CSS         │
    │ - Assets optimalizace
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │ WebSocket Connection│
    │ (Browser <-> Server)│
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │ HMR Module Update   │
    │ \"App.jsx Updated\"   │
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │ Browser JS Engine   │
    │ Náhradí starý modul │
    │ Novým modulem       │
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │ React Reconciliation│
    │ (Porovnání změn)    │
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │ Minimální DOM Update│
    │ (Jen co se změnilo) │
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────────┐
    │ Browser vykreslí Update │
    │ BEZ REFRESH (HMR!)      │
    └─────────────────────────┘
```

---

## 🎯 Klíčové body React rendringu

### 1. **Initial Render**
```
index.html → main.jsx → React.createRoot() 
→ App component() → JSX → Virtual DOM → Real DOM
```

### 2. **Re-render (State změna)**
```
User action → Event Handler → setCount() → State změna
→ App() se zavolá znovu → Nový JSX → Nový Virtual DOM
→ React porovnání (Reconciliation) → Minimální DOM changes
→ Browser update
```

### 3. **React Key Principles**
- ✅ **Unidirectional Data Flow** - Data jde jen jedním směrem
- ✅ **Component Composition** - Buduj z menších komponent
- ✅ **Virtual DOM** - React optimalizuje DOM změny
- ✅ **Immutability** - Nemění se přímo, vytváří se nové
- ✅ **Declarative** - Popis co chceš, ne jak to udělat

---

## 🚀 Vite Hot Module Replacement (HMR)

```
DEV SERVER                    BROWSER
   │                            │
   │  Watches files             │
   │  ┌──────────────┐          │
   │  │ src/App.jsx │          │
   │  │ (změněno)    │          │
   │  └──────┬───────┘          │
   │         │                  │
   │         ▼                  │
   │   ┌───────────┐            │
   │   │ Transform │            │
   │   │ (JSX→JS)  │            │
   │   └─────┬─────┘            │
   │         │                  │
   │         │ WebSocket        │
   │         ├─────────────────►│
   │         │                  │ HMR Module Update
   │         │                  │ receives new code
   │         │                  │ ▼
   │         │                  │ ┌──────────┐
   │         │                  │ │ Module   │
   │         │                  │ │ Replace  │
   │         │                  │ └────┬─────┘
   │         │                  │      │
   │         │                  │      ▼
   │         │                  │ ┌──────────┐
   │         │                  │ │ React    │
   │         │                  │ │ Re-Render│
   │         │                  │ └────┬─────┘
   │         │                  │      │
   │         │                  │      ▼
   │         │                  │ ┌──────────┐
   │         │                  │ │ Visual   │
   │         │                  │ │ Update   │
   │         │                  │ └──────────┘
   │         │                  │  (NO Full Refresh!)
```

---

## 📋 Souhrn - Co se stane kada uživatel:

1. **Otevře stránku** → index.html → React init → App komponentu → Uvidí UI
2. **Klikne na tlačítko** → onClick handler → setCount(n+1) → State změna
3. **Komponenta se re-renduje** → Nový JSX → Nový hodnoty v UI
4. **Developer edituje kód** → Vite detekuje → HMR → UI se updatuje bez refresh
5. **Build na produkci** → `npm run build` → dist folder → Připraveno na deploy

---

**Toto je kompletní flow jednoduché React aplikace! 🎉**
