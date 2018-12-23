import { Letter } from "./letter";

export interface Text {
  letters: Letter[],
}

export function asString(text: Text) {
  return text.letters.map((letter: Letter) => letter.value).join('');
}