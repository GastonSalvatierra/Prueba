'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const fetchPersonas = async () => {
      const response = await fetch('/api/personas');
      const data = await response.json();
      setPersonas(data);
    };

    fetchPersonas();
  }, []);

  return (
    <div>
      <h1>Listado de Personas</h1>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} {persona.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
}

