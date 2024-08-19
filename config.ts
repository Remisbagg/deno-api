// config.ts
import { Client } from "./deps.ts";

export const client = await new Client().connect({
  hostname: "autorack.proxy.rlwy.net",
  port: 18329, // Usa el puerto público proporcionado por Railway
  username: "root",
  db: "railway",
  password: "jiHEYVVCrQUvuYJEEjgoTqWgIEdgSDik",
});