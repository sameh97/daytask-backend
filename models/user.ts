import { AllowNull, AutoIncrement, Column, DataType, IsEmail, Length, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    public firstName: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public lastName: string;

    @Unique
    @AllowNull(false)
    @IsEmail
    @Column(DataType.STRING)
    public email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public phone: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    public birthDay: Date;

    @AllowNull(false)
    @Column(DataType.STRING)
    public address: string;

    @AllowNull(true)
    @Column(DataType.STRING(3000))
    public imageURL?: string;

    @AllowNull(false)
    @Length({ min: 3, max: 512 })
    @Column(DataType.STRING)
    public password: string;
}