import { ldapCN, ldapDC, ldapOU, ldapPassword, ldapUrl } from "../config";
import { logger } from "../logger";

const SimpleLDAP = require("simple-ldap-search");

export class LdapUtils {
  private ldapClient: any;

  // TODO: add encode uri here
  constructor() {
    const config = {
      url: ldapUrl,
      base: `OU=${ldapOU} ${ldapDC.map((ldapdc) => `,dc=${ldapdc}`)}`,
      dn: `cn=${ldapCN}`,
      password: ldapPassword,
      // optionally pass tls options to ldapjs
      tlsOptions: {
        // tls options ...
      },
    };
    this.ldapClient = new SimpleLDAP(config);
  }

  async ldapSearch(filter: string, attributes: any = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ldapClient.search(filter, attributes)
        .then((res: any) => {
          logger.info(`LDAP SEARCH Request - OK`, {
            filter: filter,
            attributes: attributes
          });
          resolve(res.data);
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
