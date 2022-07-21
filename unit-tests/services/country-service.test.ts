import 'reflect-metadata';

import { CountryService } from "../../src/services/country-service";

it('get countries works', async () => {

    const countryService = new CountryService();
    const result = await countryService.getCountries();
    expect(result[0]).toBe("some-other-country");

})