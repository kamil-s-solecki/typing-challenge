import { Letter } from "./letter";

export interface Text {
  letters: Letter[],
  description: string,
}

export function asString(text: Text): string {
  return text.letters.map((letter: Letter) => letter.value).join('');
}

const toLetter = char => { return { value: char, isMistyped: false, isReached: false }};

export function fromString(value: string, description: string): Text {
  return {
    letters: value.split('').map(toLetter),
    description
  }
}