import express, { Request, Response } from "express";
import dotenv from "dotenv";
import basicAuth from "express-basic-auth";

dotenv.config();

const bloqueioDeSegurança = basicAuth({
  users: { [process.env.API_USERNAME || "admin"]: process.env.API_PASSWORD || "admin123" },
  challenge: true,
  unauthorizedResponse: "Access denied"
})

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.get("/secret", bloqueioDeSegurança, (req: Request, res: Response) => {
  res.send("This is a secret route!");
});

app.listen(3000, () => {
  console.log("Server redando na porta 3000");
});
