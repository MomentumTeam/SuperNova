import { Response } from 'express';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import TeaService from './tea.service';

export default class TeaController {
  //GET
  static async getAllUnits(req: any, res: Response) {
    try {
      const units = await TeaService.getAllUnits({});
      res.send(units);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async searchUnit(req: any, res: Response) {
    try {
      const units = await TeaService.searchUnit({
        nameAndHierarchy: req.query.nameAndHierarchy,
      });
      res.send(units);
    } catch (error: any) {
      // TODO : ask barak if we need to return the service's error or always 500
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
