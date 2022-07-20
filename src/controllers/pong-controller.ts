import { Request, Response, NextFunction } from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next } from "inversify-express-utils";
import { inject } from "inversify";
import { PongService } from "../services/pong-service";
import { TYPES } from "../types";
import { IUser } from "../repositories/pong-repository";

@controller("/pong")
export class PongController implements interfaces.Controller {

    constructor( @inject(TYPES.PongService) private pongService: PongService ) {}

    @httpGet("/:id")
    private async index(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<IUser> {
        try {
            const user = await this.pongService.get(req.params.id);
            return user;
        } catch(e) {
            console.log(e);
        }
    }

}