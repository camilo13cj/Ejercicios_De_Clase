import React, { useState } from 'react';
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GitPullRequest,
  Check,
  Copy,
  Monitor,
  Smartphone,
  Code2,
  FileCode,
  Layers,
  AlertCircle
} from 'lucide-react';
import './hero-flow.css';

// Bloque de código HTML puro para inspección y copiado
const RAW_HTML_CODE = `<!-- ==========================================================================
     SECCIÓN HERO - FLOWTASK LANDING PAGE (ALTA CONVERSIÓN SAAS)
     - Metodología BEM (.hero-flow__*)
     - Semántica HTML5 nativa y atributos ARIA para accesibilidad
     - Layout 50/50 en desktop con stack vertical en mobile (<768px)
     ========================================================================== -->

<section class="hero-flow" aria-labelledby="hero-title" role="region">
  <div class="hero-flow__container">
    <div class="hero-flow__grid">
      
      <!-- COLUMNA IZQUIERDA: MENSAJE PERSUASIVO, FORMULARIO Y TRUST BADGES -->
      <div class="hero-flow__content">
        
        <div class="hero-flow__badge" role="status">
          <span class="hero-flow__badge-dot" aria-hidden="true"></span>
          <span class="hero-flow__badge-text">Acceso Beta Q3 • Cupos Limitados para Equipos</span>
        </div>

        <h1 id="hero-title" class="hero-flow__title">
          Sincroniza a tus ingenieros. 
          <span class="hero-flow__title-highlight">Acelera tus sprints sin fricción.</span>
        </h1>

        <p class="hero-flow__description">
          FlowTask es la plataforma de gestión ágil que traduce automáticamente los commits y pull requests de Git en tableros de avance y métricas de ciclo en tiempo real. Dile adiós a la actualización manual de tickets.
        </p>

        <!-- Formulario Inline de Captura Optimizado -->
        <div class="hero-flow__form-wrapper">
          <form 
            id="hero-beta-form" 
            class="hero-flow__form" 
            action="#" 
            method="POST" 
            novalidate
            aria-label="Formulario de registro prioritario para la Beta"
          >
            <label for="hero-user-email" class="hero-flow__label--sr-only">
              Correo electrónico corporativo
            </label>

            <div class="hero-flow__input-group">
              <span class="hero-flow__input-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>

              <input 
                type="email" 
                id="hero-user-email" 
                name="email" 
                class="hero-flow__input" 
                placeholder="Ingresa tu correo de trabajo..." 
                required 
                autocomplete="email"
                aria-required="true"
                aria-describedby="hero-form-help hero-form-feedback"
              />
            </div>

            <button 
              type="submit" 
              class="hero-flow__cta-btn" 
              id="hero-submit-btn"
              aria-label="Solicitar acceso prioritario a la beta de FlowTask"
            >
              <span>Acceso Prioritario Beta</span>
              <span class="hero-flow__button-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </button>
          </form>

          <div id="hero-form-help" class="hero-flow__microcopy">
            <span class="hero-flow__microcopy-item">
              <svg class="hero-flow__microcopy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              Sin tarjeta de crédito requerida
            </span>
            <span class="hero-flow__microcopy-item">
              <svg class="hero-flow__microcopy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              Configuración en 3 minutos con GitHub/GitLab
            </span>
          </div>

          <div id="hero-form-feedback" class="hero-flow__status-message" role="status" aria-live="polite"></div>
        </div>

        <!-- SECCIÓN DE TRUST BADGES -->
        <div class="hero-flow__trust" role="region" aria-label="Empresas asociadas">
          <p class="hero-flow__trust-label">Confiado por líderes técnicos y PMs en equipos como:</p>
          <ul class="hero-flow__trust-list" role="list">
            <li class="hero-flow__trust-item" role="listitem">
              <span class="hero-flow__trust-brand">
                <svg class="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                NovaStack
              </span>
            </li>
            <li class="hero-flow__trust-item" role="listitem">
              <span class="hero-flow__trust-brand">
                <svg class="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
                DevScale
              </span>
            </li>
            <li class="hero-flow__trust-item" role="listitem">
              <span class="hero-flow__trust-brand">
                <svg class="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                CloudPulse
              </span>
            </li>
            <li class="hero-flow__trust-item" role="listitem">
              <span class="hero-flow__trust-brand">
                <svg class="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 2.5h3L11 9"/><circle cx="12" cy="14" r="8"/></svg>
                Sprintio
              </span>
            </li>
            <li class="hero-flow__trust-item" role="listitem">
              <span class="hero-flow__trust-brand">
                <svg class="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                NexaByte
              </span>
            </li>
          </ul>
        </div>

      </div>

      <!-- COLUMNA DERECHA: MOCKUP ILUSTRATIVO DE ALTA CONVERSIÓN -->
      <div class="hero-flow__media">
        <figure class="hero-flow__mockup-card" role="group" aria-label="Mockup de la interfaz de gestión de sprints en FlowTask">
          <div class="hero-flow__mockup-header">
            <div class="hero-flow__mockup-dots" aria-hidden="true">
              <span class="hero-flow__mockup-dot"></span>
              <span class="hero-flow__mockup-dot"></span>
              <span class="hero-flow__mockup-dot"></span>
            </div>
            <div class="hero-flow__mockup-url">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>app.flowtask.io/sprint-42/board</span>
            </div>
            <span class="hero-flow__mockup-badge">EN VIVO</span>
          </div>

          <div class="hero-flow__mockup-body">
            <div class="hero-flow__mockup-toolbar">
              <div class="hero-flow__mockup-project">
                <div class="hero-flow__mockup-project-icon" aria-hidden="true">FT</div>
                <div class="hero-flow__mockup-project-info">
                  <span class="hero-flow__mockup-project-name">Plataforma Core v2.4</span>
                  <span class="hero-flow__mockup-project-sprint">Sprint Activo #42 • 8 Días Restantes</span>
                </div>
              </div>
              <div class="hero-flow__mockup-metrics">
                <div class="hero-flow__mockup-metric-pill hero-flow__mockup-metric-pill--primary">
                  <span>Velocidad: 48 pts</span>
                </div>
                <div class="hero-flow__mockup-metric-pill hero-flow__mockup-metric-pill--secondary">
                  <span>✓ 94% a tiempo</span>
                </div>
              </div>
            </div>

            <!-- Columnas del Tablero Kanban -->
            <div class="hero-flow__mockup-board" role="region" aria-label="Columnas del tablero ágil">
              <div class="hero-flow__mockup-column">
                <div class="hero-flow__mockup-col-header">
                  <span>Por Hacer</span>
                  <span class="hero-flow__mockup-col-count">3</span>
                </div>
                <div class="hero-flow__mockup-task">
                  <span class="hero-flow__mockup-task-tag hero-flow__mockup-task-tag--api">API Auth</span>
                  <div class="hero-flow__mockup-task-title">Migrar endpoint OAuth 2.0 PKCE</div>
                  <div class="hero-flow__mockup-task-footer">
                    <span>#FT-309</span>
                    <div class="hero-flow__mockup-avatar-group">
                      <span class="hero-flow__mockup-avatar">CR</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hero-flow__mockup-column">
                <div class="hero-flow__mockup-col-header">
                  <span>En Progreso</span>
                  <span class="hero-flow__mockup-col-count">2</span>
                </div>
                <div class="hero-flow__mockup-task">
                  <span class="hero-flow__mockup-task-tag hero-flow__mockup-task-tag--dev">Frontend</span>
                  <div class="hero-flow__mockup-task-title">Optimizar Web Vitals en Dashboard</div>
                  <div class="hero-flow__mockup-task-footer">
                    <span>#FT-284</span>
                    <div class="hero-flow__mockup-avatar-group">
                      <span class="hero-flow__mockup-avatar">AG</span>
                      <span class="hero-flow__mockup-avatar">ML</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hero-flow__mockup-column">
                <div class="hero-flow__mockup-col-header">
                  <span>Listo / Merged</span>
                  <span class="hero-flow__mockup-col-count">5</span>
                </div>
                <div class="hero-flow__mockup-task">
                  <span class="hero-flow__mockup-task-tag hero-flow__mockup-task-tag--qa">CI/CD</span>
                  <div class="hero-flow__mockup-task-title">Pipeline de testing automatizado</div>
                  <div class="hero-flow__mockup-task-footer">
                    <span>#FT-271</span>
                    <div class="hero-flow__mockup-avatar-group">
                      <span class="hero-flow__mockup-avatar">EK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="hero-flow__mockup-floating-card" aria-hidden="true">
            <div class="hero-flow__floating-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
            </div>
            <div class="hero-flow__floating-info">
              <span class="hero-flow__floating-title">PR #142 Merged & Cerrado</span>
              <span class="hero-flow__floating-subtitle">Ticket #FT-271 actualizado automáticamente</span>
            </div>
          </aside>
        </figure>
      </div>

    </div>
  </div>
</section>`;

const RAW_CSS_CODE = `/* ==========================================================================
   ESTILOS DE LA SECCIÓN HERO - FLOWTASK (BEM METHODOLOGY)
   Paleta oficial: Primario (#3B82F6), Secundario (#10B981), Neutro (#F3F4F6)
   ========================================================================== */

:root {
  --hero-color-primary: #3B82F6;
  --hero-color-primary-hover: #2563EB;
  --hero-color-primary-light: rgba(59, 130, 246, 0.12);
  --hero-color-secondary: #10B981;
  --hero-color-secondary-hover: #059669;
  --hero-color-secondary-light: rgba(16, 185, 129, 0.15);
  --hero-color-neutral: #F3F4F6;
  --hero-color-bg: #FFFFFF;
  --hero-color-text-title: #0F172A;
  --hero-color-text-body: #475569;
  --hero-color-text-muted: #64748B;
  --hero-color-border: #E2E8F0;
  --hero-font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --hero-radius-sm: 8px;
  --hero-radius-md: 12px;
  --hero-radius-lg: 20px;
  --hero-shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
  --hero-shadow-lg: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  --hero-transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-flow {
  position: relative;
  width: 100%;
  background-color: var(--hero-color-bg);
  color: var(--hero-color-text-body);
  font-family: var(--hero-font-family);
  padding: 4.5rem 1.5rem 4rem;
  overflow: hidden;
  box-sizing: border-box;
}

.hero-flow__container {
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

/* Layout 50/50 Desktop */
.hero-flow__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3.5rem;
}

.hero-flow__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.hero-flow__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.375rem 0.875rem;
  background-color: var(--hero-color-neutral);
  border: 1px solid var(--hero-color-border);
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--hero-color-text-title);
  margin-bottom: 1.5rem;
}

.hero-flow__badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--hero-color-secondary);
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--hero-color-secondary-light);
}

.hero-flow__title {
  font-size: 3rem;
  line-height: 1.15;
  font-weight: 800;
  color: var(--hero-color-text-title);
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem 0;
}

.hero-flow__title-highlight {
  color: var(--hero-color-primary);
}

.hero-flow__description {
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--hero-color-text-body);
  margin: 0 0 2rem 0;
  max-width: 540px;
}

.hero-flow__form-wrapper {
  margin-bottom: 2.5rem;
}

.hero-flow__form {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0.75rem;
  background-color: var(--hero-color-bg);
  padding: 0.375rem;
  border-radius: var(--hero-radius-md);
  border: 1px solid var(--hero-color-border);
  box-shadow: var(--hero-shadow-md);
  max-width: 530px;
  transition: var(--hero-transition);
}

.hero-flow__form:focus-within {
  border-color: var(--hero-color-primary);
  box-shadow: 0 0 0 4px var(--hero-color-primary-light), var(--hero-shadow-md);
}

.hero-flow__label--sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.hero-flow__input-group {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}

.hero-flow__input-icon {
  position: absolute;
  left: 1rem;
  color: var(--hero-color-text-muted);
  pointer-events: none;
}

.hero-flow__input {
  width: 100%;
  height: 3.125rem;
  padding: 0.5rem 1rem 0.5rem 2.85rem;
  font-family: inherit;
  font-size: 0.9375rem;
  color: var(--hero-color-text-title);
  background-color: transparent;
  border: none;
  outline: none;
}

.hero-flow__cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 3.125rem;
  padding: 0 1.5rem;
  background-color: var(--hero-color-primary);
  color: #FFFFFF;
  font-family: inherit;
  font-size: 0.9375rem;
  font-weight: 700;
  white-space: nowrap;
  border: none;
  border-radius: var(--hero-radius-sm);
  cursor: pointer;
  transition: var(--hero-transition);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.25);
  flex-shrink: 0;
}

.hero-flow__cta-btn:hover {
  background-color: var(--hero-color-primary-hover);
  transform: translateY(-1px);
}

.hero-flow__microcopy {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.625rem;
  font-size: 0.8125rem;
  color: var(--hero-color-text-muted);
}

.hero-flow__microcopy-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.hero-flow__microcopy-icon {
  color: var(--hero-color-secondary);
}

/* Trust Badges */
.hero-flow__trust {
  padding-top: 1.5rem;
  border-top: 1px solid var(--hero-color-border);
}

.hero-flow__trust-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--hero-color-text-muted);
  margin-bottom: 1rem;
}

.hero-flow__trust-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.hero-flow__trust-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #64748B;
  font-size: 0.875rem;
  font-weight: 700;
}

/* Mockup */
.hero-flow__media {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.hero-flow__mockup-card {
  position: relative;
  width: 100%;
  max-width: 580px;
  background-color: var(--hero-color-bg);
  border: 1px solid var(--hero-color-border);
  border-radius: var(--hero-radius-lg);
  box-shadow: var(--hero-shadow-lg);
  overflow: hidden;
}

/* MEDIA QUERIES: Apilamiento Vertical en Móviles (<768px) */
@media screen and (max-width: 767px) {
  .hero-flow {
    padding: 2.75rem 1rem 3rem;
  }

  .hero-flow__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-flow__title {
    font-size: 2rem;
  }

  .hero-flow__description {
    font-size: 1rem;
  }

  .hero-flow__form {
    flex-direction: column;
    padding: 0.5rem;
  }

  .hero-flow__input {
    height: 3rem;
  }

  .hero-flow__cta-btn {
    width: 100%;
    height: 3rem;
  }

  .hero-flow__microcopy {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}`;

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState<'html' | 'css' | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrorMessage('Por favor, ingresa tu correo electrónico.');
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, introduce un correo electrónico válido (ej. nombre@empresa.com).');
      return;
    }

    setIsSubmitted(true);
  };

  const handleCopy = (type: 'html' | 'css') => {
    const text = type === 'html' ? RAW_HTML_CODE : RAW_CSS_CODE;
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Barra de Control de Navegación e Inspección para Desarrolladores */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Marca FlowTask */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-sm">
              FT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-lg tracking-tight">FlowTask</span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  SaaS Beta
                </span>
              </div>
              <p className="text-xs text-slate-500">Landing Page de Alta Conversión (BEM + ARIA)</p>
            </div>
          </div>

          {/* Selector de Pestañas de Vista e Inspección */}
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                id="btn-tab-preview"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'preview'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Vista Previa</span>
              </button>
              <button
                id="btn-tab-html"
                onClick={() => setActiveTab('html')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'html'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Código HTML</span>
              </button>
              <button
                id="btn-tab-css"
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'css'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Código CSS</span>
              </button>
            </div>

            {/* Selector de Viewport (Desktop vs Mobile) en modo preview */}
            {activeTab === 'preview' && (
              <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg border border-slate-200 ml-2">
                <button
                  id="btn-viewport-desktop"
                  title="Vista Escritorio (50/50)"
                  onClick={() => setViewportMode('desktop')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-all ${
                    viewportMode === 'desktop'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  id="btn-viewport-mobile"
                  title="Simulación Móvil (<768px Stack Vertical)"
                  onClick={() => setViewportMode('mobile')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-all ${
                    viewportMode === 'mobile'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      </header>

      {/* ÁREA PRINCIPAL SEGÚN PESTAÑA */}
      <main className="py-6 px-3 sm:px-6">
        
        {/* PESTAÑA 1: VISTA PREVIA EN VIVO */}
        {activeTab === 'preview' && (
          <div className="max-w-7xl mx-auto">
            {/* Banner de Simulación cuando está en modo Móvil */}
            {viewportMode === 'mobile' && (
              <div className="mb-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full">
                  <Smartphone className="w-3.5 h-3.5" />
                  Simulador de dispositivo móvil (&lt;768px): Demostración de apilamiento vertical automático
                </span>
              </div>
            )}

            <div 
              className={`mx-auto transition-all duration-300 ${
                viewportMode === 'mobile' 
                  ? 'max-w-[390px] border-4 border-slate-800 rounded-3xl shadow-2xl overflow-hidden bg-white' 
                  : 'w-full bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden'
              }`}
            >
              
              {/* SECCIÓN HERO IMPLEMENTADA CON LAS CLASES BEM Y ESTRUCTURA SEMÁNTICA SOLICITADA */}
              <section 
                className="hero-flow" 
                aria-labelledby="hero-title"
                role="region"
              >
                <div className="hero-flow__container">
                  <div className={`hero-flow__grid ${viewportMode === 'mobile' ? '!grid-cols-1 !gap-8' : ''}`}>
                    
                    {/* ==========================================================
                         COLUMNA IZQUIERDA: CONTENIDO PERSUASIVO Y FORMULARIO
                         ========================================================== */}
                    <div className="hero-flow__content">
                      
                      {/* Badge / Pill de Acceso Beta */}
                      <div className="hero-flow__badge" role="status">
                        <span className="hero-flow__badge-dot" aria-hidden="true"></span>
                        <span className="hero-flow__badge-text">Acceso Beta Q3 • Cupos Limitados para Equipos</span>
                      </div>

                      {/* Headline Principal (H1) */}
                      <h1 id="hero-title" className={`hero-flow__title ${viewportMode === 'mobile' ? '!text-2xl !leading-tight' : ''}`}>
                        Sincroniza a tus ingenieros.{' '}
                        <span className="hero-flow__title-highlight">Acelera tus sprints sin fricción.</span>
                      </h1>

                      {/* Subheadline Explicativo (P) */}
                      <p className={`hero-flow__description ${viewportMode === 'mobile' ? '!text-sm' : ''}`}>
                        FlowTask es la plataforma de gestión ágil que traduce automáticamente los commits y pull requests de Git en tableros de avance y métricas de ciclo en tiempo real. Dile adiós a la actualización manual de tickets.
                      </p>

                      {/* Formulario Inline de Captura Optimizado */}
                      <div className="hero-flow__form-wrapper">
                        {!isSubmitted ? (
                          <form 
                            id="hero-beta-form" 
                            className={`hero-flow__form ${viewportMode === 'mobile' ? '!flex-col' : ''}`}
                            onSubmit={handleSubmit}
                            noValidate
                            aria-label="Formulario de registro prioritario para la Beta"
                          >
                            <label htmlFor="hero-user-email" className="hero-flow__label--sr-only">
                              Correo electrónico corporativo
                            </label>

                            <div className="hero-flow__input-group">
                              <span className="hero-flow__input-icon" aria-hidden="true">
                                <Mail className="w-5 h-5" />
                              </span>
                              <input 
                                type="email" 
                                id="hero-user-email" 
                                name="email" 
                                className="hero-flow__input" 
                                placeholder="Ingresa tu correo de trabajo..." 
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                  if (errorMessage) setErrorMessage('');
                                }}
                                required 
                                autoComplete="email"
                                aria-required="true"
                                aria-describedby="hero-form-help hero-form-feedback"
                              />
                            </div>

                            <button 
                              type="submit" 
                              className={`hero-flow__cta-btn ${viewportMode === 'mobile' ? '!w-full' : ''}`}
                              id="hero-submit-btn"
                              aria-label="Solicitar acceso prioritario a la beta de FlowTask"
                            >
                              <span>Acceso Prioritario Beta</span>
                              <span className="hero-flow__button-icon" aria-hidden="true">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </button>
                          </form>
                        ) : (
                          /* Estado de Éxito al Enviar */
                          <div 
                            className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-emerald-900 shadow-sm"
                            role="alert"
                          >
                            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-sm text-emerald-950">
                                ¡Acceso Prioritario Reservado!
                              </p>
                              <p className="text-xs text-emerald-800 mt-1">
                                Hemos guardado tu correo <span className="font-semibold underline">{email}</span>. Recibirás tu invitación exclusiva con credenciales de acceso para la Beta en cuanto se habilite tu lote.
                              </p>
                              <button 
                                onClick={() => { setIsSubmitted(false); setEmail(''); }}
                                className="mt-3 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
                              >
                                Probar con otro correo
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Error de validación accesible */}
                        {errorMessage && (
                          <div 
                            id="hero-form-feedback" 
                            className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-rose-600"
                            role="alert"
                            aria-live="polite"
                          >
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{errorMessage}</span>
                          </div>
                        )}

                        {/* Microcopy de Confianza */}
                        <div id="hero-form-help" className="hero-flow__microcopy">
                          <span className="hero-flow__microcopy-item">
                            <ShieldCheck className="hero-flow__microcopy-icon w-4 h-4" aria-hidden="true" />
                            Sin tarjeta de crédito requerida
                          </span>
                          <span className="hero-flow__microcopy-item">
                            <Sparkles className="hero-flow__microcopy-icon w-4 h-4" aria-hidden="true" />
                            Configuración en 3 minutos con GitHub/GitLab
                          </span>
                        </div>
                      </div>

                      {/* Sección de Trust Badges */}
                      <div className="hero-flow__trust" role="region" aria-label="Empresas asociadas">
                        <p className="hero-flow__trust-label">Confiado por líderes técnicos y PMs en equipos como:</p>
                        <ul className="hero-flow__trust-list" role="list">
                          <li className="hero-flow__trust-item" role="listitem">
                            <span className="hero-flow__trust-brand">
                              <svg className="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                              NovaStack
                            </span>
                          </li>
                          <li className="hero-flow__trust-item" role="listitem">
                            <span className="hero-flow__trust-brand">
                              <svg className="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
                              DevScale
                            </span>
                          </li>
                          <li className="hero-flow__trust-item" role="listitem">
                            <span className="hero-flow__trust-brand">
                              <svg className="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                              CloudPulse
                            </span>
                          </li>
                          <li className="hero-flow__trust-item" role="listitem">
                            <span className="hero-flow__trust-brand">
                              <svg className="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m13 2-2 2.5h3L11 9"/><circle cx="12" cy="14" r="8"/></svg>
                              Sprintio
                            </span>
                          </li>
                          <li className="hero-flow__trust-item" role="listitem">
                            <span className="hero-flow__trust-brand">
                              <svg className="hero-flow__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                              NexaByte
                            </span>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/* ==========================================================
                         COLUMNA DERECHA: MOCKUP ILUSTRATIVO
                         ========================================================== */}
                    <div className="hero-flow__media">
                      <figure className="hero-flow__mockup-card" role="group" aria-label="Mockup interactivo del tablero de proyectos FlowTask">
                        
                        {/* Cabecera del navegador simulado */}
                        <div className="hero-flow__mockup-header">
                          <div className="hero-flow__mockup-dots" aria-hidden="true">
                            <span className="hero-flow__mockup-dot"></span>
                            <span className="hero-flow__mockup-dot"></span>
                            <span className="hero-flow__mockup-dot"></span>
                          </div>
                          <div className="hero-flow__mockup-url">
                            <ShieldCheck className="w-3 h-3 text-slate-500" aria-hidden="true" />
                            <span>app.flowtask.io/sprint-42/board</span>
                          </div>
                          <span className="hero-flow__mockup-badge">EN VIVO</span>
                        </div>

                        {/* Contenido del Tablero SaaS */}
                        <div className="hero-flow__mockup-body">
                          <div className="hero-flow__mockup-toolbar">
                            <div className="hero-flow__mockup-project">
                              <div className="hero-flow__mockup-project-icon" aria-hidden="true">FT</div>
                              <div className="hero-flow__mockup-project-info">
                                <span className="hero-flow__mockup-project-name">Plataforma Core v2.4</span>
                                <span className="hero-flow__mockup-project-sprint">Sprint Activo #42 • 8 Días Restantes</span>
                              </div>
                            </div>
                            <div className="hero-flow__mockup-metrics">
                              <div className="hero-flow__mockup-metric-pill hero-flow__mockup-metric-pill--primary">
                                <span>Velocidad: 48 pts</span>
                              </div>
                              <div className="hero-flow__mockup-metric-pill hero-flow__mockup-metric-pill--secondary">
                                <span>✓ 94% a tiempo</span>
                              </div>
                            </div>
                          </div>

                          {/* Tablero Kanban */}
                          <div className={`hero-flow__mockup-board ${viewportMode === 'mobile' ? '!grid-cols-1' : ''}`} role="region" aria-label="Columnas del tablero ágil">
                            
                            {/* Columna 1 */}
                            <div className="hero-flow__mockup-column">
                              <div className="hero-flow__mockup-col-header">
                                <span>Por Hacer</span>
                                <span className="hero-flow__mockup-col-count">3</span>
                              </div>
                              <div className="hero-flow__mockup-task">
                                <span className="hero-flow__mockup-task-tag hero-flow__mockup-task-tag--api">API Auth</span>
                                <div className="hero-flow__mockup-task-title">Migrar endpoint OAuth 2.0 PKCE</div>
                                <div className="hero-flow__mockup-task-footer">
                                  <span>#FT-309</span>
                                  <div className="hero-flow__mockup-avatar-group">
                                    <span className="hero-flow__mockup-avatar">CR</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Columna 2 */}
                            <div className="hero-flow__mockup-column">
                              <div className="hero-flow__mockup-col-header">
                                <span>En Progreso</span>
                                <span className="hero-flow__mockup-col-count">2</span>
                              </div>
                              <div className="hero-flow__mockup-task">
                                <span className="hero-flow__mockup-task-tag hero-flow__mockup-task-tag--dev">Frontend</span>
                                <div className="hero-flow__mockup-task-title">Optimizar Web Vitals en Dashboard</div>
                                <div className="hero-flow__mockup-task-footer">
                                  <span>#FT-284</span>
                                  <div className="hero-flow__mockup-avatar-group">
                                    <span className="hero-flow__mockup-avatar">AG</span>
                                    <span className="hero-flow__mockup-avatar">ML</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Columna 3 (oculta en móvil para limpieza) */}
                            {viewportMode !== 'mobile' && (
                              <div className="hero-flow__mockup-column">
                                <div className="hero-flow__mockup-col-header">
                                  <span>Listo / Merged</span>
                                  <span className="hero-flow__mockup-col-count">5</span>
                                </div>
                                <div className="hero-flow__mockup-task">
                                  <span className="hero-flow__mockup-task-tag hero-flow__mockup-task-tag--qa">CI/CD</span>
                                  <div className="hero-flow__mockup-task-title">Pipeline de testing automatizado</div>
                                  <div className="hero-flow__mockup-task-footer">
                                    <span>#FT-271</span>
                                    <div className="hero-flow__mockup-avatar-group">
                                      <span className="hero-flow__mockup-avatar">EK</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                          </div>

                        </div>

                        {/* Notificación flotante de Git sync */}
                        {viewportMode !== 'mobile' && (
                          <aside className="hero-flow__mockup-floating-card" aria-hidden="true">
                            <div className="hero-flow__floating-icon-wrap">
                              <GitPullRequest className="w-4 h-4" />
                            </div>
                            <div className="hero-flow__floating-info">
                              <span className="hero-flow__floating-title">PR #142 Merged & Cerrado</span>
                              <span className="hero-flow__floating-subtitle">Ticket #FT-271 actualizado automáticamente</span>
                            </div>
                          </aside>
                        )}

                      </figure>
                    </div>

                  </div>
                </div>
              </section>

            </div>
          </div>
        )}

        {/* PESTAÑA 2: CÓDIGO HTML */}
        {activeTab === 'html' && (
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>hero-flow.html (Semántica HTML5 + BEM + ARIA)</span>
              </div>
              <button
                onClick={() => handleCopy('html')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                {copiedCode === 'html' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
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
            <pre className="p-6 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto selection:bg-blue-900">
              <code>{RAW_HTML_CODE}</code>
            </pre>
          </div>
        )}

        {/* PESTAÑA 3: CÓDIGO CSS */}
        {activeTab === 'css' && (
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <FileCode className="w-4 h-4 text-emerald-400" />
                <span>hero-flow.css (Metodología BEM + Paleta #3B82F6, #10B981, #F3F4F6 + Media Queries)</span>
              </div>
              <button
                onClick={() => handleCopy('css')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                {copiedCode === 'css' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-200" />
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
            <pre className="p-6 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto selection:bg-emerald-900">
              <code>{RAW_CSS_CODE}</code>
            </pre>
          </div>
        )}

      </main>

    </div>
  );
}
