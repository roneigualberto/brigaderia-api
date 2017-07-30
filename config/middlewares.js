import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.use(bodyParser.json());

    app.use(helmet());
    app.use(cors({
        origin: ["*"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
    app.use(compression());

    app.use((req, res, next) => {
        delete req.body.id;
        next();
    })
}