import { Country, CountryData } from "./country-service";

export interface ICountryService {
  getCountries() : Promise<CountryData>;
}
