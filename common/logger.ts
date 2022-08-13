import { injectable } from "inversify";
import * as winston from "winston";
import { AppUtils } from "./app-utils";

@injectable()
export class Logger {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            format: winston.format.json(),
            transports: [new winston.transports.Console()]
        })
    }

    public info(msg: string): void {
        this.logger.info(msg);
    }

    public error(msg: string, err?: Error): void {
        const fullError = err ? `\n${AppUtils.getFullException(err)}` : "";
        this.logger.error(`${msg}${fullError}`);
    }


}