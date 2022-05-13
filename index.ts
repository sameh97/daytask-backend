import { DayTaskApp } from "./server/server";
import container from "./inversify.config";
import { AppDBConnection } from "./config/database";

const app = new DayTaskApp(container.get(AppDBConnection));


app.start();