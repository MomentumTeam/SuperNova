import passport from "passport";
import * as jwt from "jsonwebtoken";
import { config } from "../config";

const ShragaStrategy = require("passport-shraga").Strategy;

function serialize(user: { id: string }, done: (err?: Error, id?: string) => void): void {
  done(undefined, jwt.sign({ ...user }, config.authentication.secret));
}

function deserialize(token: string, done: (err?: Error, id?: any) => void): void {
  done(undefined, jwt.decode(token));
}

export function PassportHandler(): void {
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);

  passport.use(
    new ShragaStrategy(config.authentication.shraga, async (user: any, done: any) => {
      done(null, user);
    })
  );
}
