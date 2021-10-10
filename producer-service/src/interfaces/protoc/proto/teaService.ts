/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'Tea';

export enum Domain {
  OLD = 0,
  NEW = 1,
  UNRECOGNIZED = -1,
}

export function domainFromJSON(object: any): Domain {
  switch (object) {
    case 0:
    case 'OLD':
      return Domain.OLD;
    case 1:
    case 'NEW':
      return Domain.NEW;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Domain.UNRECOGNIZED;
  }
}

export function domainToJSON(object: Domain): string {
  switch (object) {
    case Domain.OLD:
      return 'OLD';
    case Domain.NEW:
      return 'NEW';
    default:
      return 'UNKNOWN';
  }
}

export interface SearchUnitReq {
  nameAndHierarchy: string;
}

export interface GetAllUnitsReq {}

export interface MinUnitArray {
  units: UnitMin[];
  totalCount: number;
}

export interface UnitMin {
  id: string;
  name: string;
  hierarchy: string;
}

export interface RetrieveTeaByUnitReq {
  id: string;
}

export interface TeaMessage {
  tea: string;
}

export interface UPNMessage {
  upn: string;
}

export interface UpdateUnitReq {
  id: string;
  unitProperties: UnitProperties | undefined;
}

export interface DeleteUnitReq {
  id: string;
}

export interface GetUnitReq {
  id: string;
}

export interface AddUnitReq {
  id: string;
  name: string;
  prefix: string;
  /** gmail.com, after @ */
  oldDomainSuffix: string;
  /** gmail.com, after @ */
  newDomainSuffix: string;
  currentCounter: number;
  hierarchy: string;
}

export interface Unit {
  id: string;
  name: string;
  /** 1234 */
  prefix: string;
  /** gmail.com, after @ */
  oldDomainSuffix: string;
  /** gmail.com, after @ */
  newDomainSuffix: string;
  currentCounter: number;
  teaInProgress: string[];
  failedTea: string[];
  createdAt: number;
  hierarchy: string;
}

export interface UnitProperties {
  id?: string | undefined;
  name?: string | undefined;
  prefix?: string | undefined;
  /** gmail.com, after @ */
  oldDomainSuffix: string;
  /** gmail.com, after @ */
  newDomainSuffix: string;
  currentCounter?: string | undefined;
  teaInProgress: string[];
  failedTea: string[];
  hierarchy: string;
}

export interface ReportTeaReq {
  tea: string;
}

export interface SuccessMessage {
  success: boolean;
}

export interface RetrieveByEntityReq {
  domain: Domain;
  entity: EntityMin | undefined;
}

export interface RetrieveByEntityIdReq {
  domain: Domain;
  entityId: string;
}

export interface EntityMin {
  entityType: string;
  akaUnit: string;
  personalNumber?: string | undefined;
  identityCard?: string | undefined;
  goalUserID?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

const baseSearchUnitReq: object = { nameAndHierarchy: '' };

export const SearchUnitReq = {
  encode(
    message: SearchUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nameAndHierarchy !== '') {
      writer.uint32(10).string(message.nameAndHierarchy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchUnitReq } as SearchUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameAndHierarchy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchUnitReq {
    const message = { ...baseSearchUnitReq } as SearchUnitReq;
    if (
      object.nameAndHierarchy !== undefined &&
      object.nameAndHierarchy !== null
    ) {
      message.nameAndHierarchy = String(object.nameAndHierarchy);
    } else {
      message.nameAndHierarchy = '';
    }
    return message;
  },

  toJSON(message: SearchUnitReq): unknown {
    const obj: any = {};
    message.nameAndHierarchy !== undefined &&
      (obj.nameAndHierarchy = message.nameAndHierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<SearchUnitReq>): SearchUnitReq {
    const message = { ...baseSearchUnitReq } as SearchUnitReq;
    if (
      object.nameAndHierarchy !== undefined &&
      object.nameAndHierarchy !== null
    ) {
      message.nameAndHierarchy = object.nameAndHierarchy;
    } else {
      message.nameAndHierarchy = '';
    }
    return message;
  },
};

const baseGetAllUnitsReq: object = {};

export const GetAllUnitsReq = {
  encode(
    _: GetAllUnitsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUnitsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllUnitsReq } as GetAllUnitsReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetAllUnitsReq {
    const message = { ...baseGetAllUnitsReq } as GetAllUnitsReq;
    return message;
  },

  toJSON(_: GetAllUnitsReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetAllUnitsReq>): GetAllUnitsReq {
    const message = { ...baseGetAllUnitsReq } as GetAllUnitsReq;
    return message;
  },
};

const baseMinUnitArray: object = { totalCount: 0 };

export const MinUnitArray = {
  encode(
    message: MinUnitArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.units) {
      UnitMin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int32(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinUnitArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinUnitArray } as MinUnitArray;
    message.units = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units.push(UnitMin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinUnitArray {
    const message = { ...baseMinUnitArray } as MinUnitArray;
    message.units = [];
    if (object.units !== undefined && object.units !== null) {
      for (const e of object.units) {
        message.units.push(UnitMin.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    return message;
  },

  toJSON(message: MinUnitArray): unknown {
    const obj: any = {};
    if (message.units) {
      obj.units = message.units.map((e) => (e ? UnitMin.toJSON(e) : undefined));
    } else {
      obj.units = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    return obj;
  },

  fromPartial(object: DeepPartial<MinUnitArray>): MinUnitArray {
    const message = { ...baseMinUnitArray } as MinUnitArray;
    message.units = [];
    if (object.units !== undefined && object.units !== null) {
      for (const e of object.units) {
        message.units.push(UnitMin.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    return message;
  },
};

const baseUnitMin: object = { id: '', name: '', hierarchy: '' };

export const UnitMin = {
  encode(
    message: UnitMin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.hierarchy !== '') {
      writer.uint32(26).string(message.hierarchy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitMin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnitMin } as UnitMin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.hierarchy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitMin {
    const message = { ...baseUnitMin } as UnitMin;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = '';
    }
    return message;
  },

  toJSON(message: UnitMin): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<UnitMin>): UnitMin {
    const message = { ...baseUnitMin } as UnitMin;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = '';
    }
    return message;
  },
};

const baseRetrieveTeaByUnitReq: object = { id: '' };

export const RetrieveTeaByUnitReq = {
  encode(
    message: RetrieveTeaByUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveTeaByUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveTeaByUnitReq } as RetrieveTeaByUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveTeaByUnitReq {
    const message = { ...baseRetrieveTeaByUnitReq } as RetrieveTeaByUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: RetrieveTeaByUnitReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<RetrieveTeaByUnitReq>): RetrieveTeaByUnitReq {
    const message = { ...baseRetrieveTeaByUnitReq } as RetrieveTeaByUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseTeaMessage: object = { tea: '' };

export const TeaMessage = {
  encode(
    message: TeaMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tea !== '') {
      writer.uint32(10).string(message.tea);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TeaMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTeaMessage } as TeaMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tea = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TeaMessage {
    const message = { ...baseTeaMessage } as TeaMessage;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = String(object.tea);
    } else {
      message.tea = '';
    }
    return message;
  },

  toJSON(message: TeaMessage): unknown {
    const obj: any = {};
    message.tea !== undefined && (obj.tea = message.tea);
    return obj;
  },

  fromPartial(object: DeepPartial<TeaMessage>): TeaMessage {
    const message = { ...baseTeaMessage } as TeaMessage;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = object.tea;
    } else {
      message.tea = '';
    }
    return message;
  },
};

const baseUPNMessage: object = { upn: '' };

export const UPNMessage = {
  encode(
    message: UPNMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upn !== '') {
      writer.uint32(10).string(message.upn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UPNMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUPNMessage } as UPNMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UPNMessage {
    const message = { ...baseUPNMessage } as UPNMessage;
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = String(object.upn);
    } else {
      message.upn = '';
    }
    return message;
  },

  toJSON(message: UPNMessage): unknown {
    const obj: any = {};
    message.upn !== undefined && (obj.upn = message.upn);
    return obj;
  },

  fromPartial(object: DeepPartial<UPNMessage>): UPNMessage {
    const message = { ...baseUPNMessage } as UPNMessage;
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = object.upn;
    } else {
      message.upn = '';
    }
    return message;
  },
};

const baseUpdateUnitReq: object = { id: '' };

export const UpdateUnitReq = {
  encode(
    message: UpdateUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.unitProperties !== undefined) {
      UnitProperties.encode(
        message.unitProperties,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.unitProperties = UnitProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUnitReq {
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.unitProperties !== undefined && object.unitProperties !== null) {
      message.unitProperties = UnitProperties.fromJSON(object.unitProperties);
    } else {
      message.unitProperties = undefined;
    }
    return message;
  },

  toJSON(message: UpdateUnitReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.unitProperties !== undefined &&
      (obj.unitProperties = message.unitProperties
        ? UnitProperties.toJSON(message.unitProperties)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateUnitReq>): UpdateUnitReq {
    const message = { ...baseUpdateUnitReq } as UpdateUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.unitProperties !== undefined && object.unitProperties !== null) {
      message.unitProperties = UnitProperties.fromPartial(
        object.unitProperties
      );
    } else {
      message.unitProperties = undefined;
    }
    return message;
  },
};

const baseDeleteUnitReq: object = { id: '' };

export const DeleteUnitReq = {
  encode(
    message: DeleteUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUnitReq {
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: DeleteUnitReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteUnitReq>): DeleteUnitReq {
    const message = { ...baseDeleteUnitReq } as DeleteUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetUnitReq: object = { id: '' };

export const GetUnitReq = {
  encode(
    message: GetUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUnitReq } as GetUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUnitReq {
    const message = { ...baseGetUnitReq } as GetUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: GetUnitReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUnitReq>): GetUnitReq {
    const message = { ...baseGetUnitReq } as GetUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseAddUnitReq: object = {
  id: '',
  name: '',
  prefix: '',
  oldDomainSuffix: '',
  newDomainSuffix: '',
  currentCounter: 0,
  hierarchy: '',
};

export const AddUnitReq = {
  encode(
    message: AddUnitReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== '') {
      writer.uint32(26).string(message.prefix);
    }
    if (message.oldDomainSuffix !== '') {
      writer.uint32(34).string(message.oldDomainSuffix);
    }
    if (message.newDomainSuffix !== '') {
      writer.uint32(42).string(message.newDomainSuffix);
    }
    if (message.currentCounter !== 0) {
      writer.uint32(48).int32(message.currentCounter);
    }
    if (message.hierarchy !== '') {
      writer.uint32(58).string(message.hierarchy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUnitReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddUnitReq } as AddUnitReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.oldDomainSuffix = reader.string();
          break;
        case 5:
          message.newDomainSuffix = reader.string();
          break;
        case 6:
          message.currentCounter = reader.int32();
          break;
        case 7:
          message.hierarchy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddUnitReq {
    const message = { ...baseAddUnitReq } as AddUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = '';
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = String(object.oldDomainSuffix);
    } else {
      message.oldDomainSuffix = '';
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = String(object.newDomainSuffix);
    } else {
      message.newDomainSuffix = '';
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = Number(object.currentCounter);
    } else {
      message.currentCounter = 0;
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = '';
    }
    return message;
  },

  toJSON(message: AddUnitReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.oldDomainSuffix !== undefined &&
      (obj.oldDomainSuffix = message.oldDomainSuffix);
    message.newDomainSuffix !== undefined &&
      (obj.newDomainSuffix = message.newDomainSuffix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<AddUnitReq>): AddUnitReq {
    const message = { ...baseAddUnitReq } as AddUnitReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = '';
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = object.oldDomainSuffix;
    } else {
      message.oldDomainSuffix = '';
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = object.newDomainSuffix;
    } else {
      message.newDomainSuffix = '';
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = 0;
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = '';
    }
    return message;
  },
};

const baseUnit: object = {
  id: '',
  name: '',
  prefix: '',
  oldDomainSuffix: '',
  newDomainSuffix: '',
  currentCounter: 0,
  teaInProgress: '',
  failedTea: '',
  createdAt: 0,
  hierarchy: '',
};

export const Unit = {
  encode(message: Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== '') {
      writer.uint32(26).string(message.prefix);
    }
    if (message.oldDomainSuffix !== '') {
      writer.uint32(34).string(message.oldDomainSuffix);
    }
    if (message.newDomainSuffix !== '') {
      writer.uint32(42).string(message.newDomainSuffix);
    }
    if (message.currentCounter !== 0) {
      writer.uint32(48).int32(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(66).string(v!);
    }
    if (message.createdAt !== 0) {
      writer.uint32(72).int64(message.createdAt);
    }
    if (message.hierarchy !== '') {
      writer.uint32(82).string(message.hierarchy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.oldDomainSuffix = reader.string();
          break;
        case 5:
          message.newDomainSuffix = reader.string();
          break;
        case 6:
          message.currentCounter = reader.int32();
          break;
        case 7:
          message.teaInProgress.push(reader.string());
          break;
        case 8:
          message.failedTea.push(reader.string());
          break;
        case 9:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.hierarchy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Unit {
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = '';
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = String(object.oldDomainSuffix);
    } else {
      message.oldDomainSuffix = '';
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = String(object.newDomainSuffix);
    } else {
      message.newDomainSuffix = '';
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = Number(object.currentCounter);
    } else {
      message.currentCounter = 0;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(String(e));
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(String(e));
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = '';
    }
    return message;
  },

  toJSON(message: Unit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.oldDomainSuffix !== undefined &&
      (obj.oldDomainSuffix = message.oldDomainSuffix);
    message.newDomainSuffix !== undefined &&
      (obj.newDomainSuffix = message.newDomainSuffix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    if (message.teaInProgress) {
      obj.teaInProgress = message.teaInProgress.map((e) => e);
    } else {
      obj.teaInProgress = [];
    }
    if (message.failedTea) {
      obj.failedTea = message.failedTea.map((e) => e);
    } else {
      obj.failedTea = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<Unit>): Unit {
    const message = { ...baseUnit } as Unit;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = '';
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = object.oldDomainSuffix;
    } else {
      message.oldDomainSuffix = '';
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = object.newDomainSuffix;
    } else {
      message.newDomainSuffix = '';
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = 0;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(e);
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(e);
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = '';
    }
    return message;
  },
};

const baseUnitProperties: object = {
  oldDomainSuffix: '',
  newDomainSuffix: '',
  teaInProgress: '',
  failedTea: '',
  hierarchy: '',
};

export const UnitProperties = {
  encode(
    message: UnitProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.prefix !== undefined) {
      writer.uint32(26).string(message.prefix);
    }
    if (message.oldDomainSuffix !== '') {
      writer.uint32(34).string(message.oldDomainSuffix);
    }
    if (message.newDomainSuffix !== '') {
      writer.uint32(42).string(message.newDomainSuffix);
    }
    if (message.currentCounter !== undefined) {
      writer.uint32(50).string(message.currentCounter);
    }
    for (const v of message.teaInProgress) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.failedTea) {
      writer.uint32(66).string(v!);
    }
    if (message.hierarchy !== '') {
      writer.uint32(74).string(message.hierarchy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.oldDomainSuffix = reader.string();
          break;
        case 5:
          message.newDomainSuffix = reader.string();
          break;
        case 6:
          message.currentCounter = reader.string();
          break;
        case 7:
          message.teaInProgress.push(reader.string());
          break;
        case 8:
          message.failedTea.push(reader.string());
          break;
        case 9:
          message.hierarchy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitProperties {
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = undefined;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = undefined;
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = String(object.oldDomainSuffix);
    } else {
      message.oldDomainSuffix = '';
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = String(object.newDomainSuffix);
    } else {
      message.newDomainSuffix = '';
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = String(object.currentCounter);
    } else {
      message.currentCounter = undefined;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(String(e));
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(String(e));
      }
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = String(object.hierarchy);
    } else {
      message.hierarchy = '';
    }
    return message;
  },

  toJSON(message: UnitProperties): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.oldDomainSuffix !== undefined &&
      (obj.oldDomainSuffix = message.oldDomainSuffix);
    message.newDomainSuffix !== undefined &&
      (obj.newDomainSuffix = message.newDomainSuffix);
    message.currentCounter !== undefined &&
      (obj.currentCounter = message.currentCounter);
    if (message.teaInProgress) {
      obj.teaInProgress = message.teaInProgress.map((e) => e);
    } else {
      obj.teaInProgress = [];
    }
    if (message.failedTea) {
      obj.failedTea = message.failedTea.map((e) => e);
    } else {
      obj.failedTea = [];
    }
    message.hierarchy !== undefined && (obj.hierarchy = message.hierarchy);
    return obj;
  },

  fromPartial(object: DeepPartial<UnitProperties>): UnitProperties {
    const message = { ...baseUnitProperties } as UnitProperties;
    message.teaInProgress = [];
    message.failedTea = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = undefined;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = undefined;
    }
    if (
      object.oldDomainSuffix !== undefined &&
      object.oldDomainSuffix !== null
    ) {
      message.oldDomainSuffix = object.oldDomainSuffix;
    } else {
      message.oldDomainSuffix = '';
    }
    if (
      object.newDomainSuffix !== undefined &&
      object.newDomainSuffix !== null
    ) {
      message.newDomainSuffix = object.newDomainSuffix;
    } else {
      message.newDomainSuffix = '';
    }
    if (object.currentCounter !== undefined && object.currentCounter !== null) {
      message.currentCounter = object.currentCounter;
    } else {
      message.currentCounter = undefined;
    }
    if (object.teaInProgress !== undefined && object.teaInProgress !== null) {
      for (const e of object.teaInProgress) {
        message.teaInProgress.push(e);
      }
    }
    if (object.failedTea !== undefined && object.failedTea !== null) {
      for (const e of object.failedTea) {
        message.failedTea.push(e);
      }
    }
    if (object.hierarchy !== undefined && object.hierarchy !== null) {
      message.hierarchy = object.hierarchy;
    } else {
      message.hierarchy = '';
    }
    return message;
  },
};

const baseReportTeaReq: object = { tea: '' };

export const ReportTeaReq = {
  encode(
    message: ReportTeaReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tea !== '') {
      writer.uint32(10).string(message.tea);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportTeaReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReportTeaReq } as ReportTeaReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tea = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReportTeaReq {
    const message = { ...baseReportTeaReq } as ReportTeaReq;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = String(object.tea);
    } else {
      message.tea = '';
    }
    return message;
  },

  toJSON(message: ReportTeaReq): unknown {
    const obj: any = {};
    message.tea !== undefined && (obj.tea = message.tea);
    return obj;
  },

  fromPartial(object: DeepPartial<ReportTeaReq>): ReportTeaReq {
    const message = { ...baseReportTeaReq } as ReportTeaReq;
    if (object.tea !== undefined && object.tea !== null) {
      message.tea = object.tea;
    } else {
      message.tea = '';
    }
    return message;
  },
};

const baseSuccessMessage: object = { success: false };

export const SuccessMessage = {
  encode(
    message: SuccessMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSuccessMessage } as SuccessMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },

  toJSON(message: SuccessMessage): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial(object: DeepPartial<SuccessMessage>): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
};

const baseRetrieveByEntityReq: object = { domain: 0 };

export const RetrieveByEntityReq = {
  encode(
    message: RetrieveByEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.entity !== undefined) {
      EntityMin.encode(message.entity, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveByEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveByEntityReq } as RetrieveByEntityReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.entity = EntityMin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveByEntityReq {
    const message = { ...baseRetrieveByEntityReq } as RetrieveByEntityReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = domainFromJSON(object.domain);
    } else {
      message.domain = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = EntityMin.fromJSON(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },

  toJSON(message: RetrieveByEntityReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.entity !== undefined &&
      (obj.entity = message.entity
        ? EntityMin.toJSON(message.entity)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RetrieveByEntityReq>): RetrieveByEntityReq {
    const message = { ...baseRetrieveByEntityReq } as RetrieveByEntityReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = 0;
    }
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = EntityMin.fromPartial(object.entity);
    } else {
      message.entity = undefined;
    }
    return message;
  },
};

const baseRetrieveByEntityIdReq: object = { domain: 0, entityId: '' };

export const RetrieveByEntityIdReq = {
  encode(
    message: RetrieveByEntityIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).int32(message.domain);
    }
    if (message.entityId !== '') {
      writer.uint32(18).string(message.entityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RetrieveByEntityIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRetrieveByEntityIdReq } as RetrieveByEntityIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.int32() as any;
          break;
        case 2:
          message.entityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetrieveByEntityIdReq {
    const message = { ...baseRetrieveByEntityIdReq } as RetrieveByEntityIdReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = domainFromJSON(object.domain);
    } else {
      message.domain = 0;
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = '';
    }
    return message;
  },

  toJSON(message: RetrieveByEntityIdReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = domainToJSON(message.domain));
    message.entityId !== undefined && (obj.entityId = message.entityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RetrieveByEntityIdReq>
  ): RetrieveByEntityIdReq {
    const message = { ...baseRetrieveByEntityIdReq } as RetrieveByEntityIdReq;
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = 0;
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = '';
    }
    return message;
  },
};

const baseEntityMin: object = { entityType: '', akaUnit: '' };

export const EntityMin = {
  encode(
    message: EntityMin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityType !== '') {
      writer.uint32(10).string(message.entityType);
    }
    if (message.akaUnit !== '') {
      writer.uint32(18).string(message.akaUnit);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(26).string(message.personalNumber);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(34).string(message.identityCard);
    }
    if (message.goalUserID !== undefined) {
      writer.uint32(42).string(message.goalUserID);
    }
    if (message.firstName !== undefined) {
      writer.uint32(50).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(58).string(message.lastName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityMin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntityMin } as EntityMin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityType = reader.string();
          break;
        case 2:
          message.akaUnit = reader.string();
          break;
        case 3:
          message.personalNumber = reader.string();
          break;
        case 4:
          message.identityCard = reader.string();
          break;
        case 5:
          message.goalUserID = reader.string();
          break;
        case 6:
          message.firstName = reader.string();
          break;
        case 7:
          message.lastName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMin {
    const message = { ...baseEntityMin } as EntityMin;
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = '';
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = '';
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = undefined;
    }
    if (object.goalUserID !== undefined && object.goalUserID !== null) {
      message.goalUserID = String(object.goalUserID);
    } else {
      message.goalUserID = undefined;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = undefined;
    }
    return message;
  },

  toJSON(message: EntityMin): unknown {
    const obj: any = {};
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.goalUserID !== undefined && (obj.goalUserID = message.goalUserID);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityMin>): EntityMin {
    const message = { ...baseEntityMin } as EntityMin;
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = '';
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = '';
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.goalUserID !== undefined && object.goalUserID !== null) {
      message.goalUserID = object.goalUserID;
    } else {
      message.goalUserID = undefined;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = undefined;
    }
    return message;
  },
};

export interface Tea {
  RetrieveTeaByUnit(request: RetrieveTeaByUnitReq): Promise<TeaMessage>;
  RetrieveUPNByEntity(request: RetrieveByEntityReq): Promise<UPNMessage>;
  RetrieveUPNByEntityId(request: RetrieveByEntityIdReq): Promise<UPNMessage>;
  ReportTeaSuccess(request: ReportTeaReq): Promise<SuccessMessage>;
  ReportTeaFail(request: ReportTeaReq): Promise<SuccessMessage>;
  GetUnit(request: GetUnitReq): Promise<Unit>;
  AddUnit(request: AddUnitReq): Promise<Unit>;
  UpdateUnit(request: UpdateUnitReq): Promise<Unit>;
  DeleteUnit(request: DeleteUnitReq): Promise<SuccessMessage>;
  GetAllUnits(request: GetAllUnitsReq): Promise<MinUnitArray>;
  SearchUnit(request: SearchUnitReq): Promise<MinUnitArray>;
}

export class TeaClientImpl implements Tea {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RetrieveTeaByUnit = this.RetrieveTeaByUnit.bind(this);
    this.RetrieveUPNByEntity = this.RetrieveUPNByEntity.bind(this);
    this.RetrieveUPNByEntityId = this.RetrieveUPNByEntityId.bind(this);
    this.ReportTeaSuccess = this.ReportTeaSuccess.bind(this);
    this.ReportTeaFail = this.ReportTeaFail.bind(this);
    this.GetUnit = this.GetUnit.bind(this);
    this.AddUnit = this.AddUnit.bind(this);
    this.UpdateUnit = this.UpdateUnit.bind(this);
    this.DeleteUnit = this.DeleteUnit.bind(this);
    this.GetAllUnits = this.GetAllUnits.bind(this);
    this.SearchUnit = this.SearchUnit.bind(this);
  }
  RetrieveTeaByUnit(request: RetrieveTeaByUnitReq): Promise<TeaMessage> {
    const data = RetrieveTeaByUnitReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'RetrieveTeaByUnit', data);
    return promise.then((data) => TeaMessage.decode(new _m0.Reader(data)));
  }

  RetrieveUPNByEntity(request: RetrieveByEntityReq): Promise<UPNMessage> {
    const data = RetrieveByEntityReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'RetrieveUPNByEntity', data);
    return promise.then((data) => UPNMessage.decode(new _m0.Reader(data)));
  }

  RetrieveUPNByEntityId(request: RetrieveByEntityIdReq): Promise<UPNMessage> {
    const data = RetrieveByEntityIdReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'RetrieveUPNByEntityId', data);
    return promise.then((data) => UPNMessage.decode(new _m0.Reader(data)));
  }

  ReportTeaSuccess(request: ReportTeaReq): Promise<SuccessMessage> {
    const data = ReportTeaReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'ReportTeaSuccess', data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  ReportTeaFail(request: ReportTeaReq): Promise<SuccessMessage> {
    const data = ReportTeaReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'ReportTeaFail', data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetUnit(request: GetUnitReq): Promise<Unit> {
    const data = GetUnitReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'GetUnit', data);
    return promise.then((data) => Unit.decode(new _m0.Reader(data)));
  }

  AddUnit(request: AddUnitReq): Promise<Unit> {
    const data = AddUnitReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'AddUnit', data);
    return promise.then((data) => Unit.decode(new _m0.Reader(data)));
  }

  UpdateUnit(request: UpdateUnitReq): Promise<Unit> {
    const data = UpdateUnitReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'UpdateUnit', data);
    return promise.then((data) => Unit.decode(new _m0.Reader(data)));
  }

  DeleteUnit(request: DeleteUnitReq): Promise<SuccessMessage> {
    const data = DeleteUnitReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'DeleteUnit', data);
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetAllUnits(request: GetAllUnitsReq): Promise<MinUnitArray> {
    const data = GetAllUnitsReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'GetAllUnits', data);
    return promise.then((data) => MinUnitArray.decode(new _m0.Reader(data)));
  }

  SearchUnit(request: SearchUnitReq): Promise<MinUnitArray> {
    const data = SearchUnitReq.encode(request).finish();
    const promise = this.rpc.request('Tea.Tea', 'SearchUnit', data);
    return promise.then((data) => MinUnitArray.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
