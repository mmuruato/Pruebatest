import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './Paginas/SignIn';
import BuscaDepartamento from './Paginas/BuscaDepartamento';
import DashboardLayout from './Paginas/DashboardLayout';
import Dashboard from './Paginas/Dashboard';
import SubirArchivo from './Paginas/SubirArchivo';
import NuevoPerfil from './Paginas/NuevoPerfil';
import Encuestas from './Paginas/Encuestas';
import Comentarios from './Paginas/Comentarios';



export default function App() {
  const [logIn, setLogIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="subir" element={<SubirArchivo />} />
          <Route path="perfil" element={<NuevoPerfil />} />
          <Route path="encuestas" element={<Encuestas />} />
          <Route path="comentarios" element={<Comentarios />} />
          <Route path="departamento" element={<BuscaDepartamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


