import { IUser } from "../repositories/pong-repository";

export interface IPongService {
  get(id: string) : Promise<IUser>;
}
