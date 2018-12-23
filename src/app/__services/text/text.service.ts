import { Injectable, OnInit } from '@angular/core';
import { Text, asString } from 'src/app/__models/text';
import { texts } from 'src/app/__data/texts';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  current: Text;

  constructor() {
    this.loadText();
  }

  private loadText() {
    const randomIndex = Math.floor(Math.random() * Math.floor(texts.length));
    this.current = texts[randomIndex];
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
