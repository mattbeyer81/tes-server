import "reflect-metadata";

import { IPongService } from "../../src/services/pong-service-interface";
import { mock } from 'jest-mock-extended';
import * as request from "supertest";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import "../../src/controllers/pong-controller";
import { IUser } from "../../src/repositories/pong-repository";
import { TYPES } from "../../src/types";

it('get pong works', async() => {

    const mockPongService = mock<IPongService>();

    const user: IUser = {
        name: "y2yyy",
        email: "f"
    };

    mockPongService.get.mockResolvedValue(user);

    const container = new Container();
    container.bind<IPongService>(TYPES.PongService).toConstantValue(mockPongService);  
    const server = new InversifyExpressServer(container);

    const response = await request(server.build()).get("/pong/some-id");

    const actualUser: IUser = response.body;

    expect(actualUser.email).toBe(user.email);




}, 1000000)