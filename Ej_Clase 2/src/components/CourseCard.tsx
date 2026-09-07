import React, { useState } from 'react';
import { Copy, Check, UserPlus, Code2 } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  isPrimaryTarget?: boolean;
  onOpenRegister: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isPrimaryTarget = false,
  onOpenRegister,
}) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // Exact HTML string requested in prompt
  const exactHtml = `<div class="card"><h2>${course.name}</h2><span class="price">${course.price}</span></div>`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(exactHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative flex flex-col rounded-2xl transition-all duration-200 ${
      isPrimaryTarget 
        ? 'ring-2 ring-sky-500 ring-offset-2 ring-offset-slate-50' 
        : 'border border-slate-200'
    }`}>
      {isPrimaryTarget && (
        <div className="absolute -top-3 left-4 z-10 px-2.5 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
          Resultado Solicitado
        </div>
      )}

      {/* The Exact HTML card component */}
      <div className="card h-full justify-between">
        <div>
          <h2>{course.name}</h2>
          <p className="text-xs text-slate-500 mt-2 line-clamp-2">
            {course.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <span className="price">{course.price}</span>

          <button
            id={`btn-inscribir-${course.id}`}
            onClick={() => onOpenRegister(course)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            <UserPlus className="w-3.5 h-3.5" />
            Inscribirme
          </button>
        </div>
      </div>

      {/* Footer controls for card: inspect & copy exact HTML */}
      <div className="bg-slate-50 px-4 py-2.5 rounded-b-2xl border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <button
          id={`btn-toggle-code-${course.id}`}
          onClick={() => setShowCode(!showCode)}
          className="inline-flex items-center gap-1 hover:text-slate-800 transition-colors"
        >
          <Code2 className="w-3.5 h-3.5 text-slate-400" />
          <span>{showCode ? 'Ocultar HTML' : 'Ver HTML'}</span>
        </button>

        <button
          id={`btn-copy-code-${course.id}`}
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-slate-600 hover:text-sky-600 font-medium transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar HTML</span>
            </>
          )}
        </button>
      </div>

      {showCode && (
        <div className="p-3 bg-slate-900 text-sky-300 font-mono text-[11px] rounded-b-xl border-t border-slate-800 break-all select-all">
          {exactHtml}
        </div>
      )}
    </div>
  );
};
