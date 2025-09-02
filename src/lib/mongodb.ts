import { MongoClient, Db } from 'mongodb';

// Only validate MONGODB_URI when actually connecting, not during build
const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

function initializeMongoClient() {
  if (!uri) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (!clientPromise) {
    initializeMongoClient();
  }
  const client = await clientPromise!;
  const db = client.db('poligap_assets'); // Database name for assets
  return { client, db };
}

export default clientPromise;
