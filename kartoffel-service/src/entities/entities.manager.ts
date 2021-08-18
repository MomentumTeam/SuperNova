import {
  GetPictureByEntityIdRequest,
  Image,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { EntitiesRepository } from './entities.repository';

export class EntitiesManager {
  private entitiesRepository: EntitiesRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.entitiesRepository = new EntitiesRepository(
      kartoffelUtils,
      kartoffelFaker
    );
  }

  async getPictureByEntityId(
    getPictureByEntityIdRequest: GetPictureByEntityIdRequest
  ): Promise<Image> {
    try {
      return await this.entitiesRepository.getPictureByEntityId(
        getPictureByEntityIdRequest
      );
    } catch (error) {
      throw error;
    }
  }
}
