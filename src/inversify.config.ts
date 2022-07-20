import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { PongService } from "./services/pong-service";
import { PongRepository } from "./repositories/pong-repository";

let container = new Container();
container.bind<PongService>(TYPES.PongService).to(PongService);
container.bind<PongRepository>(TYPES.PongRepository).to(PongRepository);

export { container };