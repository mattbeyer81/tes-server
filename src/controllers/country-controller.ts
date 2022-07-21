import { Request, Response, NextFunction } from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next } from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from "../types";
import { ICountryService } from "../services/country-service-interface";

@controller("/countries")
export class CountryController implements interfaces.Controller {

    private _countryService: ICountryService;
    public constructor(@inject(TYPES.CountryService) countryService: ICountryService,
    ) {
      this._countryService = countryService;
    }

    @httpGet("/")
    private async getCountries(@request() req: Request, @response() res: Response, @next() next: NextFunction) {
        try {
            const countries = await this._countryService.getCountries();
            res.json(countries);
        } catch(e) {
            console.log(e);
        }
    }

}