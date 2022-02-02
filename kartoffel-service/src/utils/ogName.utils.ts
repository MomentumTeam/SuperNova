import { OGArray } from '../interfaces/protoc/proto/kartoffelService';
import { getNextSuggestion, isNumeric } from './jobTitles.utils';

export function ogNameExists(ogArray: OGArray, name: string): boolean {
  for (let og of ogArray.groups) {
    if (og.name === name || og.name.replace(/\u200f/g, '') === name) {
      return true;
    }
  }
  return false;
}

export function getOgNameSuggestions(ogArray: OGArray, ogName: string): string[] {
  let suggestions = [];
  let suggestion = "";
  const ogNameSplit: string[] = ogName.replace(/  +/g, " ").split(" ");
  let firstNumIndex: any = ogNameSplit.length - 1;

  for (let i in ogNameSplit) {
    suggestion = suggestion + " " + ogNameSplit[i];
    if (isNumeric(ogNameSplit[i])) {
      firstNumIndex = +i;
      break;
    }
  }
  suggestion = suggestion.trim();
  const suffix = firstNumIndex === ogNameSplit.length - 1 ? "" : ogNameSplit.slice(firstNumIndex + 1).join(" ");
  while (suggestions.length < 5) {
    suggestion = getNextSuggestion(suggestion);
    let newOgName = `${suggestion} ${suffix}`.trim();
    if (!ogNameExists(ogArray, newOgName)) {
      suggestions.push(newOgName);
    }
  }
  return suggestions;
}