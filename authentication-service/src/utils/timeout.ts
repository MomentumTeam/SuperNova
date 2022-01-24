export const wait = (ms: number) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout after " + ms + " ms")), ms));

export const timeout = (p: any, ms: number) => Promise.race([p, wait(ms)]);
