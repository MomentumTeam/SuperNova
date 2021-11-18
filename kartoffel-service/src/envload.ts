process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { findPath } from "./utils/path";
if (process.env.NODE_ENV !== "production") {
  const ENV_PATH = `${findPath("supernova.env")}`;
  require("dotenv").config({
    path: ENV_PATH,
  });
}
