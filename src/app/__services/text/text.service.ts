import { Injectable } from '@angular/core';
import { Text } from 'src/app/__models/text';

const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at facilisis eros. Aenean imperdiet dictum luctus. Maecenas metus velit, feugiat nec dui quis, ullamcorper aliquet ipsum.';
const toLetter = char => { return { value: char, isMistyped: false, isReached: false }};

@Injectable({
  providedIn: 'root'
})
export class TextService {
  current: Text;

  constructor() {
    this.current = {
      letters: sampleText.split('').map(toLetter)
    }
  }

  typed(typedText: string) {
    this.checkTypedLetters(typedText.split(''));
    this.unreachRemainingText(typedText);
  }

  private checkTypedLetters(textArr: string[]) {
    for (let i = 0; i < textArr.length; i++) {
      const originalLetter = this.current.letters[i];
      originalLetter.isReached = true;
      originalLetter.isMistyped = originalLetter.value != textArr[i];
    }
  }

  private unreachRemainingText(typedText: string) {
    this.current.letters.slice(typedText.length).forEach(letter => letter.isReached = false);
  }
}
