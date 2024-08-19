// config.ts
import { Client } from "./deps.ts";

export const client = await new Client().connect({
  hostname: "mysql.railway.internal",
  username: "root",  
  db: "baseDeno",
  password: "jiHEYVVCrQUvuYJEEjgoTqWgIEdgSDik", 
});
