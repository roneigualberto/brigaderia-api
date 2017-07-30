module.exports = app => {

    const api = app.api.produto;
    const baseUrl = "/produtos";

    let deleteId = (req, res, next) => {
            delete req.body.id;
            next();
    };

    app.route(`${baseUrl}`)
        .all(deleteId)
        .get(api.findAll)
        .post(api.save);

    app.route(`${baseUrl}/:id`)
        .all(deleteId)
        .get(api.findById)
        .put(api.update)
        .delete(api.delete);
}




