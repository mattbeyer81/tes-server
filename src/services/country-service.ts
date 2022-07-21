import { injectable } from 'inversify';
import { ICountryService } from './country-service-interface';
import axios from 'axios';

@injectable()
export class CountryService implements ICountryService {

  public constructor(

  ) {
  }

  public async getCountries(): Promise<CountryData> {

    const countryData: CountryData = {};    
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name');
      countryData.countries = response.data;
    } catch(e)
    {
      console.log(GetCountriesErrorMessage, e);
      countryData.error = GetCountriesErrorMessage;
    }
    return countryData;
  }
}

export interface Country {
  name: {
    common: string;
    official: string;
  }
}

export interface CountryData {
  error?: string,
  countries?: Country[]
}

export const GetCountriesErrorMessage = "Failed to get restcountries";