import * as C from '../config';
import { EntityMin } from '../interfaces/protoc/proto/teaService';
import { PrefixModel } from '../models/prefix.model';

function zeroPad(num: any, places: any) {
  return String(num).padStart(places, '0');
}

export async function getUPN(entity: EntityMin): Promise<string> {
  try {
    switch (entity.entityType) {
      case C.soldier:
        return `s${entity.personalNumber}`;
      case C.reserved:
        return `s${entity.identityCard}`;
      case C.civilian:
        return `c${entity.identityCard}`;
      case C.goalUser:
        const documentAfterInc = await PrefixModel.findOneAndUpdate(
          { prefix: C.brol },
          { $inc: { currentCounter: 1 } }
        );
        if (!documentAfterInc) {
          throw new Error(`Failed to get current brol counter`);
        }
        const prefixAfterInc: any = documentAfterInc.toObject();
        return `brol_${zeroPad(prefixAfterInc.currentCounter, 6)}`;
    }
    return '';
  } catch (error) {
    throw error;
  }
}
