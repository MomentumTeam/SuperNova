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
  return roleArray.roles.some(
    (role) =>
      role.jobTitle === jobTitle ||
      role.jobTitle.replace(/\u200f/g, '') === jobTitle
  );
}

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}
export function getSuggestions(
  roleArray: RoleArray,
  jobTitle: string
): string[] {
  let suggestions = [];
  // let suggestion = jobTitle;
  let suggestion = '';
  const jobTitleSplit: string[] = jobTitle.replace(/  +/g, ' ').split(' ');
  let firstNumIndex: any = jobTitleSplit.length - 1;
  for (let i in jobTitleSplit) {
    suggestion = suggestion + ' ' + jobTitleSplit[i];
    if (isNumeric(jobTitleSplit[i])) {
      firstNumIndex = +i;
      break;
    }
  }
  suggestion = suggestion.trim();
  const suffix =
    firstNumIndex === jobTitleSplit.length - 1
      ? ''
      : jobTitleSplit.slice(firstNumIndex + 1).join(' ');
  while (suggestions.length < 5) {
    suggestion = getNextSuggestion(suggestion);
    let newJobTitle = `${suggestion} ${suffix}`.trim();
    if (!jobTitleExists(roleArray, newJobTitle)) {
      suggestions.push(newJobTitle);
    }
  }
  return suggestions;
}
