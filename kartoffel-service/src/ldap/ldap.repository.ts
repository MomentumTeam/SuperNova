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
      const res: any = await this.ldapUtils.ldapSearch(
        `(samAccountName=${searchSamAccountNameReq.samAccountName})`,
        ["lastLogonTimestamp", "givenName"]
      );

      if (res && res.length > 0 && res[0]?.lastLogonTimestamp) {
        return res[0];
      }

      return {lastLogonTimestamp: 'unknown'}
    } catch (error) {
      throw error;
    }
  }
}