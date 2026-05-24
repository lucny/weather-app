// ============================================
// APP.JSX - Hlavní komponenta aplikace
// ============================================

// useState - React Hook pro správu stavu (state) komponenty
import { useState } from 'react'

// Statické asety - Vite je importuje jako moduly
// Vite automaticky optimalizuje obrazy (minifikace, formáty)
import reactLogo from './assets/react.svg'    // Logo React framework
import viteLogo from './assets/vite.svg'      // Logo Vite build tool
import heroImg from './assets/hero.png'       // Hero obrázek

// Importuj CSS stylesheet pro tuto komponentu
// Vite spojuje CSS s komponentou přes JS bundler
import './App.css'

function App() {
  // useState - Hook pro správu lokálního stavu komponenty
  // count - aktuální hodnota stavu
  // setCount - funkce pro změnu stavu
  // 0 - počáteční hodnota (initial state)
  // Při volání setCount se komponenta re-renduje (znovu se spustí return)
  const [count, setCount] = useState(0)

  // JSX return - Vrací virtuální DOM strukturu
  // <> ... </> = React.Fragment - virtuální wrapper bez HTML prvku
  return (
    <>
      {/* Hlavní sekce - welcome obsah a příklady */}
      <section id="center">
        {/* Hero - loga Reactu a Vite */}
        <div className="hero">
          {/* Statické obrázky - Vite optimalizuje za běhu */}
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        {/* 
          Interaktivní tlačítko s počítadlem
          onClick - event handler - funkce se volá při kliknutí
          setCount() - aktualizuje state
          (count) => count + 1 - updater funkce, dostane starý state, vrací nový
          Re-render - Po změně stavu se komponenta automaticky znovu renduje
        */}
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* Vizuální separator - dekorativní prvek */}
      <div className="ticks"></div>

      {/* Sekce s odkazy na dokumentaci a komunitu */}
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
