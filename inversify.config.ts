import "reflect-metadata";
import { Container } from "inversify";
import { AppDBConnection } from "./config/database";
import { Logger } from "./common/logger";
import { UsersRepository } from "./repositories/users-repository";


const container = new Container({ defaultScope: "Singleton" });

container.bind<AppDBConnection>(AppDBConnection).toSelf();
container.bind<Logger>(Logger).toSelf();
container.bind<UsersRepository>(UsersRepository).toSelf();


export default container;