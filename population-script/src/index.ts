import * as C from './config';
import { RequestType } from './interfaces/protoc/proto/requestService';
import { RequestFaker } from './requestFaker';
import { RequestService } from './services/requestService';
import { FakerHelper } from './utils/fakerHelper';

async function main(): Promise<void> {
  const requestFaker: RequestFaker = new RequestFaker();
  const requestService: RequestService = new RequestService();
  let requestType: RequestType;
  for (let i = 0; i < C.generateCount; i++) {
    try {
      requestType = FakerHelper.randomEnumValue(RequestType);
      switch (requestType) {
        case RequestType.CREATE_ROLE:
          await requestService.createRoleRequest(
            requestFaker.randomCreateRoleRequest()
          );
          break;
        case RequestType.ASSIGN_ROLE_TO_ENTITY:
          await requestService.assignRoleToEntityRequest(
            requestFaker.randomAssignRoleToEntityRequest()
          );
          break;
        case RequestType.CREATE_OG:
          await requestService.createOGRequest(
            requestFaker.randomCreateOGRequest()
          );
          break;
        case RequestType.ADD_APPROVER:
          await requestService.createNewApproverRequest(
            requestFaker.randomCreateNewApproverRequest()
          );
          break;
        case RequestType.CREATE_ENTITY:
          await requestService.createEntityRequest(
            requestFaker.randomCreateEntityRequest()
          );
          break;
        case RequestType.RENAME_OG:
          await requestService.renameOGRequest(
            requestFaker.randomRenameOGRequest()
          );
          break;
        case RequestType.RENAME_ROLE:
          await requestService.renameRoleRequest(
            requestFaker.randomRenameRoleRequest()
          );
          break;
        case RequestType.EDIT_ENTITY:
          await requestService.editEntityRequest(
            requestFaker.randomEditEntityRequest()
          );
          break;
        case RequestType.DELETE_OG:
          await requestService.deleteOGRequest(
            requestFaker.randomDeleteOGRequest()
          );
          break;
        case RequestType.DELETE_ROLE:
          await requestService.deleteRoleRequest(
            requestFaker.randomDeleteRoleRequest()
          );
          break;
        case RequestType.DISCONNECT_ROLE:
          await requestService.disconectRoleFromEntityRequest(
            requestFaker.randomDisconectRoleFromEntityRequest()
          );
          break;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

main()
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(`Error : ${error.message}`);
  });
