/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  CreateRoleBulkRes,
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkReq,
  ChangeRoleHierarchyBulkReq,
} from './requestService';

export const protobufPackage = 'BulkService';

export interface BulkService {
  CreateRoleBulkRequest(request: CreateRoleBulkReq): Promise<CreateRoleBulkRes>;
  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes>;
}

export class BulkServiceClientImpl implements BulkService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRoleBulkRequest = this.CreateRoleBulkRequest.bind(this);
    this.ChangeRoleHierarchyBulkRequest =
      this.ChangeRoleHierarchyBulkRequest.bind(this);
  }
  CreateRoleBulkRequest(
    request: CreateRoleBulkReq
  ): Promise<CreateRoleBulkRes> {
    const data = CreateRoleBulkReq.encode(request).finish();
    const promise = this.rpc.request(
      'BulkService.BulkService',
      'CreateRoleBulkRequest',
      data
    );
    return promise.then((data) =>
      CreateRoleBulkRes.decode(new _m0.Reader(data))
    );
  }

  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes> {
    const data = ChangeRoleHierarchyBulkReq.encode(request).finish();
    const promise = this.rpc.request(
      'BulkService.BulkService',
      'ChangeRoleHierarchyBulkRequest',
      data
    );
    return promise.then((data) =>
      ChangeRoleHierarchyBulkRes.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
