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
    this.charactersToType = charactersToType;
    this.startTime = window.performance.now();
  }

  finish(): ChallengeResult {
    const finishTime = window.performance.now();
    const result: ChallengeResult = {
      miliseconds: finishTime - this.startTime,
      typedCharacters: this.charactersToType,
    }
    return result;
  }
}
