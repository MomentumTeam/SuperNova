export const host = process.env.KS_HOST || "0.0.0.0";
export const port = process.env.KS_PORT || "8080";
export const spikeServiceUrl = process.env.SS_URL || "0.0.0.0:8080";
export const devMode = process.env.NODE_ENV === "development";
export const kartoffelUrl = process.env.KARTOFFEL_URL || "0.0.0.0:1000";
