import { useState } from 'react';
import { Plus, Search, Filter, Download } from 'lucide-react';
import type { License } from '../types';

export default function Licenses() {
  const [licenses] = useState<License[]>([
    {
      id: '1',
      tipo: 'Software',
      producto: 'Adobe Creative Cloud',
      fechaAdquisicion: '2024-01-15',
      fechaVencimiento: '2025-01-15',
      esVitalicia: false,
      estado: 'en_uso',
      asignadoA: {
        usuario: 'Carlos Méndez',
        equipo: 'LAP-001'
      }
    },
    {
      id: '2',
      tipo: 'Sistema Operativo',
      producto: 'Windows 11 Pro',
      fechaAdquisicion: '2023-12-01',
      esVitalicia: true,
      estado: 'libre'
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar licencias..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Licencia
          </button>
        </div>
      </div>

      {/* Licenses Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Producto
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asignado a
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vencimiento
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {licenses.map((license) => (
              <tr key={license.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{license.producto}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{license.tipo}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    license.estado === 'libre' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {license.estado === 'libre' ? 'Libre' : 'En uso'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {license.asignadoA ? (
                    <div>
                      <div>{license.asignadoA.usuario}</div>
                      <div className="text-xs text-gray-400">{license.asignadoA.equipo}</div>
                    </div>
                  ) : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {license.esVitalicia ? (
                    <span className="text-green-600 font-medium">Vitalicia</span>
                  ) : license.fechaVencimiento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}