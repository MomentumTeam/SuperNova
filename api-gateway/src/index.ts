import { Server } from './server';
import { logger } from "./logger";

async function main() {
  try {
    const server: Server = new Server();
    server.listen();
  } catch (error) {
    console.log('error', error)
    logger.log({
      level: "error",
      label: "main",
      message: `Error while trying to listening the server: ${error.message}`,
    });  }
}

main();
