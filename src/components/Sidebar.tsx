import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Key, 
  Users, 
  FileText, 
  LogOut 
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/licencias', icon: Key, label: 'Licencias' },
  { path: '/usuarios', icon: Users, label: 'Usuarios', adminOnly: true },
  { path: '/reportes', icon: FileText, label: 'Reportes' },
];

export default function Sidebar() {
  const location = useLocation();
  const { user, logout } = useAuthStore();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-1">
          {menuItems.map((item) => {
            if (item.adminOnly && user?.role !== 'admin') return null;
            
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <button
          onClick={logout}
          className="mt-auto flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}