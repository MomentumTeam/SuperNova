import { GetSpikeTokenRequest } from '../interfaces/protoc/proto/spikeService';
import { SpikeRepository } from './spike.repository';

export class SpikeManager {
  private spikeRepository: SpikeRepository;
  constructor() {
    this.spikeRepository = new SpikeRepository();
  }
  async getSpikeToken(
    getSpikeTokenRequest: GetSpikeTokenRequest
  ): Promise<string> {
    try {
      return await this.spikeRepository.getSpikeToken(getSpikeTokenRequest);
    } catch (error) {
      throw error;
    }
  }
}
