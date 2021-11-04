import faker from 'faker';
import {
  ADStatus,
  ApproverDecision,
  ApproverType,
  AssignRoleToEntityReq,
  ChangeRoleHierarchyReq,
  CreateEntityReq,
  CreateNewApproverReq,
  CreateOGReq,
  CreateRoleReq,
  Decision,
  DeleteEntityReq,
  DeleteOGReq,
  DeleteRoleReq,
  DisconectRoleFromEntityReq,
  EditEntityReq,
  EntityMin,
  KartoffelStatus,
  RenameOGReq,
  RenameRoleReq,
  Request,
  RequestStatus,
  StageStatus,
} from './interfaces/protoc/proto/requestService';
import { FakerHelper } from './utils/fakerHelper';
import * as C from './config';
import mongoose from 'mongoose';

export class RequestFaker {
  entities: EntityMin[];
  constructor() {
    this.entities = C.entityIds.map((id) => FakerHelper.genearateEntityMin(id));
  }

  generateBasicRequest(): any {
    const commanders = FakerHelper.randomEntityArray(this.entities);
    const securityApprovers = FakerHelper.randomEntityArray(this.entities);
    const superSecurityApprovers = FakerHelper.randomEntityArray(this.entities);

    return {
      submittedBy: FakerHelper.randomEntityMin(this.entities),
      status: FakerHelper.randomEnumValue(RequestStatus),
      // commanderDecision: FakerHelper.randomApproverDecision(commanders),
      // securityDecision: FakerHelper.randomApproverDecision(securityApprovers),
      // superSecurityDecision:
      //   FakerHelper.randomApproverDecision(securityApprovers),
      commanders: commanders,
      securityApprovers: securityApprovers,
      superSecurityApprovers: superSecurityApprovers,
      kartoffelStatus: FakerHelper.randomKartoffelStatus(),
      adStatus: FakerHelper.randomADStatus(),
      kartoffelParams: {},
      adParams: {},
      comments: faker.lorem.paragraph(),
      approversComments: {
        commanderComment: faker.lorem.paragraph(),
        securityComment: faker.lorem.paragraph(),
        superSecurityComment: faker.lorem.paragraph(),
      },
      due: faker.datatype.datetime().getTime(),
      isPartOfBulk: false,
    };
  }

  randomCreateRoleRequest(): CreateRoleReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      jobTitle: faker.name.jobTitle(),
      directGroup: mongoose.Types.ObjectId().toString(),
      roleId: faker.internet.email(),
      clearance: '1',
      type: 'domainUser',
      source: 'oneTree',
      uniqueId: faker.internet.email(),
      mail: faker.internet.email(),
      isRoleAttachable: true,
    };
    request.adParams = {
      samAccountName: faker.internet.email(),
      ouDisplayName: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      jobTitle: faker.name.jobTitle(),
    };
    return request as CreateRoleReq;
  }

  randomAssignRoleToEntityRequest(): AssignRoleToEntityReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      id: mongoose.Types.ObjectId().toString(),
      uniqueId: faker.internet.email(),
    };
    request.adParams = {
      oldSAMAccountName: faker.internet.email(),
      newSAMAccountName: faker.internet.email(),
      upn: mongoose.Types.ObjectId().toString(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      rank: faker.name.prefix(),
      roleSerialCode: faker.internet.email(),
    };
    return request as AssignRoleToEntityReq;
  }

  randomCreateOGRequest(): CreateOGReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      name: `${faker.company.companyName()}/${faker.company.companyName()}`,
      parent: mongoose.Types.ObjectId().toString(),
      source: 'oneTree',
    };
    request.adParams = {
      ouDisplayName: `${faker.company.companyName()}/${faker.company.companyName()}`,
      ouName: faker.company.companyName(),
      name: faker.company.companyName(),
    };
    return request as CreateOGReq;
  }

  randomCreateNewApproverRequest(): CreateNewApproverReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {};
    request.adParams = {};
    request.additionalParams = {
      entityId: mongoose.Types.ObjectId().toString(),
      displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      domainUsers: [faker.internet.email()],
      akaUnit: faker.company.companyName(),
      type: FakerHelper.randomEnumValue(ApproverType),
    };
    return request as CreateNewApproverReq;
  }
  randomCreateEntityRequest(): CreateEntityReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      identityCard: faker.datatype
        .number({ min: 100000, max: 999999 })
        .toString(),
      personalNumber: faker.datatype
        .number({ min: 100000000, max: 999999999 })
        .toString(),
      serviceType: faker.company.companyName,
      phone: [faker.phone.phoneNumber()],
      mobilePhone: [faker.phone.phoneNumber()],
      address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
      clearance: '1',
      sex: faker.name.gender(),
      birthdate: faker.datatype.datetime().getTime(),
      entityType: faker.company.companyName(),
    };
    request.adParams = {};
    return request as CreateEntityReq;
  }
  randomRenameOGRequest(): RenameOGReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      id: mongoose.Types.ObjectId().toString(),
      name: faker.internet.email(),
    };
    request.adParams = {
      ouDisplayName: faker.company.companyName(),
      oldOuName: faker.company.companyName(),
      newOuName: faker.company.companyName(),
    };
    return request as RenameOGReq;
  }
  randomRenameRoleRequest(): RenameRoleReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      roleId: faker.internet.email(),
      jobTitle: faker.company.companyName(),
    };
    request.adParams = {
      samAccountName: faker.internet.email(),
      jobTitle: faker.company.companyName(),
    };
    return request as RenameRoleReq;
  }
  randomEditEntityRequest(): EditEntityReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      id: mongoose.Types.ObjectId().toString(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      identityCard: faker.datatype
        .number({ min: 100000, max: 999999 })
        .toString(),
      personalNumber: faker.datatype
        .number({ min: 100000000, max: 999999999 })
        .toString(),
      serviceType: faker.company.companyName,
      phone: [faker.phone.phoneNumber()],
      mobilePhone: [faker.phone.phoneNumber()],
      address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
      clearance: '1',
      sex: faker.name.gender(),
      birthdate: faker.datatype.datetime().getTime(),
      entityType: faker.company.companyName(),
    };
    request.adParams = {
      samAccountName: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    };
    return request as EditEntityReq;
  }
  randomDeleteOGRequest(): DeleteOGReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      id: mongoose.Types.ObjectId().toString(),
    };
    request.adParams = {};
    return request as DeleteOGReq;
  }
  randomDeleteRoleRequest(): DeleteRoleReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      roleId: faker.internet.email(),
      uniqueId: faker.internet.email(),
    };
    request.adParams = { samAccountName: faker.internet.email() };
    return request as DeleteRoleReq;
  }
  randomDisconectRoleFromEntityRequest(): DisconectRoleFromEntityReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      id: mongoose.Types.ObjectId().toString(),
      uniqueId: faker.internet.email(),
    };
    request.adParams = { samAccountName: faker.internet.email() };
    return request as DisconectRoleFromEntityReq;
  }

  randomDeleteEntityRequest(): DeleteEntityReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      id: mongoose.Types.ObjectId().toString(),
    };
    request.adParams = {};
    return request as DeleteEntityReq;
  }

  randomChangeRoleHierarchyRequest(): ChangeRoleHierarchyReq {
    let request: any = this.generateBasicRequest();
    request.kartoffelParams = {
      roleId: faker.internet.email(),
      directGroup: mongoose.Types.ObjectId().toString(),
      jobTitle: faker.company.companyName(),
    };
    request.adParams = {
      samAccountName: faker.internet.email(),
      ouDisplayName: faker.company.companyName(),
      jobTitle: faker.company.companyName(),
    };
    return request as ChangeRoleHierarchyReq;
  }
}
