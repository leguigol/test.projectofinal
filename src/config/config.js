import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { 
  NODE_ENV, 
  API_PREFIX,
  PORT, 
  PERSISTENCE, 
  DB_HOST, 
  DB_NAME, 
  DB_PORT,
  MONGO_URL,
  API_VERSION, 
} =process.env;