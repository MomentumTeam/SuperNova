import { config } from '../config';

const { getSpikeAuthMiddleWare } = require('spike-auth-middleware');

const writeMiddleWareConfiguration = {
  audience: config.spike.audienceId,
  allowedScopes: config.spike.writeScopeName,
  pathToPublicKey: config.spike.publicKeyPath
};

export const validateSpikeWriteScope = getSpikeAuthMiddleWare(
  writeMiddleWareConfiguration
);