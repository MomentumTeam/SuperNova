import path from 'path';
import fs from 'fs';

export function findPath(name: string): string {
  let joinStr = name;
  let filePath = path.join(__dirname, joinStr);
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(filePath)) {
      return filePath;
    } else {
      joinStr = `../${joinStr}`;
      filePath = path.join(__dirname, joinStr);
    }
  }
  throw new Error(`${name} does not exist in folder ancestors!`);
}
