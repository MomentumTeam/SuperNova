import path from "path";
if (process.env.NODE_ENV !== "production") {
  const ENV_PATH = __dirname.includes("dist")
    ? path.join(__dirname, "../../supernova.env")
    : path.join(__dirname, "../supernova");
  require("dotenv").config({
    path: ENV_PATH,
  });
}
import { Server } from "./server";

function main() {
  const server: Server = new Server();
  server.startServer();
}

main();
