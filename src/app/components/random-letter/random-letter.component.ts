import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-random-letter',
  templateUrl: './random-letter.component.html',
  styleUrls: ['./random-letter.component.scss']
})
export class RandomLetterComponent implements OnInit {

text = 'jakub salamon';
textArray: string[] = this.text.split('');
data = this.text.split('');
// tslint:disable-next-line:variable-name
gucio(number) {
  let data = '';
  if (number === 3) {
    data = 'sarmata';
  }
  return data;
}

  constructor() { }

  ngOnInit() {
  }

}
