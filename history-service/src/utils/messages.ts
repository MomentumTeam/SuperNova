import { Entity, OrganizationGroup, Role } from "../interfaces/protoc/proto/kartoffelService";
import { Request, RequestType, requestTypeFromJSON } from "../interfaces/protoc/proto/requestService";

const getEventMessageByRequest = (request : Request) => {
    const typeOfTheRequest =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;
        //צריך לבדוק איך להחזיר את הזמנים
        const tempDate = request.updatedAt.toLocaleString();

        switch (typeOfTheRequest) {
          case requestTypeFromJSON(RequestType.CREATE_ROLE):
            return `  ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "יצירת תפקיד" קרתה עבור `;
          case requestTypeFromJSON(RequestType.RENAME_ROLE):
            return `  ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שינוי שם תפקיד" קרתה עבור `;
          case requestTypeFromJSON(RequestType.EDIT_ENTITY):
            return ` ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
          case requestTypeFromJSON(RequestType.ASSIGN_ROLE_TO_ENTITY):
            return `${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
          case requestTypeFromJSON(RequestType.CHANGE_ROLE_HIERARCHY):
            return `  ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שינוי היררכיית תפקיד" קרתה עבור `;
          default:
              throw new Error("Request type not supported!");
        }
      }



      const getEventsMassageByKartoffelObj = (kartoffelObject: Entity | OrganizationGroup | Role) => {
        
          if (kartoffelObject instanceof Entity) {

          } else if (kartoffelObject instanceof Role){
            return `  ${kartoffelObject?.createdAt.toLocaleString()} בתאריך ${
              kartoffelObject?.displayName
            } בקשת "יצירת תפקיד" קרתה, שם התפקיד - `;


          } else if (kartoffelObject instanceof OrganizationGroup) {

          }




        // const typeOfTheRequest =
        //     typeof request.type === typeof ''
        //       ? requestTypeFromJSON(request.type)
        //       : request.type;
        //     //צריך לבדוק איך להחזיר את הזמנים
        //     const tempDate = request.updatedAt.toLocaleString();
    
        //     switch (typeOfTheRequest) {
        //       case requestTypeFromJSON(RequestType.CREATE_ROLE):
        //         return `  ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "יצירת תפקיד" קרתה עבור `;
        //       case requestTypeFromJSON(RequestType.RENAME_ROLE):
        //         return `  ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שינוי שם תפקיד" קרתה עבור `;
        //       case requestTypeFromJSON(RequestType.EDIT_ENTITY):
        //         return ` ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שינוי האדם שמחזיר בתפקיד" קרתה עבור `;
        //       case requestTypeFromJSON(RequestType.ASSIGN_ROLE_TO_ENTITY):
        //         return `${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שיוך אדם לתפקיד" קרתה עבור `;
        //       case requestTypeFromJSON(RequestType.CHANGE_ROLE_HIERARCHY):
        //         return `  ${tempDate} בתאריך ${request?.kartoffelParams?.name} בקשת "שינוי היררכיית תפקיד" קרתה עבור `;
        //       default:
        //           throw new Error("Request type not supported!");
        //     }
          }
export {getEventMessageByRequest}
//////להוסיף גם את הפונקציה של getEventsMassageByKartoffelObj

///לזכור לעשות מחר 
