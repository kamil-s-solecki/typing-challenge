import { Component, OnInit } from '@angular/core';
import { TextService } from '../__services/text/text.service';
import { Challenge } from '../__services/challenge/challenge';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  typedText: string;
  private challengeStarted;

  constructor(private textService: TextService,
              private challenge: Challenge) { 
  }

  ngOnInit() {
    this.challengeStarted = false;
  }

  onChange() {
    this.startChallengeIfNotStarted();
    this.textService.typed(this.typedText);
    this.finishChallengeIfTypedTextMatches();
  }

  private startChallengeIfNotStarted() {
    if (!this.challengeStarted) {
      this.challengeStarted = true;
      this.challenge.start(this.textService.current.letters.length);
    }
  }

  private finishChallengeIfTypedTextMatches() {
    if (this.textService.matches(this.typedText)) {
      this.challenge.finish();
    }
  }
}
