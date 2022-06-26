export const concat = (...arrays: any) => [].concat(...arrays.filter(Array.isArray));
export const unique = (array: string[]) => [...new Set(array)];
