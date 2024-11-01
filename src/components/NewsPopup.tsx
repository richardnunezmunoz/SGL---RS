import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [news, setNews] = useState({
    title: '',
    content: '',
    tip: ''
  });

  useEffect(() => {
    // Aquí se conectaría con una API de noticias real
    setNews({
      title: 'Novedades Tecnológicas',
      content: 'Microsoft lanza nueva actualización de seguridad para Windows 11',
      tip: 'Recuerda mantener tus sistemas operativos actualizados para mayor seguridad'
    });
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">{news.content}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">Tip del día:</p>
            <p className="text-blue-600">{news.tip}</p>
          </div>
        </div>
        
        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}