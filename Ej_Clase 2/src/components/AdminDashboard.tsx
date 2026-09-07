import React, { useState, useMemo } from 'react';
import { 
  Users, 
  DollarSign, 
  Search, 
  Trash2, 
  Download, 
  ArrowLeft,
  GraduationCap,
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { StudentRegistration } from '../types';

interface AdminDashboardProps {
  registrations: StudentRegistration[];
  onDeleteRegistration: (id: string) => void;
  onBackToCourses: () => void;
  onOpenRegisterModal: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  registrations,
  onDeleteRegistration,
  onBackToCourses,
  onOpenRegisterModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('Todos');

  // Metrics
  const totalStudents = registrations.length;
  const totalRevenue = useMemo(() => {
    return registrations.reduce((acc, curr) => {
      const numericPrice = parseInt(curr.coursePrice.replace(/[^0-9]/g, ''), 10) || 0;
      return acc + numericPrice;
    }, 0);
  }, [registrations]);

  const courseCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    registrations.forEach((r) => {
      counts[r.courseName] = (counts[r.courseName] || 0) + 1;
    });
    return counts;
  }, [registrations]);

  const mostPopularCourse = useMemo(() => {
    const keys = Object.keys(courseCounts);
    if (keys.length === 0) return 'Sin registros';
    keys.sort((a, b) => (courseCounts[b] || 0) - (courseCounts[a] || 0));
    return keys[0];
  }, [courseCounts]);

  // Filtered registrations
  const filteredRegistrations = useMemo(() => {
    return registrations.filter((reg) => {
      const matchesSearch = 
        reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.phone.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCourse = 
        selectedCourseFilter === 'Todos' || reg.courseName === selectedCourseFilter;

      return matchesSearch && matchesCourse;
    });
  }, [registrations, searchTerm, selectedCourseFilter]);

  // Export to CSV
  const handleExportCSV = () => {
    if (registrations.length === 0) return;

    const headers = ['ID', 'Nombre Completo', 'Email', 'Teléfono', 'Curso', 'Precio', 'Nivel', 'Objetivo', 'Fecha', 'Estado'];
    const rows = registrations.map((r) => [
      `"${r.id}"`,
      `"${r.fullName}"`,
      `"${r.email}"`,
      `"${r.phone}"`,
      `"${r.courseName}"`,
      `"${r.coursePrice}"`,
      `"${r.experienceLevel}"`,
      `"${(r.goal || '').replace(/"/g, '""')}"`,
      `"${r.registeredAt}"`,
      `"${r.status}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `estudiantes_registrados_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="admin-dashboard-view" className="w-full space-y-8 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            id="btn-back-to-courses"
            onClick={onBackToCourses}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Cursos
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Panel de Administración
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Gestión y consulta en tiempo real de estudiantes inscritos.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-export-csv"
            onClick={handleExportCSV}
            disabled={registrations.length === 0}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
          >
            <Download className="w-4 h-4 text-slate-500" />
            Exportar CSV
          </button>
          <button
            id="btn-admin-new-reg"
            onClick={onOpenRegisterModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shadow-xs"
          >
            + Inscribir Estudiante
          </button>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Estudiantes Registrados
            </span>
            <div className="text-2xl font-bold text-slate-900 mt-0.5">
              {totalStudents}
            </div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Total Recaudado Estimado
            </span>
            <div className="text-2xl font-bold text-slate-900 mt-0.5">
              ${totalRevenue} USD
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Curso Más Demandado
            </span>
            <div className="text-base font-bold text-slate-900 mt-0.5 truncate max-w-[160px]">
              {mostPopularCourse}
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-slate-50/40">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="input-admin-search"
              type="text"
              placeholder="Buscar por nombre, email o teléfono..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="select-admin-course-filter" className="text-xs font-medium text-slate-600 whitespace-nowrap">
              Filtrar por curso:
            </label>
            <select
              id="select-admin-course-filter"
              value={selectedCourseFilter}
              onChange={(e) => setSelectedCourseFilter(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="Todos">Todos los cursos</option>
              <option value="Curso Tailwind CSS">Curso Tailwind CSS</option>
              <option value="Curso React">Curso React</option>
              <option value="Curso Python">Curso Python</option>
            </select>
          </div>
        </div>

        {/* Table Content */}
        {filteredRegistrations.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-800">
              No se encontraron estudiantes
            </p>
            <p className="text-xs text-slate-500 max-w-sm">
              {searchTerm || selectedCourseFilter !== 'Todos'
                ? 'Prueba ajustando los filtros de búsqueda.'
                : 'Aún no hay inscripciones registradas. Utiliza el formulario de la tarjeta para registrar el primer estudiante.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4">Estudiante</th>
                  <th className="py-3 px-4">Contacto</th>
                  <th className="py-3 px-4">Curso & Precio</th>
                  <th className="py-3 px-4">Nivel & Objetivo</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs uppercase">
                          {reg.fullName.slice(0, 2)}
                        </div>
                        <span>{reg.fullName}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-800 font-medium">{reg.email}</div>
                      <div className="text-slate-400 text-[11px]">{reg.phone}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-slate-900">{reg.courseName}</span>
                      <span className="ml-1.5 px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 font-bold text-[11px] border border-sky-200">
                        {reg.coursePrice}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-medium mb-0.5">
                        {reg.experienceLevel}
                      </span>
                      {reg.goal && (
                        <p className="text-[11px] text-slate-500 line-clamp-1 italic max-w-xs">
                          "{reg.goal}"
                        </p>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{reg.registeredAt}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        {reg.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        id={`btn-del-reg-${reg.id}`}
                        onClick={() => onDeleteRegistration(reg.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Eliminar inscripción"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
