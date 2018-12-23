import { Injectable, OnInit } from '@angular/core';
import { Text, asString } from 'src/app/__models/text';

const sampleText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";
const toLetter = char => { return { value: char, isMistyped: false, isReached: false }};

@Injectable({
  providedIn: 'root'
})
export class TextService {
  current: Text;

  constructor() {
    this.loadText();
  }

  private loadText() {
    this.current = {
      letters: sampleText.split('').map(toLetter)
    }
  }

  refresh() {
    this.loadText();
  }

  typed(typedText: string) {
    this.checkTypedLetters(typedText.split(''));
    this.unreachRemainingText(typedText);
  }

  matches(typedText: string): boolean {
    return typedText === asString(this.current);
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
