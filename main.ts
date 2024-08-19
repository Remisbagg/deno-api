// app.ts
import { Application } from "./deps.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Todo en orden");
await app.listen({ port: 8000 });
