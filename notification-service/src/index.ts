process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import path from "path";
if (process.env.NODE_ENV !== "production") {
  const ENV_PATH = __dirname.includes("dist")
    ? path.join(__dirname, "../../supernova.env")
    : path.join(__dirname, "../supernova.env");
  console.log(ENV_PATH);
  require("dotenv").config({
    path: ENV_PATH,
  });
}
import { Server } from "./server";
import { logger } from "./logger";

async function main() {
  try {
    const server: Server = new Server();
    await server.startServer();
    logger.info("Server started successfully");
  } catch (error) {
    logger.error(`Error while trying to start the server: ${error.message}`);
  }
}

main();