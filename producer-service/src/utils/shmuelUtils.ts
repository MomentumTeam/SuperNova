import axios, { AxiosInstance } from 'axios';
import * as C from '../config';
import { logger } from '../logger';
import { SpikeService } from '../services/spike.service';
import https from 'https';
export class ShmuelUtils {
  private axiosShmuel: AxiosInstance;
  private spikeToken: string | null;
  private lastSpikeTokenRecieved: number = new Date().getTime();
  private spikeService: SpikeService;

  constructor() {
    this.spikeService = new SpikeService();
    this.axiosShmuel = axios.create();
    this.axiosShmuel.defaults.httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    this.spikeToken = null;
    this.spikeService
      .getSpikeToken()
      .then((token) => {
        this.spikeToken = token;
      })
      .catch((error) => {
        throw error;
      });
    this.axiosShmuel.interceptors.request.use(async (config) => {
      const now = new Date().getTime();
      const hoursDiff = Math.floor(
        (now - this.lastSpikeTokenRecieved) / 1000 / 60 / 60
      );
      if (!this.spikeToken || hoursDiff >= C.spikeTokenRefreshInHours) {
        try {
          this.spikeToken = await this.spikeService.getSpikeToken();
          this.lastSpikeTokenRecieved = new Date().getTime();
        } catch (error) {
          throw error;
        }
      }
      config.headers.Authorization = `Bearer ${this.spikeToken}`;
      return config;
    });
  }

  async shmuelPost(url: string, body: any, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axiosShmuel
        .post(url, body, { params })
        .then((res) => {
          logger.info(`Shmuel POST Request OK`, {
            url: url,
            requestBoody: body,
            response: res.data,
            queryParams: params,
          });
          resolve(res.data);
        })
        .catch((error: any) => {
          logger.error(`Shmuel POST Request ERROR`, {
            url: url,
            requestBoody: body,
            error: { message: error.message },
            queryParams: params,
          });
          if (error.response.status === 401) {
            logger.info(`Refreshing Spike token`);
            this.spikeService
              .getSpikeToken()
              .then((newSpikeToken) => {
                this.spikeToken = newSpikeToken;
                this.lastSpikeTokenRecieved = new Date().getTime();
                this.axiosShmuel
                  .post(url, body, { params })
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
