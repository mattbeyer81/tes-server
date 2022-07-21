import { injectable } from 'inversify';
import { IUniversityService } from './university-service-interface';

@injectable()
export class UniversityService implements IUniversityService {

  public constructor(

  ) {
  }

  public async getUniversities(): Promise<string[]> {
    return Promise.resolve(["some-other-university"]);
  }
}
