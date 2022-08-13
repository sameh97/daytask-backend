import { inject, injectable } from "inversify";
import { Transaction } from "sequelize/types";
import { AppUtils } from "../common/app-utils";
import { Logger } from "../common/logger";
import { AlreadyExistError } from "../exeptions/already-exist-error";
import { User } from "../models/user";

@injectable()
export class UsersRepository {

    constructor(@inject(Logger) private logger: Logger) {
    }

    public async save(user: User, transaction?: Transaction): Promise<User> {
        const userInDB = await User.findOne({
            where: { email: user.email },
            transaction: transaction
        })

        if (AppUtils.hasValue(userInDB)) {
            throw new AlreadyExistError(`User with email: ${user.email} already exist`);
        }

        const createdUser = await User.create(user, { transaction: transaction });

        return createdUser;
    }


}