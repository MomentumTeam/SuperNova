import * as C from '../config';
export function fillEntityFields(entity: any): void {
  try {
    const di = entity.digitalIdentities.find(
      (di: any) => di.source === C.defaultSource
    );
    if (di) {
      const role = di.role;
      entity.mail =
        entity.mail && entity.mail.length > 0 ? entity.mail : di.mail;
      entity.directGroup =
        entity.directGroup && entity.directGroup.length > 0
          ? entity.directGroup
          : role.directGroup;
      entity.hierarchy =
        entity.hierarchy && entity.hierarchy.length > 0
          ? entity.hierarchy
          : role.hierarchy;
      entity.jobTitle =
        entity.jobTitle && entity.jobTitle.length > 0
          ? entity.jobTitle
          : role.jobTitle;
    }
  } catch (error) {
    throw error;
  }
}
