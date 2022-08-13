import { AppRoute } from "../common/interfaces/app-route";
import { Router } from "express";


export class UsersApi implements AppRoute {
    router: Router;

    constructor() {

    }

    setRoutes(): void {
        this.router.get("users", () => {

        })
    }

    getRouter(): Router {
        return this.router;
    }
}