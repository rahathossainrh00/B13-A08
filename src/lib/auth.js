import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let _client = null;

async function getDb() {
  if (!uri) return null;
  if (!_client) {
    _client = new MongoClient(uri);
    await _client.connect();
  }
  return _client.db();
}

const db = await getDb();

export const auth = betterAuth({
  database: db ? mongodbAdapter(db) : undefined,
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL || process.env.URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});
