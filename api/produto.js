module.exports = app => {

    const Produto = app.db.models.Produto;

    let api = {};


    api.findAll = (req, res) => {
        Produto.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    };

    api.findById = (req, res) => {
        let id = req.params.id;
        console.log('OK');
        Produto
            .findOne({
                where: {
                    id: id
                }
            })
            .then(result => {
                if (result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(error => {
                res.status(412)
                    .json({ msg: error.message });
            });
    };

    api.save = (req, res) => {

    };

    api.update = (req, res) => {

    };

    api.delete = (req, res) => {

    };


    return api;
}




