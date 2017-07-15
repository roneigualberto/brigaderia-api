module.exports = app => {

    app.get("/", (req, res) => {
        res.json({ name: "Brigaderia API 1.0.0" })
    })

}


