import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import {
  Entity,
  ExportHierarchyDataReq,
  ExportHierarchyDataRes,
  GetEntityByIdRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/kartoffelService.proto`;

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const protoDescriptor: any =
  grpc.loadPackageDefinition(packageDefinition).Kartoffel;

const kartoffelClient: any = new protoDescriptor.Kartoffel(
  config.kartoffelServiceUrl,
  grpc.credentials.createInsecure()
);

export default class KartoffelService {
  static async getEntityById(
    getEntityById: GetEntityByIdRequest
  ): Promise<Entity> {
    return new Promise((resolve, reject) => {
      kartoffelClient.GetEntityById(
        getEntityById,
        (err: any, entity: Entity) => {
          if (err) {
            logger.error('getEntityById in KartoffelService ERROR', {
              getEntityById,
              err,
            });
            reject(err);
          } else {
            logger.info('getEntityById in KartoffelService', {
              getEntityById,
              entity,
            });
            resolve(entity);
          }
        }
      );
    });
  }

  static async exportHierarchyData(
    exportHierarchyDataReq: ExportHierarchyDataReq
  ): Promise<ExportHierarchyDataRes> {
    return new Promise((resolve, reject) => {
      kartoffelClient.ExportHierarchyData(
        exportHierarchyDataReq,
        (err: any, hierarchyData: ExportHierarchyDataRes) => {
          if (err) {
            logger.error('exportHierarchyData in KartoffelService ERROR', {
              exportHierarchyDataReq,
              err,
            });
            reject(err);
          } else {
            const hierarchyName = {
              fatherHierarchyName: hierarchyData?.fatherHierarchyName
            };
            logger.info('exportHierarchyData in KartoffelService', {
              exportHierarchyDataReq,
              hierarchyInfo: {
                fatherHierarchyName: hierarchyData?.fatherHierarchyName,
                rowsNumber: hierarchyData.hierarchyData.length,
              },
            });
      
            resolve(hierarchyData);
          }
        }
      );
    });
  }
}
