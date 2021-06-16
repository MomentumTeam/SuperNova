export const host = process.env.RS_HOST || "0.0.0.0";
export const port = process.env.RS_PORT || "8080";

export const mongoUrl =
  process.env.RS_MONGO_URL || "mongodb://localhost:27017/supernova";
