import { SpikeRepository } from "./spike.repository";

export class SpikeManager {
  private spikeRepository: SpikeRepository;
  constructor() {
    this.spikeRepository = new SpikeRepository();
  }
  async getSpikeToken(): Promise<string> {
    try {
      return await this.spikeRepository.getSpikeToken();
    } catch (error) {
      throw error;
    }
  }
}
