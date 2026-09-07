import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  Code2,
  Eye,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowRight
} from 'lucide-react';

const HTML_CODE = `<!-- =========================================================================
     SECCIÓN DE CARACTERÍSTICAS DEL PRODUCTO (METODOLOGÍA BEM)
     Estructura semántica para Landing Pages de alta conversión
     ========================================================================= -->
<section class="features" id="caracteristicas">
  <div class="features__container">

    <!-- Encabezado de sección con jerarquía clara y contexto persuasivo -->
    <header class="features__header">
      <span class="features__badge">Tecnología de Vanguardia</span>
      <h2 class="features__title-main">Potencia tu crecimiento con infraestructura inteligente</h2>
      <p class="features__subtitle">
        Diseñado con arquitectura de última generación para escalar de cero a millones de usuarios sin fricción.
      </p>
    </header>

    <!-- Grid adaptable: 1 columna en móvil, 3 columnas en escritorio -->
    <div class="features__grid">

      <!-- Característica 1: Rendimiento / Tiempo Real -->
      <article class="features__card">
        <div class="features__icon-wrapper">
          <!-- Icono SVG Inline: Rayo / Alta Velocidad -->
          <svg class="features__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <h3 class="features__title">Motor en Tiempo Real</h3>
        <p class="features__description">
          Optimiza tus flujos de trabajo con latencia ultrabaja inferior a 30ms y sincronización bidireccional continua impulsada por nodos perimetrales (Edge).
        </p>
        <div class="features__footer">
          <a href="#demo" class="features__link">
            Explorar rendimiento <span class="features__arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

      <!-- Característica 2: Seguridad / Cifrado -->
      <article class="features__card">
        <div class="features__icon-wrapper">
          <!-- Icono SVG Inline: Escudo con Candado / Seguridad -->
          <svg class="features__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>
        <h3 class="features__title">Seguridad de Grado Bancario</h3>
        <p class="features__description">
          Protección integral con cifrado AES-256 en reposo y tránsito, autenticación multifactor avanzada y cumplimiento certificado SOC2 Tipo II y RGPD.
        </p>
        <div class="features__footer">
          <a href="#seguridad" class="features__link">
            Ver certificaciones <span class="features__arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

      <!-- Característica 3: Analítica / IA -->
      <article class="features__card">
        <div class="features__icon-wrapper">
          <!-- Icono SVG Inline: Métricas / IA Predictiva -->
          <svg class="features__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <h3 class="features__title">Analítica Predictiva con IA</h3>
        <p class="features__description">
          Transforma datos brutos en decisiones de negocio de alta conversión mediante modelos predictivos que anticipan la retención y el comportamiento del usuario.
        </p>
        <div class="features__footer">
          <a href="#analitica" class="features__link">
            Descubrir modelos <span class="features__arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

    </div>
  </div>
</section>`;

const CSS_CODE = `/* ==========================================================================
   SECCIÓN DE CARACTERÍSTICAS (FEATURES SECTION) - METODOLOGÍA BEM
   Componente para Landing Pages de alta conversión
   Paleta: Fondo Neutro (#F3F4F6) | Acento Principal (#3B82F6)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. VARIABLES DE DISEÑO (CSS CUSTOM PROPERTIES)
   Centralización de tokens de color, sombras, radios y tiempos de transición
   -------------------------------------------------------------------------- */
:root {
  --feat-bg-main: #f3f4f6;          /* Fondo neutro de la sección */
  --feat-bg-card: #ffffff;          /* Fondo de cada tarjeta */
  --feat-primary: #3b82f6;          /* Azul acento principal */
  --feat-primary-hover: #2563eb;    /* Azul para estados activos/hover */
  --feat-primary-light: #eff6ff;    /* Fondo suave para contenedores de icono */
  --feat-border-card: #e5e7eb;      /* Borde sutil neutro */
  --feat-border-hover: #bfdbfe;     /* Borde activo en hover */
  
  --feat-text-heading: #111827;     /* Color de títulos (alto contraste) */
  --feat-text-body: #4b5563;        /* Color de texto descriptivo persuasivo */
  --feat-text-muted: #6b7280;       /* Color para metadatos y subtítulos */
  
  --feat-radius-card: 16px;         /* Radio de esquinas suave y moderno */
  --feat-radius-icon: 12px;         /* Radio para el contenedor del icono */
  
  /* Sombras calculadas para profundidad gradual sin estridencias */
  --feat-shadow-default: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --feat-shadow-hover: 0 20px 25px -5px rgba(59, 130, 246, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  --feat-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* --------------------------------------------------------------------------
   2. CONTENEDOR PRINCIPAL (.features)
   Establece el fondo neutro general y espaciado vertical rítmico
   -------------------------------------------------------------------------- */
.features {
  width: 100%;
  background-color: var(--feat-bg-main);
  padding: 5rem 1.25rem;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--feat-text-heading);
}

/* --------------------------------------------------------------------------
   3. CONTENEDOR INTERNO CENTRADO (.features__container)
   Delimita el ancho máximo para pantallas anchas y asegura márgenes automáticos
   -------------------------------------------------------------------------- */
.features__container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

/* --------------------------------------------------------------------------
   4. ENCABEZADO DE LA SECCIÓN (.features__header)
   Contexto persuasivo y jerarquía visual previa al grid
   -------------------------------------------------------------------------- */
.features__header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
}

.features__badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--feat-primary);
  background-color: var(--feat-primary-light);
  border: 1px solid #dbeafe;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.features__title-main {
  font-size: 2.25rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--feat-text-heading);
  margin: 0 0 1rem 0;
}

.features__subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--feat-text-muted);
  margin: 0;
}

/* --------------------------------------------------------------------------
   5. GRID ADAPTABLE (.features__grid)
   MÓVIL (Mobile-First): 1 sola columna con espaciado vertical
   -------------------------------------------------------------------------- */
.features__grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 columna por defecto en dispositivos móviles */
  gap: 1.75rem;
  width: 100%;
  box-sizing: border-box;
}

/* --------------------------------------------------------------------------
   6. BLOQUE INDEPENDIENTE: TARJETA DE CARACTERÍSTICA (.features__card)
   Bordes suaves, sombra sutil, fondo blanco y comportamiento hover
   -------------------------------------------------------------------------- */
.features__card {
  position: relative;
  background-color: var(--feat-bg-card);
  border: 1px solid var(--feat-border-card);
  border-radius: var(--feat-radius-card);
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--feat-shadow-default);
  transition: var(--feat-transition);
  box-sizing: border-box;
}

/* Efecto de elevación e interacción al hacer :hover sobre la tarjeta */
.features__card:hover {
  transform: translateY(-6px); /* Elevación vertical sutil */
  border-color: var(--feat-border-hover);
  box-shadow: var(--feat-shadow-hover);
}

/* --------------------------------------------------------------------------
   7. CONTENEDOR E ICONO SVG (.features__icon-wrapper & .features__icon)
   Acento azul con fondo claro para destacar visualmente el beneficio
   -------------------------------------------------------------------------- */
.features__icon-wrapper {
  width: 52px;
  height: 52px;
  border-radius: var(--feat-radius-icon);
  background-color: var(--feat-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: var(--feat-transition);
}

.features__card:hover .features__icon-wrapper {
  background-color: var(--feat-primary);
}

.features__icon {
  width: 26px;
  height: 26px;
  stroke: var(--feat-primary);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: var(--feat-transition);
}

.features__card:hover .features__icon {
  stroke: #ffffff; /* El icono pasa a blanco al iluminar el fondo en hover */
}

/* --------------------------------------------------------------------------
   8. ELEMENTOS TIPOGRÁFICOS BEM (.features__title & .features__description)
   -------------------------------------------------------------------------- */
.features__title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--feat-text-heading);
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.015em;
}

.features__description {
  font-size: 0.975rem;
  line-height: 1.6;
  color: var(--feat-text-body);
  margin: 0;
  flex-grow: 1; /* Permite alinear elementos inferiores equitativamente */
}

/* Enlace persuasivo inferior para alta conversión */
.features__footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
}

.features__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--feat-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.features__link:hover {
  color: var(--feat-primary-hover);
}

.features__arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.features__card:hover .features__arrow {
  transform: translateX(4px); /* Desplazamiento sutil de la flecha de acción */
}

/* ==========================================================================
   DISEÑO RESPONSIVO (MEDIA QUERIES)
   ========================================================================== */

/* PANTALLAS TABLET (>= 768px):
   Transición equilibrada a 2 columnas para el grid (opcional y progresivo) */
@media (min-width: 768px) and (max-width: 1023px) {
  .features {
    padding: 6rem 2rem;
  }
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  /* La tercera tarjeta ocupa las 2 columnas centradas en tablets */
  .features__card:nth-child(3) {
    grid-column: span 2;
    max-width: 580px;
    margin: 0 auto;
    width: 100%;
  }
}

/* PANTALLAS ESCRITORIO / DESKTOP (>= 1024px):
   Requisito estricto: Grid equitativo de 3 columnas */
@media (min-width: 1024px) {
  .features {
    padding: 6.5rem 2.5rem;
  }
  
  .features__title-main {
    font-size: 2.75rem;
  }

  .features__grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas equitativas */
    gap: 2rem; /* Espaciado uniforme entre tarjetas */
  }

  .features__card {
    padding: 2.5rem 2.25rem;
  }
}`;

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code-html' | 'code-css'>('preview');
  const [viewportWidth, setViewportWidth] = useState<'100%' | '768px' | '375px'>('100%');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div id="features-app-root" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Barra superior de herramientas para desarrolladores y diseñadores */}
      <header id="top-toolbar" className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Título e identidad del componente */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-semibold text-white tracking-tight">
                  Features Section BEM
                </h1>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Landing Page UX
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                3 ítems • CSS Grid adaptable (1 col móvil / 3 cols desktop) • BEM estricto
              </p>
            </div>
          </div>

          {/* Selector de pestañas: Vista previa vs Código */}
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg flex items-center gap-1">
              <button
                id="tab-preview-btn"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Previa</span>
              </button>
              <button
                id="tab-html-btn"
                onClick={() => setActiveTab('code-html')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  activeTab === 'code-html'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>HTML (BEM)</span>
              </button>
              <button
                id="tab-css-btn"
                onClick={() => setActiveTab('code-css')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  activeTab === 'code-css'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>CSS Grid</span>
              </button>
            </div>

            {/* Selector interactivo de Viewport para comprobar responsividad */}
            {activeTab === 'preview' && (
              <div className="hidden md:flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
                <button
                  id="view-desktop-btn"
                  title="Vista Escritorio (3 columnas)"
                  onClick={() => setViewportWidth('100%')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    viewportWidth === '100%'
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  id="view-tablet-btn"
                  title="Vista Tablet (768px)"
                  onClick={() => setViewportWidth('768px')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    viewportWidth === '768px'
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  id="view-mobile-btn"
                  title="Vista Móvil (375px - 1 columna)"
                  onClick={() => setViewportWidth('375px')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    viewportWidth === '375px'
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col items-center justify-start p-0 md:p-6 overflow-x-hidden">
        {activeTab === 'preview' ? (
          <div className="w-full flex flex-col items-center">
            {/* Indicador de resolución interactiva si se simula un viewport */}
            {viewportWidth !== '100%' && (
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
                <span>Simulando ancho de dispositivo: <strong>{viewportWidth}</strong></span>
                <button
                  onClick={() => setViewportWidth('100%')}
                  className="text-blue-400 underline hover:text-blue-300 ml-2"
                >
                  Restablecer a 100%
                </button>
              </div>
            )}

            {/* Contenedor del componente real con el ancho configurable */}
            <div
              className="w-full transition-all duration-300 shadow-2xl rounded-none md:rounded-2xl overflow-hidden border-0 md:border md:border-slate-800"
              style={{ maxWidth: viewportWidth }}
            >
              {/* ==========================================================
                  CÓDIGO HTML/JSX RENDERIZADO CON LAS CLASES BEM EXACTAS
                  ========================================================== */}
              <section className="features" id="caracteristicas">
                <div className="features__container">
                  {/* Encabezado semántico de sección */}
                  <header className="features__header">
                    <span className="features__badge">Tecnología de Vanguardia</span>
                    <h2 className="features__title-main">
                      Potencia tu crecimiento con infraestructura inteligente
                    </h2>
                    <p className="features__subtitle">
                      Diseñado con arquitectura de última generación para escalar de cero a millones de usuarios sin fricción.
                    </p>
                  </header>

                  {/* Grid de 3 elementos con BEM */}
                  <div className="features__grid">
                    {/* Item 1: Rendimiento */}
                    <article className="features__card" id="feature-card-1">
                      <div className="features__icon-wrapper">
                        <svg className="features__icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <h3 className="features__title">Motor en Tiempo Real</h3>
                      <p className="features__description">
                        Optimiza tus flujos de trabajo con latencia ultrabaja inferior a 30ms y sincronización bidireccional continua impulsada por nodos perimetrales (Edge).
                      </p>
                      <div className="features__footer">
                        <a href="#demo" className="features__link">
                          Explorar rendimiento <span className="features__arrow" aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </article>

                    {/* Item 2: Seguridad */}
                    <article className="features__card" id="feature-card-2">
                      <div className="features__icon-wrapper">
                        <svg className="features__icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <h3 className="features__title">Seguridad de Grado Bancario</h3>
                      <p className="features__description">
                        Protección integral con cifrado AES-256 en reposo y tránsito, autenticación multifactor avanzada y cumplimiento certificado SOC2 Tipo II y RGPD.
                      </p>
                      <div className="features__footer">
                        <a href="#seguridad" className="features__link">
                          Ver certificaciones <span className="features__arrow" aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </article>

                    {/* Item 3: Analítica */}
                    <article className="features__card" id="feature-card-3">
                      <div className="features__icon-wrapper">
                        <svg className="features__icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <h3 className="features__title">Analítica Predictiva con IA</h3>
                      <p className="features__description">
                        Transforma datos brutos en decisiones de negocio de alta conversión mediante modelos predictivos que anticipan la retención y el comportamiento del usuario.
                      </p>
                      <div className="features__footer">
                        <a href="#analitica" className="features__link">
                          Descubrir modelos <span className="features__arrow" aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
            </div>

            {/* Panel de especificaciones arquitectónicas y de diseño UI/UX */}
            <div className="w-full max-w-5xl mt-10 px-4">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 sm:p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  Decisiones de Arquitectura UI/UX y Conversión
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="font-semibold text-blue-400 block mb-1">Paleta Cromática</span>
                    <p className="text-slate-300 leading-relaxed">
                      Fondo neutro <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">#F3F4F6</code> para descanso visual. Acentos en <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-400">#3B82F6</code> para dirigir la atención al beneficio principal.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="font-semibold text-blue-400 block mb-1">CSS Grid Responsivo</span>
                    <p className="text-slate-300 leading-relaxed">
                      Estructura mobile-first con <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">1fr</code> en pantallas móviles que escala fluidamente a <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">repeat(3, 1fr)</code> en desktop.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="font-semibold text-blue-400 block mb-1">Micro-Interacciones</span>
                    <p className="text-slate-300 leading-relaxed">
                      Elevación <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300">translateY(-6px)</code> con sombra difusa y cambio cromático del contenedor de icono para feedback táctil instantáneo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeTab === 'code-html' ? (
          /* Pestaña: Código HTML Semántico */
          <div className="w-full max-w-5xl px-4 py-2">
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">index.html (Estructura Semántica BEM)</span>
                </div>
                <button
                  id="copy-html-btn"
                  onClick={() => handleCopy(HTML_CODE, 'html')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  {copiedType === 'html' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar HTML</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 leading-relaxed max-h-[70vh]">
                <code>{HTML_CODE}</code>
              </pre>
            </div>
          </div>
        ) : (
          /* Pestaña: Hoja de estilos CSS Optimizada */
          <div className="w-full max-w-5xl px-4 py-2">
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">features.css (Reglas CSS Grid y BEM)</span>
                </div>
                <button
                  id="copy-css-btn"
                  onClick={() => handleCopy(CSS_CODE, 'css')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  {copiedType === 'css' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar CSS</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 leading-relaxed max-h-[70vh]">
                <code>{CSS_CODE}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
