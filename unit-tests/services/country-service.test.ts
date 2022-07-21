import 'reflect-metadata';

import { Country, CountryService, CountryData, GetCountriesErrorMessage } from "../../src/services/country-service";
import axios, { AxiosResponse } from "axios";


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('get countries works', async () => {

    const countryService = new CountryService();

    mockedAxios.get.mockResolvedValueOnce(
        {
            data: [
                {
                    name: {
                        official: "Greenland"
                    }
                }
            ]
        }
    );

    const result: CountryData = await countryService.getCountries();
    expect(result.countries[0].name.official).toBe("Greenland");

})

it('fail to get countries error is caught', async () => {

    const countryService = new CountryService();
    
    var response: AxiosResponse;

    mockedAxios.get.mockResolvedValueOnce(response);
    const result: CountryData = await countryService.getCountries();
    expect(result.error).toBe(GetCountriesErrorMessage);

})

