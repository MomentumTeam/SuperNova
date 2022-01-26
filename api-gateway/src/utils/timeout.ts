export const wait = (ms: number) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout after " + ms + " ms")), ms));
  
export const timeout = async(p: any, ms: number) => await Promise.race([p,wait(ms)]);
