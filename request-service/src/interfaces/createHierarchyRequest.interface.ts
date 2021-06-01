export interface ICreateHierarchyRequest {
  _id: string;
  type: string;
  newChild: string;
  parent: {
    id: string;
    hierarchy: string;
  };
  submittedBy: string;
  commanderApproved: boolean;
  securityApproved: boolean;
  commanders: Array<string>;
  createdAt: Number;
  updatedAt: Number;
}

export function getCreateHierarchyRequest() {}
