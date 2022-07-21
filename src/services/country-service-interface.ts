export interface ICountryService {
  getCountries() : Promise<string[]>;
}
