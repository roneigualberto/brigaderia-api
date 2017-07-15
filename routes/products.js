module.exports = app => {

    const Products = app.models.products;

    app.get("/products", (req, res) => {

        Products.findAll({}, (products) => {
            res.json(products);
        });
    });
}




