import { useState } from 'react';

export default function BuscaDepartamento() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const buscarDepartamento = () => {

    if (!id) {

      setError('Pon el id ID del depa');
      setNombre('');
      return;
    }
  
    //Esto es solo para probar (todavía no lo conectamos al backend)
    const departamentos = {
      '1': 'Matemáticas',
      '2': 'Ciencias Computacionales',
      '3': 'Física',
    };

    const resultado = departamentos[id];

    if (resultado) {
      setNombre(resultado);
      setError('');
    } else {
      setNombre('');
      setError('Departamento no encontrado');
    }
  };

  

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="ID del depa"
      />
      <button onClick={buscarDepartamento}>Buscar</button>

      {nombre && <p>Nombre: {nombre}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
