import { IEntity } from "./entity.interface";

export interface IEntityArray {
  entities: IEntity[];
}

export class EntityArray implements IEntityArray {
  entities: IEntity[];
  constructor(entities: IEntity[]) {
    this.entities = entities;
  }
}
