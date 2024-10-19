// pages/api/personas.js
export default function handler(req, res) {
    const personas = [
      { nombre: 'Juan', apellido: 'Pérez' },
      { nombre: 'María', apellido: 'Gómez' },
    ];
  
    res.status(200).json(personas);
  }
  