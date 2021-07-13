export const host = process.env.KS_HOST || "0.0.0.0";
export const port =
  process.env.NODE_ENV === "production"
    ? "8081"
    : process.env.PS_PORT || "8081";
export const spikeServiceUrl = process.env.KS_SS_URL || "0.0.0.0:8080";
export const devMode = process.env.NODE_ENV
  ? process.env.NODE_ENV === "development"
  : true;
export const kartoffelUrl = process.env.KS_KARTOFFEL_URL || "0.0.0.0:1000";
export const useFaker = process.env.KS_USE_FAKER
  ? process.env.KS_USE_FAKER === "true"
  : true;
