import { ldapBaseDN, ldapCN, ldapConnectionTimeout, ldapPassword, ldapUrl } from "../config";
import { logger } from "../logger";
import { Client } from "ldapts";


export class LdapUtils {
  private ldapClient: Client;

  constructor() {
    this.ldapClient = new Client({ url: ldapUrl, connectTimeout: parseInt(ldapConnectionTimeout, 10) });
    this.bindClient();
  }

  async bindClient() {
    try {
      logger.info("LDAP BIND-START");
      await this.ldapClient.bind(ldapCN, ldapPassword)
      logger.info("LDAP BIND-OK");
  
    } catch (ex: any) {
      logger.error(`LDAP bind - ERROR`, {
        error: { message: ex.message },
      });
      throw ex;
    }
  }

  async unbindClient() {
    await this.ldapClient.unbind();
  }

  async ldapSearch(filter: string, attributes: any = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ldapClient
        .search(ldapBaseDN, {
          filter: filter,
          attributes: attributes,
        })
        .then((res: any) => {
          logger.info(`LDAP SEARCH Request - OK`, {
            filter: filter,
            attributes: attributes,
          });
          console.log(res?.searchEntries);
          resolve(res?.searchEntries);
        })
        .catch((error: any) => {
          logger.error(`LDAP SEARCH Request - ERROR`, {
            error: { message: error.message },
            filter: filter,
            attributes: attributes,
          });
          reject(error);
        });
    });
  }
}
