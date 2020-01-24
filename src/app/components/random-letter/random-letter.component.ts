import {Component, Input, OnInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-random-letter',
  templateUrl: './random-letter.component.html',
  styleUrls: ['./random-letter.component.scss']
})
export class RandomLetterComponent implements OnInit, AfterViewChecked {

text = 'jakub salaamon';
textArray: string[] = this.text.split('');
arrayLength: number = this.textArray.length;
randomNumber = 4;

ngAfterViewChecked(): void {

}
spaceFinder() {
  return this.textArray.map((el, index) => el === ' ' ? index : '' ).filter(Number);
}

madeRandomNumber(min = 0, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

pickNewRedLetter() {
  let spacePositions = this.spaceFinder();
  let newRandomNumber = this.madeRandomNumber(0, this.arrayLength);

  while (newRandomNumber === this.randomNumber) {
    newRandomNumber = this.madeRandomNumber(0, this.arrayLength);
  }
  console.log(newRandomNumber)
  this.randomNumber = newRandomNumber;
}

  constructor() {
  }

  ngOnInit() {
    this.spaceFinder();
    setInterval(() => this.pickNewRedLetter(), 6000);
  }

}
