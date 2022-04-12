import { GetOptionsByEntityIdReq, UpdateUserOptionsReq, Options, FavoriteCommanderReq } from '../interfaces/protoc/proto/optionsService';
import { OptionsRepository } from './options.repository';

export class OptionsManager {
  private optionsRepository: OptionsRepository;
  constructor() {
    this.optionsRepository = new OptionsRepository();
  }

  async getOptionsByEntityId(
    getOptionsByEntityIdReq: GetOptionsByEntityIdReq
  ): Promise<Options> {
    try {
      return await this.optionsRepository.getOptionsByEntityId(getOptionsByEntityIdReq);
    } catch (error) {
      throw error;
    }
  }

  async updateUserOptions(
    updateUserOptionsReq: UpdateUserOptionsReq
  ): Promise<Options> {
    try {
      return await this.optionsRepository.updateUserOptions(updateUserOptionsReq);
    } catch (error) {
      throw error;
    }
  }

  async addFavoriteCommander(
    addFavoriteCommanderReq: FavoriteCommanderReq
  ): Promise<Options> {
    try { 
      return await this.optionsRepository.addFavoriteCommander(addFavoriteCommanderReq);
    } catch (error) {
      throw error;
    }
  }

  async removeFavoriteCommander(
    removeFavoriteCommanderReq: FavoriteCommanderReq
  ): Promise<Options> {
    try {
      return await this.optionsRepository.removeFavoriteCommander(removeFavoriteCommanderReq);
    } catch (error) {
      throw error;
    }
  }
}
