import { useState } from 'react';
import { UserPlus, Search, Filter } from 'lucide-react';
import type { User } from '../types';

export default function Users() {
  const [users] = useState<User[]>([
    {
      id: '1',
      nombre: 'Carlos Méndez',
      email: 'carlos@empresa.com',
      role: 'usuario'
    },
    {
      id: '2',
      nombre: 'Ana García',
      email: 'ana@empresa.com',
      role: 'soporte'
    },
    {
      id: '3',
      nombre: 'Roberto Díaz',
      email: 'roberto@empresa.com',
      role: 'admin'
    }
  ]);

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'soporte':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar usuarios..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <UserPlus className="w-4 h-4 mr-2" />
            Nuevo Usuario
          </button>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{user.nombre}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleBadgeClass(user.role)}`}>
                {user.role}
              </span>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                Editar
              </button>
              <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                Ver Licencias
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}