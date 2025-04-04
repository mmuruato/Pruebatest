import { useState } from 'react';
import '../styles/BuscaDepartamento.css';

export default function BuscaDepartamento() {
  const [id, setId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const departamentos = {
    '1': 'Matemáticas',
    '2': 'Ciencias Computacionales',
    '3': 'Física',
  };

  const buscar = () => {
    if (!id) return setMensaje('El id tiene que ser validoooo');

    const nombre = departamentos[id];
    setMensaje(nombre ? `Departamento: ${nombre}` : 'Departamento no encontrado');
  };

  return (
    <section className="buscar">
      <h2>Buscar Departamento</h2>
      <input
        className="buscar-input"
        type="text"
        placeholder="Porfa pon el ID del departamento"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="buscar-button" onClick={buscar}>Buscar</button>
      {mensaje && <p className="buscar-mensaje">{mensaje}</p>}
    </section>
  );
}
