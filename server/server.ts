import express = require("express");
import * as cors from "cors";
import { inject } from "inversify";
import { AppDBConnection } from "../config/database";
require("dotenv").config();

export class DayTaskApp {
    private app: express.Express;

    constructor(@inject(AppDBConnection) private appDBConnection: AppDBConnection) {
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
        this.initDB();
        this.listenToRequests();
    }

    public async initDB(): Promise<void> {
        this.appDBConnection.connect().then((r) => {
            console.log(`success: ${JSON.stringify(r)}`)
        })
    }


    private listenToRequests(): void {
        const http = require("http");
        const PORT = process.env.APP_PORT || 3000;

        const server = http.createServer(this.app);

        server.listen(PORT, () => {
            console.log(`Server Started on port ${PORT}`)
        })
    }
}