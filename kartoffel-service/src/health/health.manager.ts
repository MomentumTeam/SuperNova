import { GetIsHealthyReq, GetIsHealthyRes } from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { HealthRepository } from './health.repository';

export class HealthManager {
  private healthRepository: HealthRepository;
  constructor(kartoffelUtils: KartoffelUtils) {
    this.healthRepository = new HealthRepository(kartoffelUtils);
  }

  async getIsHealthy(getIsHealthyReq: GetIsHealthyReq): Promise<GetIsHealthyRes> {
    try {
      return await this.healthRepository.GetIsHealthy();
    } catch (error) {
      throw error;
    }
  }
}