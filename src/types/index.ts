export type Role = 'admin' | 'soporte' | 'usuario';

export interface User {
  id: string;
  nombre: string;
  email: string;
  role: Role;
}

export interface License {
  id: string;
  tipo: string;
  producto: string;
  fechaAdquisicion: string;
  fechaVencimiento?: string;
  esVitalicia: boolean;
  estado: 'libre' | 'en_uso';
  asignadoA?: {
    usuario: string;
    equipo: string;
  };
}