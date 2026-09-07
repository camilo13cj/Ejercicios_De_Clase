/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, LayoutDashboard, Layers, Copy, Check, UserPlus } from 'lucide-react';
import { Course, StudentRegistration } from './types';
import { CourseCard } from './components/CourseCard';
import { RegistrationModal } from './components/RegistrationModal';
import { AdminDashboard } from './components/AdminDashboard';

const COURSES: Course[] = [
  {
    id: 'tailwind',
    name: 'Curso Tailwind CSS',
    price: '$29',
    priceNumber: 29,
    description: 'Aprende diseño responsivo, clases de utilidad avanzadas y creación de sistemas de diseño modernos con Tailwind CSS.',
    category: 'CSS & Frontend',
  },
  {
    id: 'react',
    name: 'Curso React',
    price: '$49',
    priceNumber: 49,
    description: 'Domina componentes funcionales, hooks, gestión de estado y renderizado eficiente en aplicaciones web React.',
    category: 'JavaScript & Frameworks',
  },
  {
    id: 'python',
    name: 'Curso Python',
    price: '$39',
    priceNumber: 39,
    description: 'Fundamentos de programación, estructuras de datos y automatización de scripts con Python moderno.',
    category: 'Backend & Data',
  },
];

const STORAGE_KEY = 'student_course_registrations_v1';

const INITIAL_REGISTRATIONS: StudentRegistration[] = [
  {
    id: 'reg-01',
    fullName: 'Alejandro Morales',
    email: 'alejandro.m@ejemplo.com',
    phone: '+52 55 9876 5432',
    courseId: 'tailwind',
    courseName: 'Curso Tailwind CSS',
    coursePrice: '$29',
    experienceLevel: 'Intermedio',
    goal: 'Crear componentes limpios para mi portafolio personal.',
    registeredAt: '2026-09-07',
    status: 'Confirmado',
  },
  {
    id: 'reg-02',
    fullName: 'Camila Torres',
    email: 'camila.torres@ejemplo.com',
    phone: '+57 311 456 7890',
    courseId: 'react',
    courseName: 'Curso React',
    coursePrice: '$49',
    experienceLevel: 'Principiante',
    goal: 'Cambiar de carrera hacia desarrollo frontend.',
    registeredAt: '2026-09-06',
    status: 'Confirmado',
  },
];

export default function App() {
  const [currentView, setCurrentView] = useState<'courses' | 'admin'>('courses');
  const [registrations, setRegistrations] = useState<StudentRegistration[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_REGISTRATIONS;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [copiedExact, setCopiedExact] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
    } catch {
      // ignore
    }
  }, [registrations]);

  const handleOpenRegister = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const handleRegisterStudent = (data: Omit<StudentRegistration, 'id' | 'registeredAt'>) => {
    const newReg: StudentRegistration = {
      ...data,
      id: `reg-${Date.now()}`,
      registeredAt: new Date().toISOString().slice(0, 10),
    };
    setRegistrations((prev) => [newReg, ...prev]);
  };

  const handleDeleteRegistration = (id: string) => {
    setRegistrations((prev) => prev.filter((r) => r.id !== id));
  };

  const exactRequestedHtml = `<div class="card"><h2>Curso Tailwind CSS</h2><span class="price">$29</span></div>`;

  const copyExactOutput = () => {
    navigator.clipboard.writeText(exactRequestedHtml);
    setCopiedExact(true);
    setTimeout(() => setCopiedExact(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center">
      {/* Top Navigation */}
      <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight text-base block leading-none">
                Cursos Academy
              </span>
              <span className="text-[10px] text-slate-500 tracking-wide font-medium">
                Generador de Tarjetas & Registro
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              id="nav-btn-courses"
              onClick={() => setCurrentView('courses')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                currentView === 'courses'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Cursos & Tarjetas</span>
            </button>

            <button
              id="nav-btn-admin"
              onClick={() => setCurrentView('admin')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                currentView === 'admin'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Panel Admin</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-700 text-[10px] font-bold">
                {registrations.length}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 flex-1">
        {currentView === 'courses' ? (
          <div className="space-y-10">
            {/* Prompt Requirement Banner */}
            <section 
              id="prompt-task-banner"
              className="bg-white rounded-2xl border border-sky-200 p-6 shadow-xs relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    Tarea Few-Shot Ejecutada
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Tarjeta para: Curso de Tailwind CSS, Precio: $29
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Estructura HTML exacta generada bajo los ejemplos de entrenamiento:
                  </p>
                  <div className="bg-slate-900 text-sky-300 font-mono text-xs sm:text-sm p-3 rounded-lg border border-slate-800 mt-2 select-all overflow-x-auto">
                    <code>{exactRequestedHtml}</code>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                  <button
                    id="btn-copy-exact-banner"
                    onClick={copyExactOutput}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors shadow-xs"
                  >
                    {copiedExact ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Código</span>
                      </>
                    )}
                  </button>
                  <button
                    id="btn-register-exact-banner"
                    onClick={() => handleOpenRegister(COURSES[0])}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    Inscribirse al Curso ($29)
                  </button>
                </div>
              </div>
            </section>

            {/* Courses Showcase */}
            <section id="courses-grid-section" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Catálogo de Tarjetas Generadas
                  </h2>
                  <p className="text-xs text-slate-500">
                    Haz clic en "Inscribirme" para abrir el formulario modal y registrarte.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {COURSES.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isPrimaryTarget={course.id === 'tailwind'}
                    onOpenRegister={handleOpenRegister}
                  />
                ))}
              </div>
            </section>

            {/* Training Examples Info */}
            <section 
              id="few-shot-guide"
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3"
            >
              <h3 className="text-sm font-bold text-slate-900">
                Resumen de Ejemplos de Entrenamiento (Few-Shot)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-700">Ejemplo 1: React</div>
                  <div className="text-slate-500 text-[11px]">Entrada: "Tarjeta para Curso de React, Precio: $49"</div>
                  <code className="text-sky-700 font-mono text-[10px] block truncate">
                    &lt;div class="card"&gt;&lt;h2&gt;Curso React&lt;/h2&gt;&lt;span class="price"&gt;$49&lt;/span&gt;&lt;/div&gt;
                  </code>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-700">Ejemplo 2: Python</div>
                  <div className="text-slate-500 text-[11px]">Entrada: "Tarjeta para Curso de Python, Precio: $39"</div>
                  <code className="text-sky-700 font-mono text-[10px] block truncate">
                    &lt;div class="card"&gt;&lt;h2&gt;Curso Python&lt;/h2&gt;&lt;span class="price"&gt;$39&lt;/span&gt;&lt;/div&gt;
                  </code>
                </div>

                <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1">
                  <div className="font-semibold text-sky-900">Resultado: Tailwind CSS</div>
                  <div className="text-sky-700 text-[11px]">Entrada: "Tarjeta para Curso de Tailwind CSS, Precio: $29"</div>
                  <code className="text-sky-900 font-bold font-mono text-[10px] block truncate">
                    &lt;div class="card"&gt;&lt;h2&gt;Curso Tailwind CSS&lt;/h2&gt;&lt;span class="price"&gt;$29&lt;/span&gt;&lt;/div&gt;
                  </code>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <AdminDashboard
            registrations={registrations}
            onDeleteRegistration={handleDeleteRegistration}
            onBackToCourses={() => setCurrentView('courses')}
            onOpenRegisterModal={() => handleOpenRegister(COURSES[0])}
          />
        )}
      </main>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCourse={selectedCourse}
        onRegister={handleRegisterStudent}
      />
    </div>
  );
}
