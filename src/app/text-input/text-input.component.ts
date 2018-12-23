import { Component, OnInit } from '@angular/core';
import { TextService } from '../__services/text/text.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  typedText: string;

  constructor(private textService: TextService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.textService.typed(this.typedText);
  }
}
