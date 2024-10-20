import connectToDatabase from '../../../lib/mongodb.js';
import User from '../../../models/User.js';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).end(); // Solo permitir POST
  }

  const { username, password } = req.body;

  try {
    await connectToDatabase();
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales invalidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales invalidas' });
    }

    res.status(200).json({ message: 'Acceso exitoso' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
}
