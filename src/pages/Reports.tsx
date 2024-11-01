import { useState } from 'react';
import { BarChart3, PieChart, Download, Calendar } from 'lucide-react';

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('licenses');
  
  const reports = [
    {
      id: 'licenses',
      name: 'Uso de Licencias',
      description: 'Análisis detallado del uso y distribución de licencias',
      icon: PieChart
    },
    {
      id: 'activity',
      name: 'Actividad de Usuarios',
      description: 'Registro de actividades y cambios en el sistema',
      icon: BarChart3
    }
  ];

  return (
    <div className="space-y-6">
      {/* Report Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-6 rounded-xl border transition-all ${
              selectedReport === report.id
                ? 'border-blue-200 bg-blue-50 ring-2 ring-blue-500 ring-opacity-50'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                selectedReport === report.id ? 'bg-blue-500' : 'bg-gray-100'
              }`}>
                <report.icon className={`w-6 h-6 ${
                  selectedReport === report.id ? 'text-white' : 'text-gray-500'
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-900">{report.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{report.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Report Configuration */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Configuración del Reporte
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Generar Reporte
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Rango de Fechas
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg appearance-none bg-white">
                <option>Último mes</option>
                <option>Últimos 3 meses</option>
                <option>Último año</option>
                <option>Personalizado</option>
              </select>
            </div>
          </div>

          {selectedReport === 'licenses' && (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de Licencia
                </label>
                <select className="pl-4 pr-4 py-2 w-full border border-gray-300 rounded-lg">
                  <option>Todas</option>
                  <option>Software</option>
                  <option>Sistema Operativo</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <select className="pl-4 pr-4 py-2 w-full border border-gray-300 rounded-lg">
                  <option>Todos</option>
                  <option>En uso</option>
                  <option>Libres</option>
                  <option>Por vencer</option>
                </select>
              </div>
            </>
          )}

          {selectedReport === 'activity' && (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Usuario
                </label>
                <select className="pl-4 pr-4 py-2 w-full border border-gray-300 rounded-lg">
                  <option>Todos</option>
                  <option>Administradores</option>
                  <option>Soporte</option>
                  <option>Usuarios</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de Actividad
                </label>
                <select className="pl-4 pr-4 py-2 w-full border border-gray-300 rounded-lg">
                  <option>Todas</option>
                  <option>Asignación</option>
                  <option>Liberación</option>
                  <option>Modificación</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Preview Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
          <p className="text-gray-500">Vista previa del reporte seleccionado</p>
        </div>
      </div>
    </div>
  );
}