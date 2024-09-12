import { Client } from "./deps.ts";

export const client = await new Client().connect({
  hostname: "junction.proxy.rlwy.net",
  port: 10082,
  username: "root",
  db: "Usuarios",
  password: "FtpUtKpYAbMLBaTOpOICMYFKHVqeCHlS",
});