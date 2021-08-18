import { SpikeManager } from './spike.manager';
import * as grpc from 'grpc';
const spikeManager: SpikeManager = new SpikeManager();

export async function getSpikeToken(call: any, callback: any) {
  try {
    const token = await spikeManager.getSpikeToken(call.request);
    callback(null, { token });
  } catch (error) {
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
