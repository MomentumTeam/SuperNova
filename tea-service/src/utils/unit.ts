import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import * as C from '../config';
export function getUnitKartoffelIdOfEntity(entity: Entity) {
  try {
    return entity.akaUnit;
  } catch (error) {
    return C.generalUnitId;
  }
}
