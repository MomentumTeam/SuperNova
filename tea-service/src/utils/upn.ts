import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import * as C from '../config';

export function getUPN(entity: Entity): string {
  switch (entity.entityType) {
    case C.soldier:
      return `s${entity.personalNumber}`;
    case C.reserved:
      return `s${entity.identityCard}`;
    case C.civilian:
      return `c${entity.identityCard}`;
    case C.goalUser:
      return `brol${entity.mail}`;
  }
  return '';
}
