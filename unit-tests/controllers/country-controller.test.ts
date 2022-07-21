import "reflect-metadata";

import { ICountryService } from "../../src/services/country-service-interface";
import { mock } from 'jest-mock-extended';
import * as request from "supertest";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import "../../src/controllers/country-controller";
import { TYPES } from "../../src/types";
import { CountryData } from "../../src/services/country-service";

it('get countries works', async() => {

    const mockCountryService = mock<ICountryService>();

    const expectedCountryData: CountryData = {
        countries: [{
            name: {
                official: "some-office-name",
                common: "some-common-name"
            }
        }]
    }
    mockCountryService.getCountries.mockResolvedValue(expectedCountryData);

    const container = new Container();
    container.bind<ICountryService>(TYPES.CountryService).toConstantValue(mockCountryService);  
    const server = new InversifyExpressServer(container);
    const response = await request(server.build()).get("/countries");
    const actualCountryData: CountryData = response.body;

    expect(actualCountryData.countries[0].name.common).toBe(expectedCountryData.countries[0].name.common);




}, 1000000)