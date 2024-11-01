import { Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Sidebar from './Sidebar';
import NewsPopup from './NewsPopup';

export default function Layout() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">
              Bienvenido, {user?.nombre}
            </h1>
          </header>
          <NewsPopup />
          <Outlet />
        </div>
      </main>
    </div>
  );
}