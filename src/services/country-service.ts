import { injectable } from 'inversify';
import { ICountryService } from './country-service-interface';

@injectable()
export class CountryService implements ICountryService {

  public constructor(

  ) {
  }

  public async getCountries(): Promise<string[]> {
    return Promise.resolve(["some-other-country"]);
  }
}
