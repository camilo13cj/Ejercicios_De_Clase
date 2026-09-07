import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, Eye, Code, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
    consent: false,
  });

  const rawHtmlCode = `<!-- ==========================================================================
     COMPONENTE SEMÁNTICO: FORMULARIO DE REGISTRO Y CAPTURA DE LEADS
     Metodología: BEM (Block Element Modifier)
     Accesibilidad: Conforme a pautas WCAG 2.1 AA (atributos ARIA, labels, hints)
     ========================================================================== -->

<!-- Sección principal con hito semántico identificado -->
<section class="lead-capture-section" aria-labelledby="form-lead-title">
  
  <!-- Bloque BEM principal: .form-lead -->
  <form 
    id="form-lead" 
    class="form-lead" 
    action="/api/leads" 
    method="POST" 
    novalidate
  >
    <!-- Encabezado del formulario con jerarquía visual clara -->
    <header class="form-lead__header">
      <h2 id="form-lead-title" class="form-lead__title">Impulsa tu Proyecto al Siguiente Nivel</h2>
      <p class="form-lead__subtitle">Déjanos tus datos y un especialista diseñará una propuesta técnica personalizada sin compromiso.</p>
    </header>

    <!-- Fieldset 1: Agrupación semántica estricta de datos personales y de contacto -->
    <fieldset class="form-lead__fieldset">
      <legend class="form-lead__legend">Información de Contacto</legend>

      <div class="form-lead__grid">
        <!-- Campo: Nombre completo -->
        <div class="form-lead__field">
          <label for="lead-name" class="form-lead__label">
            Nombre completo <span class="form-lead__required" aria-hidden="true">*</span>
          </label>
          <input 
            type="text" 
            id="lead-name" 
            name="name" 
            class="form-lead__input" 
            placeholder="Ej. Sofía Morales" 
            autocomplete="name"
            required
            aria-required="true" 
            aria-describedby="lead-name-desc"
          />
          <span id="lead-name-desc" class="form-lead__hint">Ingresa tu nombre y apellido.</span>
        </div>

        <!-- Campo: Correo Electrónico Corporativo -->
        <div class="form-lead__field">
          <label for="lead-email" class="form-lead__label">
            Correo corporativo <span class="form-lead__required" aria-hidden="true">*</span>
          </label>
          <input 
            type="email" 
            id="lead-email" 
            name="email" 
            class="form-lead__input" 
            placeholder="sofia.morales@empresa.com" 
            autocomplete="email"
            required
            aria-required="true" 
            aria-describedby="lead-email-desc"
          />
          <span id="lead-email-desc" class="form-lead__hint">Te enviaremos la propuesta técnica aquí.</span>
        </div>

        <!-- Campo: Número Telefónico -->
        <div class="form-lead__field">
          <label for="lead-phone" class="form-lead__label">
            Teléfono de contacto <span class="form-lead__required" aria-hidden="true">*</span>
          </label>
          <input 
            type="tel" 
            id="lead-phone" 
            name="phone" 
            class="form-lead__input" 
            placeholder="+34 612 345 678" 
            autocomplete="tel"
            required
            aria-required="true" 
            aria-describedby="lead-phone-desc"
          />
          <span id="lead-phone-desc" class="form-lead__hint">Para coordinar la sesión de diagnóstico.</span>
        </div>

        <!-- Campo: Empresa o Organización -->
        <div class="form-lead__field">
          <label for="lead-company" class="form-lead__label">
            Empresa / Organización
          </label>
          <input 
            type="text" 
            id="lead-company" 
            name="company" 
            class="form-lead__input" 
            placeholder="Ej. Innova Solutions Ltd." 
            autocomplete="organization"
            aria-describedby="lead-company-desc"
          />
          <span id="lead-company-desc" class="form-lead__hint">Opcional: nos ayuda a personalizar la llamada.</span>
        </div>
      </div>
    </fieldset>

    <!-- Fieldset 2: Agrupación semántica de detalles del requerimiento -->
    <fieldset class="form-lead__fieldset">
      <legend class="form-lead__legend">Detalles del Requerimiento</legend>

      <div class="form-lead__grid">
        <!-- Campo: Área de Interés -->
        <div class="form-lead__field form-lead__field--full">
          <label for="lead-interest" class="form-lead__label">
            Servicio de interés <span class="form-lead__required" aria-hidden="true">*</span>
          </label>
          <select 
            id="lead-interest" 
            name="interest" 
            class="form-lead__select" 
            required
            aria-required="true" 
            aria-describedby="lead-interest-desc"
          >
            <option value="" disabled selected>Selecciona el área de tu proyecto...</option>
            <option value="cloud">Modernización e Infraestructura Cloud</option>
            <option value="ai">Soluciones y Automatización con IA</option>
            <option value="web-dev">Desarrollo Web y Apps Escalables</option>
            <option value="audit">Auditoría de Rendimiento y Ciberseguridad</option>
          </select>
          <span id="lead-interest-desc" class="form-lead__hint">Selecciona la solución principal requerida.</span>
        </div>

        <!-- Campo: Mensaje / Objetivos -->
        <div class="form-lead__field form-lead__field--full">
          <label for="lead-message" class="form-lead__label">
            Objetivos y alcance del proyecto
          </label>
          <textarea 
            id="lead-message" 
            name="message" 
            class="form-lead__textarea" 
            rows="3" 
            placeholder="Describe brevemente tus desafíos actuales, plazos estimados o presupuesto..."
            aria-describedby="lead-message-desc"
          ></textarea>
          <span id="lead-message-desc" class="form-lead__hint">Opcional: detalles adicionales para acelerar el análisis.</span>
        </div>
      </div>
    </fieldset>

    <!-- Consentimiento legal y Política de Privacidad (Regulación GDPR / CCPA) -->
    <div class="form-lead__field form-lead__field--checkbox">
      <input 
        type="checkbox" 
        id="lead-consent" 
        name="consent" 
        class="form-lead__checkbox" 
        required
        aria-required="true" 
        aria-describedby="lead-consent-desc"
      />
      <label for="lead-consent" class="form-lead__label form-lead__label--inline">
        He leído y acepto la <a href="#privacidad" class="form-lead__link">política de privacidad</a> y autorizo el tratamiento de mis datos para contacto comercial.
      </label>
    </div>
    <span id="lead-consent-desc" class="form-lead__hint">Requisito obligatorio para procesar la consulta.</span>

    <!-- Bloque de acciones con modificadores BEM específicos: --primary y --secondary -->
    <div class="form-lead__actions">
      <!-- Modificador --primary: CTA corporativo en color primario (#3B82F6) -->
      <button type="submit" id="lead-submit" class="form-lead__button form-lead__button--primary">
        Solicitar Propuesta Gratuita
      </button>

      <!-- Modificador --secondary: Botón secundario estilizado con color secundario (#10B981) -->
      <button type="reset" id="lead-reset" class="form-lead__button form-lead__button--secondary">
        Restablecer Campos
      </button>
    </div>

    <!-- Indicador de confianza y seguridad SSL -->
    <p class="form-lead__security-note">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
      Tus datos están protegidos bajo cifrado SSL de 256 bits y no serán transferidos a terceros.
    </p>
  </form>

</section>`;

  const rawCssCode = `/* ==========================================================================
   FORMULARIO DE CAPTURA DE LEADS - METODOLOGÍA BEM
   Paleta: Primario (#3B82F6), Secundario (#10B981), Neutro Fondo (#F3F4F6)
   Enfoque: Mobile-First, Accesible (WCAG 2.1 AA) y Responsive
   ========================================================================== */

/* --------------------------------------------------------------------------
   Variables CSS para centralizar tokens de diseño corporativos
   -------------------------------------------------------------------------- */
:root {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-active: #1d4ed8;
  --color-secondary: #10b981;
  --color-secondary-hover: #059669;
  --color-secondary-active: #047857;
  --color-bg-neutral: #f3f4f6;
  --color-surface: #ffffff;
  --color-text-main: #1f2937;
  --color-text-muted: #6b7280;
  --color-border: #d1d5db;
  --color-border-hover: #9ca3af;
  --color-focus-ring: rgba(59, 130, 246, 0.35);
  --color-error: #ef4444;
  --color-error-bg: #fef2f2;
  --color-success: #10b981;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --transition-fast: 0.2s ease-in-out;
  --shadow-card: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

/* --------------------------------------------------------------------------
   Sección contenedora del componente (Contexto de Landing Page)
   -------------------------------------------------------------------------- */
.lead-capture-section {
  width: 100%;
  min-height: 100vh;
  padding: 2.5rem 1rem;
  background-color: var(--color-bg-neutral);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--color-text-main);
  line-height: 1.5;
}

/* --------------------------------------------------------------------------
   BLOQUE PRINCIPAL BEM: .form-lead
   Contenedor semántico del formulario con elevación limpia y fondo blanco
   -------------------------------------------------------------------------- */
.form-lead {
  width: 100%;
  max-width: 680px;
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 1.75rem 1.25rem;
  box-sizing: border-box;
  border: 1px solid rgba(209, 213, 219, 0.6);
}

/* Encabezado del bloque */
.form-lead__header {
  margin-bottom: 1.75rem;
  text-align: left;
}

.form-lead__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-main);
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.025em;
}

.form-lead__subtitle {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin: 0;
}

/* Elemento Fieldset: Agrupación semántica estricta por categorías */
.form-lead__fieldset {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1rem;
  margin: 0 0 1.5rem 0;
  background-color: #fafbfc;
}

/* Elemento Legend: Título accesible del grupo de campos */
.form-lead__legend {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  padding: 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Elemento Grid: Layout flexible con enfoque Mobile-First (1 col -> 2 col) */
.form-lead__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

/* Elemento Field: Envoltorio para cada control de formulario */
.form-lead__field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

/* Modificador de campo para abarcar ambas columnas en pantallas grandes */
.form-lead__field--full {
  grid-column: 1 / -1;
}

/* Elemento Label: Etiqueta semántica y accesible */
.form-lead__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-main);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Indicador visual de campo obligatorio */
.form-lead__required {
  color: var(--color-error);
  font-weight: 700;
}

/* Elementos Input, Select y Textarea: Controles interactivos accesibles */
.form-lead__input,
.form-lead__select,
.form-lead__textarea {
  width: 100%;
  font-size: 0.95rem;
  color: var(--color-text-main);
  background-color: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 0.875rem;
  min-height: 46px;
  box-sizing: border-box;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
}

.form-lead__input::placeholder,
.form-lead__textarea::placeholder {
  color: #9ca3af;
}

.form-lead__textarea {
  min-height: 90px;
  resize: vertical;
}

/* Estados interactivos: :hover y :focus (con anillo de enfoque contrastado) */
.form-lead__input:hover,
.form-lead__select:hover,
.form-lead__textarea:hover {
  border-color: var(--color-border-hover);
}

.form-lead__input:focus,
.form-lead__select:focus,
.form-lead__textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}

/* Modificadores de estado: Error y Éxito para validación en tiempo real */
.form-lead__input--error,
.form-lead__select--error {
  border-color: var(--color-error);
  background-color: var(--color-error-bg);
}

.form-lead__input--error:focus,
.form-lead__select--error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
}

.form-lead__input--success {
  border-color: var(--color-secondary);
}

/* Elemento Hint: Texto de ayuda y validación para lectores de pantalla */
.form-lead__hint {
  font-size: 0.775rem;
  color: var(--color-text-muted);
  line-height: 1.3;
}

.form-lead__hint--error {
  color: var(--color-error);
  font-weight: 500;
}

/* Modificador para el campo de consentimiento tipo Checkbox */
.form-lead__field--checkbox {
  flex-direction: row;
  align-items: flex-start;
  gap: 0.65rem;
  margin: 1.25rem 0 0.5rem 0;
}

.form-lead__checkbox {
  width: 1.15rem;
  height: 1.15rem;
  margin-top: 0.15rem;
  accent-color: var(--color-primary);
  cursor: pointer;
  flex-shrink: 0;
}

.form-lead__label--inline {
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--color-text-main);
  cursor: pointer;
  line-height: 1.4;
}

.form-lead__link {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--transition-fast);
}

.form-lead__link:hover {
  color: var(--color-primary-hover);
}

.form-lead__link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Elemento Actions: Botonera con flexbox adaptable */
.form-lead__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

/* Elemento Button base */
.form-lead__button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  border: 1.5px solid transparent;
  cursor: pointer;
  box-sizing: border-box;
  transition: all var(--transition-fast);
}

/* Modificador BEM: Botón Primario (#3B82F6) - Llamada a la acción principal (CTA) */
.form-lead__button--primary {
  background-color: var(--color-primary);
  color: #ffffff;
  border-color: var(--color-primary);
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.25);
}

.form-lead__button--primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 6px 12px -2px rgba(59, 130, 246, 0.35);
}

.form-lead__button--primary:active {
  background-color: var(--color-primary-active);
  transform: translateY(0);
  box-shadow: 0 2px 4px -1px rgba(59, 130, 246, 0.25);
}

.form-lead__button--primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}

/* Modificador BEM: Botón Secundario (#10B981) - Acción secundaria y reset estilizado */
.form-lead__button--secondary {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.form-lead__button--secondary:hover {
  background-color: rgba(16, 185, 129, 0.08);
  color: var(--color-secondary-hover);
  border-color: var(--color-secondary-hover);
}

.form-lead__button--secondary:active {
  background-color: rgba(16, 185, 129, 0.16);
  color: var(--color-secondary-active);
}

.form-lead__button--secondary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.35);
}

/* Elemento informativo de seguridad y confianza */
.form-lead__security-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 1rem;
  text-align: center;
}

/* --------------------------------------------------------------------------
   ADAPTATIVO / RESPONSIVE (Breakpoint Tablet & Desktop >= 640px)
   -------------------------------------------------------------------------- */
@media (min-width: 640px) {
  .form-lead {
    padding: 2.5rem 2rem;
  }

  .form-lead__title {
    font-size: 1.75rem;
  }

  /* Grid a 2 columnas para optimizar espacio vertical en desktop */
  .form-lead__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Botones distribuidos horizontalmente */
  .form-lead__actions {
    flex-direction: row;
  }

  .form-lead__button--primary {
    flex: 2;
  }

  .form-lead__button--secondary {
    flex: 1;
  }
}`;

  const handleCopy = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: '',
      consent: false,
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] flex flex-col">
      {/* Barra superior de navegación y visualización de código */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#3B82F6]" />
            <span className="h-3 w-3 rounded-full bg-[#10B981]" />
            <h1 className="font-semibold text-gray-900 text-sm md:text-base">
              Componente Lead Capture &bull; BEM &amp; HTML5 Semántico
            </h1>
          </div>

          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
            <button
              id="tab-preview-btn"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'preview'
                  ? 'bg-white text-blue-600 shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Vista Previa
            </button>
            <button
              id="tab-html-btn"
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'html'
                  ? 'bg-white text-blue-600 shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              Código HTML5
            </button>
            <button
              id="tab-css-btn"
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'css'
                  ? 'bg-white text-blue-600 shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Código CSS3 (BEM)
            </button>
          </div>
        </div>
      </header>

      {/* Área principal */}
      <main className="flex-1 flex justify-center items-center p-4">
        {activeTab === 'preview' && (
          <div className="w-full flex flex-col items-center">
            {isSubmitted ? (
              <div 
                role="status" 
                aria-live="polite" 
                className="w-full max-w-[680px] bg-white rounded-2xl p-8 border border-emerald-200 shadow-lg text-center my-8 animate-in fade-in zoom-in duration-300"
              >
                <div className="w-16 h-16 bg-emerald-50 text-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Recibida con Éxito!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm">
                  Gracias por tu interés, <strong>{formData.name || 'estimado cliente'}</strong>. Hemos recibido tus datos y un consultor técnico te contactará a <strong>{formData.email}</strong> en un plazo inferior a 24 horas.
                </p>
                <button
                  onClick={handleReset}
                  className="form-lead__button form-lead__button--primary inline-flex items-center justify-center"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              /* SECCIÓN PRINCIPAL USANDO EXACTAMENTE LA ESTRUCTURA Y CLASES BEM */
              <section className="lead-capture-section" aria-labelledby="form-lead-title">
                <form
                  id="form-lead"
                  className="form-lead"
                  action="/api/leads"
                  method="POST"
                  onSubmit={handleSubmit}
                  onReset={handleReset}
                >
                  <header className="form-lead__header">
                    <h2 id="form-lead-title" className="form-lead__title">
                      Impulsa tu Proyecto al Siguiente Nivel
                    </h2>
                    <p className="form-lead__subtitle">
                      Déjanos tus datos y un especialista diseñará una propuesta técnica personalizada sin compromiso.
                    </p>
                  </header>

                  {/* FIELDSET 1: INFORMACIÓN DE CONTACTO */}
                  <fieldset className="form-lead__fieldset">
                    <legend className="form-lead__legend">Información de Contacto</legend>

                    <div className="form-lead__grid">
                      {/* Campo Nombre */}
                      <div className="form-lead__field">
                        <label htmlFor="lead-name" className="form-lead__label">
                          Nombre completo <span className="form-lead__required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="lead-name"
                          name="name"
                          className="form-lead__input"
                          placeholder="Ej. Sofía Morales"
                          autoComplete="name"
                          required
                          aria-required="true"
                          aria-describedby="lead-name-desc"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <span id="lead-name-desc" className="form-lead__hint">
                          Ingresa tu nombre y apellido.
                        </span>
                      </div>

                      {/* Campo Correo */}
                      <div className="form-lead__field">
                        <label htmlFor="lead-email" className="form-lead__label">
                          Correo corporativo <span className="form-lead__required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="lead-email"
                          name="email"
                          className="form-lead__input"
                          placeholder="sofia.morales@empresa.com"
                          autoComplete="email"
                          required
                          aria-required="true"
                          aria-describedby="lead-email-desc"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <span id="lead-email-desc" className="form-lead__hint">
                          Te enviaremos la propuesta técnica aquí.
                        </span>
                      </div>

                      {/* Campo Teléfono */}
                      <div className="form-lead__field">
                        <label htmlFor="lead-phone" className="form-lead__label">
                          Teléfono de contacto <span className="form-lead__required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="tel"
                          id="lead-phone"
                          name="phone"
                          className="form-lead__input"
                          placeholder="+34 612 345 678"
                          autoComplete="tel"
                          required
                          aria-required="true"
                          aria-describedby="lead-phone-desc"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <span id="lead-phone-desc" className="form-lead__hint">
                          Para coordinar la sesión de diagnóstico.
                        </span>
                      </div>

                      {/* Campo Empresa */}
                      <div className="form-lead__field">
                        <label htmlFor="lead-company" className="form-lead__label">
                          Empresa / Organización
                        </label>
                        <input
                          type="text"
                          id="lead-company"
                          name="company"
                          className="form-lead__input"
                          placeholder="Ej. Innova Solutions Ltd."
                          autoComplete="organization"
                          aria-describedby="lead-company-desc"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                        <span id="lead-company-desc" className="form-lead__hint">
                          Opcional: nos ayuda a personalizar la llamada.
                        </span>
                      </div>
                    </div>
                  </fieldset>

                  {/* FIELDSET 2: DETALLES DEL REQUERIMIENTO */}
                  <fieldset className="form-lead__fieldset">
                    <legend className="form-lead__legend">Detalles del Requerimiento</legend>

                    <div className="form-lead__grid">
                      {/* Campo Servicio */}
                      <div className="form-lead__field form-lead__field--full">
                        <label htmlFor="lead-interest" className="form-lead__label">
                          Servicio de interés <span className="form-lead__required" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="lead-interest"
                          name="interest"
                          className="form-lead__select"
                          required
                          aria-required="true"
                          aria-describedby="lead-interest-desc"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        >
                          <option value="" disabled>
                            Selecciona el área de tu proyecto...
                          </option>
                          <option value="cloud">Modernización e Infraestructura Cloud</option>
                          <option value="ai">Soluciones y Automatización con IA</option>
                          <option value="web-dev">Desarrollo Web y Apps Escalables</option>
                          <option value="audit">Auditoría de Rendimiento y Ciberseguridad</option>
                        </select>
                        <span id="lead-interest-desc" className="form-lead__hint">
                          Selecciona la solución principal requerida.
                        </span>
                      </div>

                      {/* Campo Mensaje */}
                      <div className="form-lead__field form-lead__field--full">
                        <label htmlFor="lead-message" className="form-lead__label">
                          Objetivos y alcance del proyecto
                        </label>
                        <textarea
                          id="lead-message"
                          name="message"
                          className="form-lead__textarea"
                          rows={3}
                          placeholder="Describe brevemente tus desafíos actuales, plazos estimados o presupuesto..."
                          aria-describedby="lead-message-desc"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <span id="lead-message-desc" className="form-lead__hint">
                          Opcional: detalles adicionales para acelerar el análisis.
                        </span>
                      </div>
                    </div>
                  </fieldset>

                  {/* CHECKBOX DE CONSENTIMIENTO */}
                  <div className="form-lead__field form-lead__field--checkbox">
                    <input
                      type="checkbox"
                      id="lead-consent"
                      name="consent"
                      className="form-lead__checkbox"
                      required
                      aria-required="true"
                      aria-describedby="lead-consent-desc"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="lead-consent" className="form-lead__label form-lead__label--inline">
                      He leído y acepto la{' '}
                      <a href="#privacidad" className="form-lead__link" onClick={(e) => e.preventDefault()}>
                        política de privacidad
                      </a>{' '}
                      y autorizo el tratamiento de mis datos para contacto comercial.
                    </label>
                  </div>
                  <span id="lead-consent-desc" className="form-lead__hint">
                    Requisito obligatorio para procesar la consulta.
                  </span>

                  {/* ACCIONES Y BOTONES */}
                  <div className="form-lead__actions">
                    <button type="submit" id="lead-submit" className="form-lead__button form-lead__button--primary">
                      Solicitar Propuesta Gratuita
                    </button>
                    <button type="reset" id="lead-reset" className="form-lead__button form-lead__button--secondary">
                      Restablecer Campos
                    </button>
                  </div>

                  {/* NOTA DE SEGURIDAD */}
                  <p className="form-lead__security-note">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Tus datos están protegidos bajo cifrado SSL de 256 bits y no serán transferidos a terceros.
                  </p>
                </form>
              </section>
            )}
          </div>
        )}

        {/* TAB HTML */}
        {activeTab === 'html' && (
          <div className="w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-950 border-b border-gray-800">
              <span className="text-xs font-mono text-gray-400">component-lead-form.html</span>
              <button
                onClick={() => handleCopy(rawHtmlCode, 'html')}
                className="flex items-center gap-1.5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded transition"
              >
                {copiedTab === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedTab === 'html' ? 'Copiado' : 'Copiar HTML'}
              </button>
            </div>
            <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto max-h-[600px] leading-relaxed">
              <code>{rawHtmlCode}</code>
            </pre>
          </div>
        )}

        {/* TAB CSS */}
        {activeTab === 'css' && (
          <div className="w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-950 border-b border-gray-800">
              <span className="text-xs font-mono text-gray-400">form-lead.css</span>
              <button
                onClick={() => handleCopy(rawCssCode, 'css')}
                className="flex items-center gap-1.5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded transition"
              >
                {copiedTab === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedTab === 'css' ? 'Copiado' : 'Copiar CSS'}
              </button>
            </div>
            <pre className="p-4 text-xs font-mono text-blue-300 overflow-x-auto max-h-[600px] leading-relaxed">
              <code>{rawCssCode}</code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
