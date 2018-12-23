import { Injectable } from '@angular/core';
import { Text } from 'src/app/__models/text';
import { Letter } from 'src/app/__models/letter';

const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at facilisis eros. Aenean imperdiet dictum luctus. Maecenas metus velit, feugiat nec dui quis, ullamcorper aliquet ipsum.';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private text: Text;

  constructor() {
    const toLetter = char => { return { value: char, isMistyped: false, isReached: false }};
    this.text = {
      letters: sampleText.split('').map(toLetter)
    }
    this.text.letters.slice(0, 20).forEach((letter: Letter) => letter.isReached = true);
    [17, 3, 8, 9].map(index => this.text.letters[index]).forEach((letter: Letter) => letter.isMistyped = true);
  }

  current(): Text {
    return this.text;
  }
}
