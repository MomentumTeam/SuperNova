import { ldapCN, ldapDC, ldapOU, ldapPassword, ldapUrl } from "../config";

const SimpleLDAP = require("simple-ldap-search");

export class LdapUtils {
  private ldapClient: any;

  // TODO: add encode uri here
  constructor() {
    const config = {
        url: ldapUrl,
        base: `OU=${ldapOU} ${ldapDC.map(ldapdc => `,dc=${ldapdc}`)}`,
        dn: `cn=${ldapCN}`,
        password: ldapPassword,
        // optionally pass tls options to ldapjs
        tlsOptions: {
            // tls options ...
        },
    };
    this.ldapClient = new SimpleLDAP(config);
  }

  async kartoffelGet(url: string, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      cleanUnderscoreFields(params);
      this.axiosKartoffel
        .get(url, { params })
        .then((res) => {
          logger.info(`Kartoffel GET Request to ${url} OK`, {
            queryParams: params,
          });
          resolve(res.data);
        })
        .catch((error) => {
          logger.error(`Kartoffel GET Request to ${url} ERROR`, {
            error: { message: error.message },
            queryParams: params,
          });
          if (error?.response?.status === 401) {
            logger.info(`Refreshing Spike token`);
            this.spikeService
              .getSpikeToken()
              .then((newSpikeToken) => {
                this.spikeToken = newSpikeToken;
                this.lastSpikeTokenRecieved = new Date().getTime();
                this.axiosKartoffel
                  .get(url, { params })
                  .then((res) => {
                    resolve(res.data);
                  })
                  .catch((error: any) => {
                    reject(error);
                  });
              })
              .catch((ssError) => {
                reject(ssError);
              });
          } else {
            reject(error);
          }
        });
    });
  }
}
