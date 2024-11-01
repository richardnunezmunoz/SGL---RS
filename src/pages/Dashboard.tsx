import { useState } from 'react';
import { Activity, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function Dashboard() {
  const [stats] = useState({
    totalLicenses: 156,
    activeLicenses: 89,
    expiringLicenses: 12,
    availableLicenses: 55
  });

  const [recentActivity] = useState([
    { id: 1, action: 'Licencia asignada', user: 'Carlos Méndez', product: 'Adobe Creative Cloud', time: '2 minutos atrás' },
    { id: 2, action: 'Licencia liberada', user: 'Ana García', product: 'Visual Studio Enterprise', time: '15 minutos atrás' },
    { id: 3, action: 'Nueva licencia añadida', user: 'Admin', product: 'Windows Server 2022', time: '1 hora atrás' },
  ]);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Total Licencias</h3>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">{stats.totalLicenses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Licencias Activas</h3>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">{stats.activeLicenses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Por Vencer</h3>
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">{stats.expiringLicenses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Disponibles</h3>
            <AlertCircle className="w-5 h-5 text-purple-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">{stats.availableLicenses}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Actividad Reciente</h2>
        </div>
        <div className="border-t border-gray-100">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">
                  {activity.user} • {activity.product}
                </p>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}