import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Challenge {

  constructor() { }

  start() {

  }

  finish() {
    window.alert('finished!');
  }
}
