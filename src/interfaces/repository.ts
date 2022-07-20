import { IUser } from "../repositories/pong-repository";

export interface Repository {
    create(doc: IUser) : Promise<IUser>;
    findById(id: string) : Promise<IUser>;
}