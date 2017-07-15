module.exports = app => {
    let products = [
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
    ];
    app.get("/products", (req, res) => res.json(products));
}




