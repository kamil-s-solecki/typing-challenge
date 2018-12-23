import { Injectable } from '@angular/core';
import { ChallengeResult } from 'src/app/__models/challengeResult';

@Injectable({
  providedIn: 'root'
})
export class Challenge {
  private startTime: number;
  private charactersToType: number;

  constructor() { }

  start(charactersToType: number) {
    console.log('START!')
    this.charactersToType = charactersToType;
    this.startTime = window.performance.now();
    console.log(this.startTime);
  }

  finish() {
    const finishTime = window.performance.now();
    const result: ChallengeResult = {
      miliseconds: finishTime - this.startTime,
      typedCharacters: this.charactersToType,
    }
    window.alert(`finished in ${result.miliseconds} miliseconds, typed ${result.typedCharacters} chars`);
  }
}
