import { SearchSamAccountNameReq, SearchSamAccountNameRes } from "../interfaces/protoc/proto/kartoffelService";
import { LdapUtils } from "../utils/ldap.utils";
import { LdapRepository } from "./ldap.repository";

export class LdapManager {
  private ldapRepository: LdapRepository;
  constructor(ldapUtils: LdapUtils) {
    this.ldapRepository = new LdapRepository(ldapUtils);
  }

  async searchSamAccountName(searchSamAccountNameReq: SearchSamAccountNameReq): Promise<SearchSamAccountNameRes> {
    try {
      return await this.ldapRepository.searchSamAccountName(searchSamAccountNameReq);
    } catch (error) {
      throw error;
    }
  }
}