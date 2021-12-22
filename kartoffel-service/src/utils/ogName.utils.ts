import { OGArray } from '../interfaces/protoc/proto/kartoffelService';

export function ogNameExists(ogArray: OGArray, name: string): boolean {
  for (let og of ogArray.groups) {
    if (og.name === name || og.name.replace(/\u200f/g, '') === name) {
      return true;
    }
  }
  return false;
}
