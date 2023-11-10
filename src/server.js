import express from "express";
import playerRoutes from "./routes/playerRoutes.js"

const api = new express();
const port=20029;

api.use("/players", playerRoutes)
api.listen(port, () => {
    console.log(`El api ha sido iniciada y se encuentra en el puerto:${port}`);
})