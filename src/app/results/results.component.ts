import { Component, OnInit } from '@angular/core';
import { ChallengeResult } from '../__models/challengeResult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  result: ChallengeResult = {
    miliseconds: 3000,
    typedCharacters: 250,
  }
  constructor() { }

  ngOnInit() {
  }

}
