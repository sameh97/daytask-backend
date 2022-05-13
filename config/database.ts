import { injectable } from "inversify";
import { Sequelize } from "sequelize-typescript";
import { Transaction } from "sequelize/types";

@injectable()
export class AppDBConnection {
    private db: Sequelize;

    public async connect(): Promise<void> {
        this.db = new Sequelize({
            database: process.env.PGSQL_DB,
            dialect: 'postgres',
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),

        });

        this.db.addModels([])

        await this.db.authenticate();
        await this.db.sync();
    }

    public async createTransaction(): Promise<Transaction> {
        return await this.db.transaction();
    }

}