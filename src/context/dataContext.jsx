import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el contexto
export const DataContext = createContext();

// Proveedor del contexto
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    products: [],
    clients: [],
  });

  useEffect(() => {
    // Hacer la petición para cargar productos y clientes
    const fetchData = async () => {
      try {
        const [productsResponse, clientsResponse] = await Promise.all([
          axios.get('/api/productsFind'),  // Tu endpoint para productos
          axios.get('/api/usersFind'),   // Tu endpoint para clientes
        ]);

        setData({
          products: productsResponse.data,
          clients: clientsResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
