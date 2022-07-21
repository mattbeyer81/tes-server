import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { CountryService } from "./services/country-service";

let container = new Container();
container.bind<CountryService>(TYPES.CountryService).to(CountryService);

export { container };