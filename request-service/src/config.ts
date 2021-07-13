export const host = process.env.RS_HOST || "0.0.0.0";
export const port =
  process.env.NODE_ENV === "production"
    ? "8082"
    : process.env.RS_PORT || "8082";

export const mongoUrl =
  process.env.RS_MONGO_URL || "mongodb://127.0.0.1:27017/supernova";
