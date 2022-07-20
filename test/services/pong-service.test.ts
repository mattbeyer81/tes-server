import 'reflect-metadata';

import { PongService } from "../src/services/pong-service";
import { mock } from 'jest-mock-extended';
import { Repository } from "../src/interfaces/repository";
import { IUser } from "../src/repositories/pong-repository";

it('pong works', async () => {

    const repository = mock<Repository>();

    const user: IUser = {
        name: "bod",
        email:"some-email@example.com" 
    };

    repository.findById.mockResolvedValue(user);
    const pongService = new PongService(repository);

    const result = await pongService.get("foo-bar");
    expect(repository.findById).toBeCalledWith("foo-bar");
    expect(result.email).toBe(user.email);
    expect(result.name).toBe(user.name);


})