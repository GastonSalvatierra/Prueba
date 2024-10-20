import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor define la variable de entorno MONGODB_URI');
}

let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
  
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = await mongoose.connect(MONGODB_URI);

  cachedClient = client;
  cachedDb = client.connection.db;
  return { db: cachedDb };
}

export default connectToDatabase;
