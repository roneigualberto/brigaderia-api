import express from "express";
import consign from "consign";

const PORT = 3000;
const app = express();


app.set("json spaces", 4);

consign()
    .include("config/datasource.js")
    .then("db.js")
    .then("config/middlewares.js")
    .then("routes")
    .then("config/boot.js")
    .into(app);



