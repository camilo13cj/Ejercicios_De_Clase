import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, User, Mail, Phone, BookOpen, GraduationCap, DollarSign } from 'lucide-react';
import { Course, StudentRegistration } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: Course;
  onRegister: (data: Omit<StudentRegistration, 'id' | 'registeredAt'>) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
  onRegister,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<'Principiante' | 'Intermedio' | 'Avanzado'>('Principiante');
  const [goal, setGoal] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'El nombre completo es requerido';
    if (!email.trim()) {
      errs.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Introduce un correo válido';
    }
    if (!phone.trim()) {
      errs.phone = 'El número de contacto es requerido';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onRegister({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      courseId: selectedCourse.id,
      courseName: selectedCourse.name,
      coursePrice: selectedCourse.price,
      experienceLevel,
      goal: goal.trim(),
      status: 'Confirmado',
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setGoal('');
      setErrors({});
      onClose();
    }, 1600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="registration-modal-backdrop" 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="registration-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                Registro Estudiantil
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Inscripción: {selectedCourse.name}
              </h3>
            </div>
            <button
              id="btn-close-modal"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Success message or Form */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 text-center flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                ¡Inscripción Exitosa!
              </h4>
              <p className="text-sm text-slate-600 max-w-xs">
                Se ha registrado correctamente a <strong>{fullName}</strong> en el curso <strong>{selectedCourse.name}</strong> por <strong>{selectedCourse.price}</strong>.
              </p>
              <span className="text-xs text-slate-400">
                La información ya está visible en el panel de administrador.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Selected Course summary chip */}
              <div className="p-3 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-semibold text-sky-950">
                    {selectedCourse.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-sky-700 bg-white px-2.5 py-0.5 rounded-md border border-sky-200">
                  <DollarSign className="w-3.5 h-3.5 -mr-1" />
                  {selectedCourse.price}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="reg-fullname" className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="reg-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Sofía Martínez"
                    className={`w-full pl-9 pr-3 py-2 bg-slate-50 border ${
                      errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-sky-500'
                    } rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="reg-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="estudiante@ejemplo.com"
                      className={`w-full pl-9 pr-3 py-2 bg-slate-50 border ${
                        errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-sky-500'
                      } rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reg-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="reg-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+52 55 1234 5678"
                      className={`w-full pl-9 pr-3 py-2 bg-slate-50 border ${
                        errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-sky-500'
                      } rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="reg-experience" className="block text-xs font-semibold text-slate-700 mb-1">
                  Nivel de Experiencia
                </label>
                <select
                  id="reg-experience"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                >
                  <option value="Principiante">Principiante (Desde cero)</option>
                  <option value="Intermedio">Intermedio (Conocimientos básicos)</option>
                  <option value="Avanzado">Avanzado (Busca perfeccionamiento)</option>
                </select>
              </div>

              {/* Goals / Notes */}
              <div>
                <label htmlFor="reg-goal" className="block text-xs font-semibold text-slate-700 mb-1">
                  Objetivo de Aprendizaje (Opcional)
                </label>
                <textarea
                  id="reg-goal"
                  rows={2}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="¿Qué proyectos te gustaría construir o qué meta tienes?"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  id="btn-cancel-reg"
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-medium rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  id="btn-submit-reg"
                  className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Confirmar Registro
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
