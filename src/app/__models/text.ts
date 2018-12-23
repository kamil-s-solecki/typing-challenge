import { Letter } from "./letter";

export interface Text {
  letters: Letter[],
}

export function asString(text: Text): string {
  return text.letters.map((letter: Letter) => letter.value).join('');
}

const toLetter = char => { return { value: char, isMistyped: false, isReached: false }};

export function fromString(str: string): Text {
  return {
    letters: str.split('').map(toLetter),
  }
}