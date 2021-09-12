import { FakerHelper } from './utils/fakerHelper';
export const requestServiceUrl = process.env.POS_RS_URL || '0.0.0.0:8081';
export const entityIds = process.env.POS_ENTITY_IDS
  ? process.env.POS_ENTITY_IDS.split(',')
  : FakerHelper.randomObjectIdArray();
export const generateCount = process.env.POS_GENERATE_COUNT
  ? parseInt(process.env.POS_GENERATE_COUNT)
  : 10;
