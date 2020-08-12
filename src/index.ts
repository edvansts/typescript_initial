import express from "express";
import { helloWorld } from "./routes";
const app = express();

// function helloWorld(request: Request, response: Response) {
//     return response.json({ message: "Hello Ola"});
// }
app.get("/", helloWorld);

app.listen(3333);
