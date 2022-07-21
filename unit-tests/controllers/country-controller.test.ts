import "reflect-metadata";

import { ICountryService } from "../../src/services/country-service-interface";
import { mock } from 'jest-mock-extended';
import * as request from "supertest";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import "../../src/controllers/country-controller";
import { TYPES } from "../../src/types";

it('get countries works', async() => {

    const mockCountryService = mock<ICountryService>();

    mockCountryService.getCountries.mockResolvedValue(["some country"]);

    const container = new Container();
    container.bind<ICountryService>(TYPES.CountryService).toConstantValue(mockCountryService);  
    const server = new InversifyExpressServer(container);
    const response = await request(server.build()).get("/countries");
    const countries: string[] = response.body;

    expect(countries[0]).toBe("some country");




}, 1000000)