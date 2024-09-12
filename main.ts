// main.ts
import { Application } from "./deps.ts";
import router from "./routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts"; // Importar el middleware de CORS

const app = new Application();

// Middleware para habilitar CORS
app.use(oakCors({
  origin: "http://localhost:4200" // Permite solicitudes solo desde tu frontend
}));

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Servidor corriendo en http://localhost:8000");
const port = Number(Deno.env.get("PORT")) || 8000;
await app.listen({ port });