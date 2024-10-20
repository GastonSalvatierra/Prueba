/* 'use client'
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
 */


'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        username,
        password
      });

      if (response.status === 200) {
        // Redirigir después de un login exitoso
        window.location.replace('/deposito');
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estado fuera del rango de 2xx
        setError(error.response.data.message || 'Error en la solicitud');
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        setError('No se recibió respuesta del servidor');
      } else {
        // Algo ocurrió al configurar la solicitud
        setError('Error al realizar la solicitud');
      }
    }
  };

  return (
    <div className="col-6 col-md-4 col-xl-2
     container text-white pb-5 bg-dark border border-dark rounded">
      <div className="row justify-content-center">
        <div className="col-12 col-md-12">
          <h2 className="text-center mt-5">PREVIVAX</h2>
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-danger text-center mb-3">{error}</div>}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-light w-60">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
