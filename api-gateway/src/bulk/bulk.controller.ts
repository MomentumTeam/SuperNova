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

const uploadPath = config.files.path;

export default class BulkController {
  // POST
  static async uploadBulkFile(req: any, res: Response) {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        throw new InvalidBodyError('No files were uploaded.');
      }

      const { bulkFiles } = req.files;
      if (!bulkFiles) {
        throw new InvalidBodyError('add files with "bulkFiles" field.');
      }

      const files = [...[], bulkFiles];
      files.map((bulkFile: any) => {
        if (!allowedFileFormats.includes(bulkFile.mimetype)) {
          throw new InvalidBodyError(
            `Not supported file types. supported only: ${JSON.stringify(
              allowedFileFormats
            )}`
          );
        }

        bulkFile.mv(uploadPath, (err: any) => {
          if (err) throw err;
        });
      });

      res.send('File uploaded!');
    } catch (error: any) {
      logger.error(error.message);
      const statusCode = error.code ? error.code : 500;
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
      const statusCode = error.code ? error.code : 500;
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
      const statusCode = error.code ? error.code : 500;
      res.status(statusCode).send(error.message);
    }
  }
}
