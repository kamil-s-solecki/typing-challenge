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
  private challengeStarted = false;

  constructor(private textService: TextService,
              private challenge: Challenge) { 
  }

  ngOnInit() {
  }

  onChange() {
    if (!this.challengeStarted) {
      this.challengeStarted = true;
      this.challenge.start();
    }
    this.textService.typed(this.typedText);
    if (this.textService.matches(this.typedText)) {
      this.challenge.finish();
    }
  }
}
