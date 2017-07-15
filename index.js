import express from "express";

const PORT = 3000;
const app = express();


app.get("/", (req,res) => {
    res.json({name: "Brigaderia API 1.0.0"})
})

app.get("/products",(req,res) => {

    res.json([
        {
            name: "Brigadeiro",
            description: "Brigadeiro",
            price: 1.50
        },
        {
            name: "Trufa",
            description: "Trufa",
            price: 2.50
        },
        {
            name: "Empada",
            description: "Empada",
            price: 3.00
        },
        {
            name: "Bolo de Pote",
            description: "Bolo de Pote",
            price: 4.00
        }
    ])
})

app.listen(PORT, () => console.log(`Brigaderia API - porta ${PORT}`))
