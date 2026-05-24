// ============================================
// ENTRY POINT APLIKACE - React Application Boot
// ============================================

// Importy z React knihovny
import { StrictMode } from 'react'
// StrictMode - vývojová komponenta, která upozorňuje na potenciální problémy
// Kontroluje: deprecated APIs, side effects, React best practices

import { createRoot } from 'react-dom/client'
// createRoot - nový React 18+ API pro inicializaci React aplikace
// Nahradil starší ReactDOM.render()

// Globální CSS styly aplikace
// Tyto styly se aplikují na všechny stránky
import './index.css'

// Hlavní App komponenta - reprezentuje celou aplikaci
import App from './App.jsx'

// ============================================
// INICIALIZACE REACT APLIKACE
// ============================================

// 1. createRoot() - Vytvoří root element pro React rendering
//    - Hledá HTML element s ID "root" v index.html
//    - Vrací objekt s metodou render()
creatRoot(document.getElementById('root')).render(
  // 2. StrictMode - Wrapper komponenta pro vývojové kontroly
  //    - V produkci nemá žádný vliv
  //    - Pomáhá detekovat problémy během vývoje
  <StrictMode>
    {/* 3. App - Hlavní komponenta, která se renderuje */}
    <App />
  </StrictMode>,
)

// ============================================
// VÝSLEDEK: React aplikace je nyní spuštěna
// a všechen obsah se vykresluje do div#root
// ============================================
