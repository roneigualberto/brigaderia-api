import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;



module.exports = (app) => {
    if (!db) {
        const datasource = app.config.datasource;
        const sequelize = new Sequelize(
            datasource.database,
            datasource.username,
            datasource.password,
            datasource.params
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        }

        const dir = path.join(__dirname,"models");

        fs.readdirSync(dir).forEach(file => {
            const modelPath = path.join(dir,file);
            const model = sequelize.import(modelPath);
            db.models[model.name] = model;

            console.log('ass',model)
        })

        Object.keys(db.models).forEach(key => {
            console.log('model',db.models[key]);
            if (db.models[key].associate) {
                db.models[key].associate(db.models);
            }
            
        })
    }

    return db;
};