import { RoleArray } from '../interfaces/protoc/proto/kartoffelService';

export function getNextSuggestion(jobTitle: string): string {
  let lastNumberString = '';
  let i = jobTitle.length - 1;
  while (jobTitle[i] >= '0' && jobTitle[i] <= '9') {
    lastNumberString = jobTitle[i] + lastNumberString;
    i--;
  }
  if (lastNumberString === '') {
    return `${jobTitle} 1`;
  } else {
    return `${jobTitle.substring(0, i + 1)}${parseInt(lastNumberString) + 1}`;
  }
}

export function jobTitleExists(
  roleArray: RoleArray,
  jobTitle: string
): boolean {
  for (let role of roleArray.roles) {
    if (role.jobTitle === jobTitle) {
      return true;
    }
  }
  return false;
}

export function getSuggestions(
  roleArray: RoleArray,
  jobTitle: string
): string[] {
  let suggestions = [];
  let suggestion = jobTitle;
  while (suggestions.length < 5) {
    suggestion = getNextSuggestion(suggestion);
    if (!jobTitleExists(roleArray, suggestion)) {
      suggestions.push(suggestion);
    }
  }
  return suggestions;
}
