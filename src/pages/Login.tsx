import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import { Key } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [isRecovering, setIsRecovering] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      // Aquí iría la llamada real al backend
      const mockResponse = {
        user: {
          id: '1',
          nombre: 'Admin Usuario',
          email: data.email,
          role: 'admin',
        },
        token: 'mock-token',
      };

      setAuth(mockResponse.user, mockResponse.token);
      navigate('/');
    } catch (error) {
      toast.error('Error al iniciar sesión');
    }
  };

  const handleRecovery = async (email: string) => {
    // Aquí iría la lógica real de recuperación
    toast.success('Si el email existe, recibirás instrucciones para recuperar tu contraseña');
    setIsRecovering(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Key className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sistema de Gestión de Licencias
          </h2>
        </div>

        {!isRecovering ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  {...register('password')}
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Iniciar Sesión
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsRecovering(true)}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 space-y-6">
            <p className="text-sm text-gray-600">
              Ingresa tu correo electrónico para recuperar tu contraseña
            </p>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setIsRecovering(false)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleRecovery('user@example.com')}
                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Recuperar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}