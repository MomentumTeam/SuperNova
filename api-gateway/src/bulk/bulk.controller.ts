import { Response } from 'express';
import { BulkService } from './bulk.service';
import {
  AuthenticationError,
  InvalidBodyError,
} from '../utils/errors/userErrors';
import {
  ChangeRoleHierarchyBulkReq,
  CreateRoleBulkReq,
  EntityMin,
} from '../interfaces/protoc/proto/requestService';
import { allowedFileFormats } from './bulk.interface';
import { logger } from '../utils/logger/logger';
import { config } from '../config';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import {
  GetBulkRequestByIdReq,
  GetBulkRequestExampleReq,
} from '../interfaces/protoc/proto/bulkService';
import { checkIfFileExist, ensureFileExists } from './bulk.utils';

const uploadPath = config.files.path;

// Make sure upload path exists
ensureFileExists(uploadPath);

export default class BulkController {
  // POST
  // TODO: move this do bulk service?
  static async uploadBulkFile(req: any, res: Response) {
    const moveFile = (file: any) => {
      return new Promise((resolve, reject) => {
        file.mv(`${uploadPath}/${file.name}`, (err: any) => {
          if (err) return reject(err);

          resolve('ok');
        });
      });
    };

    const generateFileName = (filename: string) => {
      let num = 0;
      let fileName = filename;
      let fileUploadPath = `${uploadPath}/${fileName}`;
      const filenamewithoutextension = fileName.substr(
        0,
        fileName.lastIndexOf('.')
      );
      const extension = '.' + fileName.split('.').pop();

      while (checkIfFileExist(fileUploadPath)) {
        fileName = `${filenamewithoutextension}(${num++})${extension}`;
        fileUploadPath = `${uploadPath}/${fileName}`;
      }

      return fileName;
    };

    const uploadFile = async (bulkFile: any) => {
      if (!allowedFileFormats.includes(bulkFile.mimetype)) {
        throw new InvalidBodyError(
          `Not supported file types. supported only: ${JSON.stringify(
            allowedFileFormats
          )}`
        );
      }

      bulkFile.name = generateFileName(bulkFile.name);
      await moveFile(bulkFile);
      return bulkFile.name;
    };

    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        throw new InvalidBodyError('No files were uploaded.');
      }

      const { bulkFiles } = req.files;
      if (!bulkFiles) {
        throw new InvalidBodyError('add files with "bulkFiles" field.');
      }

      const files = Array.isArray(bulkFiles)
        ? [...[], ...bulkFiles]
        : [...[], bulkFiles];
      const uploadFiles = await Promise.all(
        files.map((bulkFile: any) => uploadFile(bulkFile))
      );
      res.status(200).send({ uploadFiles });
    } catch (error: any) {
      logger.error(error.message);
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async createRoleBulkRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const createRoleBulkReq: CreateRoleBulkReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const roleBulk = await BulkService.createRoleBulkRequest(
        createRoleBulkReq
      );
      res.send(roleBulk);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // PUT
  static async changeRoleHierarchyBulkRequest(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const submittedBy: EntityMin = {
      id: req.user.id,
      displayName: req.user.displayName,
      identityCard: req.user.identityCard,
      personalNumber: req.user.personalNumber,
    };

    const changeRoleHierarchyBulkReq: ChangeRoleHierarchyBulkReq = {
      submittedBy: submittedBy,
      ...req.body,
    };

    try {
      const roleHierarchyBulk =
        await BulkService.changeRoleHierarchyBulkRequest(
          changeRoleHierarchyBulkReq
        );
      res.send(roleHierarchyBulk);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // GET
  static async getBulkRequestExample(req: any, res: Response) {
    const getBulkRequestExampleReq: GetBulkRequestExampleReq = {
      bulkType: req.query.bulkType,
    };
    try {
      const fileName = await BulkService.getBulkRequestExample(
        getBulkRequestExampleReq
      );

      if (fileName.bulkFileName) {
        const filePath = `${uploadPath}/${fileName.bulkFileName}`;

        if (checkIfFileExist(filePath)) {
          return res.download(filePath);
        }
      }

      res
        .status(404)
        .send(
          `example file not found in path ${uploadPath}/${fileName.bulkFileName}`
        );
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  //GET
  static async getCreateRoleBulkRequestById(req: any, res: Response) {
    const getBulkRequestByIdReq: GetBulkRequestByIdReq = {
      id: req.params.id,
    };
    try {
      const detailedBulkRequest =
        await BulkService.getCreateRoleBulkRequestById(getBulkRequestByIdReq);

      res.send(detailedBulkRequest);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  //GET
  static async getChangeRoleHierarchyBulkRequestById(req: any, res: Response) {
    const getBulkRequestByIdReq: GetBulkRequestByIdReq = {
      id: req.params.id,
    };
    try {
      const detailedBulkRequest =
        await BulkService.getChangeRoleHierarchyBulkRequestById(
          getBulkRequestByIdReq
        );

      res.send(detailedBulkRequest);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
