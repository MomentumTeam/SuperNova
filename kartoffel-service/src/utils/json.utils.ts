export function cleanUnderscoreFields(document: any): void {
  let keys: any = Object.keys(document);

  for (let key of keys) {
    if (key.startsWith('_')) {
      delete document[key];
    }
  }
}
