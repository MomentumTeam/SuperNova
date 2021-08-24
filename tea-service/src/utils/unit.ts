import * as C from '../config';
import { EntityMin } from '../interfaces/protoc/proto/teaService';
export function getUnitKartoffelIdOfEntity(entity: EntityMin) {
  try {
    return entity.akaUnit;
  } catch (error) {
    return C.generalUnitId;
  }
}
