import mongoose from 'mongoose';
import faker from 'faker';
import {
  ADStatus,
  ApproverDecision,
  Decision,
  EntityMin,
  KartoffelStatus,
  StageStatus,
} from '../interfaces/protoc/proto/requestService';
export class FakerHelper {
  static randomEnumValue<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
      .map((n) => Number.parseInt(n))
      .filter((n) => !Number.isNaN(n)) as unknown as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
  }

  static randomObjectIdArray(): string[] {
    const length = Math.floor(Math.random() * 10) + 1;
    let objectIds: string[] = [];
    for (let i = 0; i < length; i++) {
      objectIds.push(mongoose.Types.ObjectId().toString());
    }
    return objectIds;
  }

  static genearateEntityMin(id: string): EntityMin {
    return {
      id: id,
      displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      identityCard: faker.datatype
        .number({ min: 100000, max: 999999 })
        .toString(),
      personalNumber: faker.datatype
        .number({ min: 100000000, max: 999999999 })
        .toString(),
    };
  }

  static randomEntityMin(entities: EntityMin[]): EntityMin {
    return entities[Math.floor(Math.random() * entities.length)];
  }

  static randomEntityArray(entities: EntityMin[]): EntityMin[] {
    const shuffled = entities.sort(() => 0.5 - Math.random());
    const n = Math.floor(Math.random() * entities.length) + 1;
    const selected = shuffled.slice(0, n);
    return selected;
  }

  static randomApproverDecision(approvers: EntityMin[]): ApproverDecision {
    const approver = approvers[Math.floor(Math.random() * approvers.length)];
    return {
      approver: approver,
      decision: this.randomEnumValue(Decision),
      reason: faker.lorem.sentence(),
      date: faker.datatype.datetime().getTime(),
    };
  }

  static randomADStatus(): ADStatus {
    return {
      status: this.randomEnumValue(StageStatus),
      message: faker.lorem.sentence(),
      failedRetries: Math.floor(Math.random() * 5),
    };
  }

  static randomKartoffelStatus(): KartoffelStatus {
    let result: any = this.randomADStatus();
    result.failedRetries = Math.floor(Math.random() * 5);
    return result as KartoffelStatus;
  }
}
