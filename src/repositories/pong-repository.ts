import { injectable } from "inversify";
import { Schema, model } from "mongoose";
import { Repository } from "../interfaces/repository";

export interface IUser {
    name: string;
    email: string;
    avatar?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});

const User = model<IUser>('User', userSchema);

@injectable()
export class PongRepository implements Repository {
    public async create(doc: IUser) {
        const user = new User(doc);
        const json = (await user.save()).toJSON();
        return json;
    }
    public async findById(id: string) {
        const user = await User.findById(id);
        const json = user.toJSON();
        return json;
    }
    
    public async deleteById(id: string) {
        await User.findByIdAndDelete(id);
    }    
}