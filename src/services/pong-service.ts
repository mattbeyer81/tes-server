import { inject, injectable } from 'inversify';
import { Repository } from '../interfaces/repository';
import { IUser } from '../repositories/pong-repository';
import { TYPES } from '../types';
import { IPongService } from './pong-service-interface';

@injectable()
export class PongService implements IPongService {

  private _pongRepository: Repository;

  public constructor(
    @inject(TYPES.PongRepository) pongRepository: Repository,
  ) {
    this._pongRepository = pongRepository;
  }


  public async get(id: string): Promise<IUser> {
    return await this._pongRepository.findById(id);
  }

  public async create(doc: IUser): Promise<IUser> {
    return await this._pongRepository.create(doc);
  }
}
