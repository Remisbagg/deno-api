// main.ts
import { Application } from "./deps.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Todo en orden YESSSSSSSSSSSSSSSSSS");
const port = Number(Deno.env.get("PORT")) || 8000;
await app.listen({ port });
