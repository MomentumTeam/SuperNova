import axios, { AxiosInstance } from 'axios';
import * as C from '../config';
import { logger } from '../logger';
import { SpikeService } from '../spike/spikeService';
import https from 'https';
import { cleanUnderscoreFields } from './json.utils';
export class KartoffelUtils {
  private axiosKartoffel: AxiosInstance;
  private spikeToken: string | null;
  private lastSpikeTokenRecieved: number = new Date().getTime();
  private spikeService: SpikeService;

  // TODO: add encode uri here
  constructor() {
    this.spikeService = new SpikeService();
    this.axiosKartoffel = axios.create();
    this.axiosKartoffel.defaults.httpsAgent = new https.Agent({
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
    this.axiosKartoffel.interceptors.request.use(async (config) => {
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
      config.headers.Authorization = this.spikeToken;
      return config;
    });
  }

  async kartoffelGet(url: string, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      cleanUnderscoreFields(params);
      this.axiosKartoffel
        .get(url, { params })
        .then((res) => {
          logger.info(`Kartoffel GET Request to ${url} OK`, {
            response: res.data,
            queryParams: params,
          });
          resolve(res.data);
        })
        .catch((error) => {
          logger.error(`Kartoffel GET Request to ${url} ERROR`, {
            error: { message: error.message },
            queryParams: params,
          });
          reject(error);
        });
    });
  }

  async kartoffelDelete(url: string, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      cleanUnderscoreFields(params);
      this.axiosKartoffel
        .delete(url, { params })
        .then((res) => {
          logger.info(`Kartoffel DELETE Request to ${url} OK`, {
            response: res.data,
            queryParams: params,
          });
          resolve(res.data);
        })
        .catch((error) => {
          logger.error(`Kartoffel DELETE Request to ${url} ERROR`, {
            error: { message: error.message },
            queryParams: params,
          });
          reject(error);
        });
    });
  }

  async kartoffelPut(
    url: string,
    body: any = {},
    params: any = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      cleanUnderscoreFields(params);
      cleanUnderscoreFields(body);
      this.axiosKartoffel
        .put(url, body, { params })
        .then((res) => {
          logger.info(`Kartoffel PUT Request to ${url} OK`, {
            requestBoody: body,
            response: res.data,
            queryParams: params,
          });
          resolve(res.data);
        })
        .catch((error) => {
          logger.error(`Kartoffel PUT Request to ${url} ERROR`, {
            requestBoody: body,
            queryParams: params,
            error: { message: error.message },
          });
          reject(error);
        });
    });
  }

  async kartoffelPost(url: string, body: any, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      cleanUnderscoreFields(body);
      cleanUnderscoreFields(params);
      this.axiosKartoffel
        .post(url, body, { params })
        .then((res) => {
          logger.info(`Kartoffel POST Request to ${url} OK`, {
            requestBoody: body,
            response: res.data,
            queryParams: params,
          });
          resolve(res.data);
        })
        .catch((error) => {
          logger.error(`Kartoffel POST Request to ${url} ERROR`, {
            requestBoody: body,
            error: { message: error.message },
            queryParams: params,
          });
          reject(error);
        });
    });
  }

  async kartoffelPatch(url: string, body: any, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      cleanUnderscoreFields(body);
      cleanUnderscoreFields(params);
      this.axiosKartoffel
        .patch(url, body, { params })
        .then((res) => {
          logger.info(`Kartoffel PATCH Request to ${url} OK`, {
            requestBoody: body,
            queryParams: params,
            response: res.data,
          });
          resolve(res.data);
        })
        .catch((error) => {
          logger.error(`Kartoffel PATCH Request to ${url} ERROR`, {
            requestBoody: body,
            error: { message: error.message },
            queryParams: params,
          });
          reject(error);
        });
    });
  }

  async kartoffelGetBufferStream(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          responseType: 'arraybuffer',
        })
        .then((res) => {
          const result: string = Buffer.from(res.data).toString('base64');
          logger.info(`Kartoffel GET Buffer Stream Request to ${url} OK`, {
            response: res.data,
          });
          resolve(result);
        })
        .catch((error) => {
          logger.error(`Kartoffel GET Buffer Stream Request to ${url} ERROR`, {
            error: { message: error.message },
          });
          reject(error);
        });
    });
  }
}
