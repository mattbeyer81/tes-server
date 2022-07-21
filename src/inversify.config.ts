import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { CountryService } from "./services/country-service";
import { UniversityService } from "./services/university-service";

const container = new Container();
container.bind<CountryService>(TYPES.CountryService).to(CountryService);
container.bind<UniversityService>(TYPES.UniversityService).to(UniversityService);

export { container };