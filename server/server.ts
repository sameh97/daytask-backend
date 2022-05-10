import express from "express";
import * as cors from "cors";

export class DayTaskApp {
    private app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Methods",
                "DELETE, POST, GET, PUT, PATCH, OPTIONS"
            );
            res.header("Access-Control-Allow-Headers", "*");
            res.header("Access-Control-Expose-Headers", "*");
            next();
        });

        this.app.use(cors());
    }

    public async start(): Promise<void> {
        
    }
}