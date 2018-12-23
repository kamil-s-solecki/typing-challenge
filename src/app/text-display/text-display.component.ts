import { Component, OnInit } from '@angular/core';
import { TextService } from '../__services/text/text.service';
import { Text } from '../__models/text';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {
  text: Text;

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.text = this.textService.current;
  }

}
