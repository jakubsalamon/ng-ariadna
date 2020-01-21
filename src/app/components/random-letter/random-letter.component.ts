import {Component, Input, OnInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-random-letter',
  templateUrl: './random-letter.component.html',
  styleUrls: ['./random-letter.component.scss']
})
export class RandomLetterComponent implements OnInit, AfterViewChecked {

text = 'jakub salamon';
textArray: string[] = this.text.split('');
arrayLength: number = this.textArray.length;
randomNumber = 4;

ngAfterViewChecked(): void {
  console.log('kupa');
  console.log(this.randomNumber);
}

madeRandomNumber(min = 0, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

pickNewRedLetter() {
  let newRandomNumber = this.madeRandomNumber(0, this.arrayLength);
  while (newRandomNumber === this.randomNumber) {
    newRandomNumber = this.madeRandomNumber(0, this.arrayLength);
  }
  this.randomNumber = newRandomNumber;
}

  constructor() {
  }

  ngOnInit() {
    setInterval(() => this.pickNewRedLetter(), 6000);
  }

}
