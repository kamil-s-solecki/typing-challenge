import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Challenge {
  private startTime: number;

  constructor() { }

  start() {
    console.log('START!')
    this.startTime = window.performance.now();
    console.log(this.startTime);
  }

  finish() {
    const finishTime = window.performance.now();
    window.alert(`finished in ${finishTime - this.startTime} miliseconds`);
  }
}
