const fs = require('fs');

export const checkIfFileExist = (filePath: string) => {
  return fs.existsSync(filePath);
};

export const ensureFileExists = (filePath: string) => {
  if (!checkIfFileExist(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
};
