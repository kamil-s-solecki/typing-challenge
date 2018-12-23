import { Component, OnInit } from '@angular/core';
import { ChallengeResult } from '../__models/challengeResult';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.result = this.route.snapshot.queryParams as ChallengeResult; 
  }

}
