import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Licenses from './pages/Licenses';
import Users from './pages/Users';
import Reports from './pages/Reports';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/licencias" element={<Licenses />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/reportes" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;