import { Request, Response, NextFunction } from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next } from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from "../types";
import { IUniversityService } from "../services/university-service-interface";

@controller("/universities")
export class UniversityController implements interfaces.Controller {

    private _universityService: IUniversityService;
    public constructor(@inject(TYPES.CountryService) universityService: IUniversityService,
    ) {
      this._universityService = universityService;
    }

    @httpGet("/")
    private async getUniversities(@request() req: Request, @response() res: Response, @next() next: NextFunction) {
        try {
            const universities = await this._universityService.getUniversities();
            res.json(universities);
        } catch(e) {
            console.log(e);
        }
    }

}