/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.json());

// user router
app.use(routes);

export default app;
