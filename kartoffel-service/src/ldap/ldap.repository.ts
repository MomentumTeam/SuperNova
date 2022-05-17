import { SearchSamAccountNameReq, SearchSamAccountNameRes } from "../interfaces/protoc/proto/kartoffelService";
import { cleanUnderscoreFields } from "../utils/json.utils";
import { LdapUtils } from "../utils/ldap.utils";

export class LdapRepository {
  private ldapUtils: LdapUtils;
  constructor(ldapUtils: LdapUtils) {
    this.ldapUtils = ldapUtils;
  }

  async searchSamAccountName(searchSamAccountNameReq: SearchSamAccountNameReq): Promise<SearchSamAccountNameRes> {
    try {
      cleanUnderscoreFields(searchSamAccountNameReq);
      const res: SearchSamAccountNameRes = await this.ldapUtils.ldapSearch(
        `(samAccountName=${searchSamAccountNameReq.samAccountName})`,
        ["lastLogonTimestamp", "givenName"]
      );

      if (res?.lastLogonTimestamp) return res
      return {lastLogonTimestamp: 'unknown'}
    } catch (error) {
      throw error;
    }
  }
}