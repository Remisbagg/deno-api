// config.ts
import { Client } from "./deps.ts";

export const client = await new Client().connect({
  hostname: "autorack.proxy.rlwy.net",
  username: "root",  
  db: "railway",
  password: "jiHEYVVCrQUvuYJEEjgoTqWgIEdgSDik", 
});
