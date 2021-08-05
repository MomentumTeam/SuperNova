import { requestClient, producerClient } from './clients';
import {
  RequestIdArray,
  CanPushToQueueRes,
  SuccessMessage,
} from './interfaces/protoc/proto/approverService';

export function getRequestIdsInProgress() {
  console.log('getRequestIdsInProgress');
  return new Promise((resolve, reject) => {
    requestClient.GetRequestIdsInProgressByDue(
      (err: any, response: RequestIdArray) => {
        if (err) {
          console.log('err', err);
          resolve(null);
        }
        console.log('response', response);
        resolve(response);
      }
    );
  });
}

export async function executeRequest(requestId: string) {
  console.log('executeRequest');

  const CanPushToKartoffel = await requestClient.CanPushToKartoffelQueue(
    { id: requestId },
    (err: any, response: CanPushToQueueRes) => {
      if (err) {
        return null;
      }
      return response;
    }
  );

  const CanPushToADQ = await requestClient.CanPushToADQueue(
    { id: requestId },
    (err: any, response: CanPushToQueueRes) => {
      if (err) {
        return null;
      }
      return response;
    }
  );

  if (CanPushToKartoffel.canPushToQueue === true) {
    await producerClient.ProduceToKartoffelQueue(
      { id: requestId },
      (err: any, response: SuccessMessage) => {
        //TODO-handle errors
      }
    );
  } else if (CanPushToADQ.canPushToQueue === true) {
    await producerClient.ProduceToADQueue(
      { id: requestId },
      (err: any, response: SuccessMessage) => {
        //TODO-handle errors
      }
    );
  }
}
