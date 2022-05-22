import {
  IsRollbackValidReq,
  IsRollbackValidRes,
  RollbackReq,
  RollbackRes,
} from '../interfaces/protoc/proto/rollbackService';
import { RollbackRepository } from './rollback.repository';

export class RollbackManager {
  private rollbackRepository: RollbackRepository;
  constructor() {
    this.rollbackRepository = new RollbackRepository();
  }

  async isRollbackValid(
    isRollbackValidReq: IsRollbackValidReq
  ): Promise<IsRollbackValidRes> {
    try {
      return await this.rollbackRepository.isRollbackValid(isRollbackValidReq);
    } catch (error) {
      throw error;
    }
  }

  async rollbackInAD(
    rollbackInADReq: RollbackReq
  ): Promise<RollbackRes> {
    try {
      return await this.rollbackRepository.rollbackInAD(rollbackInADReq);
    } catch (error) {
      throw error;
    }
  }

  async rollbackInKartoffel(
    rollbackInKartoffelReq: RollbackReq
  ): Promise<RollbackRes> {
    try {
      return await this.rollbackRepository.rollbackInKartoffel(
        rollbackInKartoffelReq
      );
    } catch (error) {
      throw error;
    }
  }
}
