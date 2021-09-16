import * as C from '../config';
import { EntityMin } from '../interfaces/protoc/proto/teaService';

export function getUPN(entity: EntityMin): string {
  switch (entity.entityType) {
    case C.soldier:
      return `s${entity.personalNumber}`;
    case C.reserved:
      return `s${entity.identityCard}`;
    case C.civilian:
      return `c${entity.identityCard}`;
    case C.goalUser:
      if (entity.goalUserID) {
        return `brol${entity.goalUserID}`;
      } else {
        return `brol${new Date().getTime()}`;
      }
  }
  return '';
}
