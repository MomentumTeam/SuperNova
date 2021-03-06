import * as C from '../config';
export function fillEntityFields(entity: any): void {
  try {
    if (!entity.digitalIdentities || entity.digitalIdentities.length === 0) {
      return;
    }
    const di = entity.digitalIdentities.find((di: any) =>
      C.diSources.includes(di.source)
    );
    if (di) {
      const role = di.role;
      if (role) {
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
        entity.displayName =
          entity.displayName && entity.displayName.length > 0
            ? entity.displayName
            : role.displayName;
      } else {
        entity.displayName = entity.fullName;
      }
    }
  } catch (error) {
    throw error;
  }
}
