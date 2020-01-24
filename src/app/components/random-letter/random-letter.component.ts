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

}
spaceFinder() {
  return this.textArray.map((el, index) => el === ' ' ? index : '' ).filter(Number);
}

madeRandomNumber(min = 0, max: number, spacePositions) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let flag = true;
  let returnRandomNumber;

  do {
    returnRandomNumber = lotteryFunction();
    console.log(returnRandomNumber);
    for (let i = 0; i < spacePositions.length; i++) {
      if (returnRandomNumber !== spacePositions[i]) {
        console.log(spacePositions[i]);
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  } while (flag === false);

  function lotteryFunction() {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return returnRandomNumber;
}

pickNewRedLetter() {
  const spacePositions = this.spaceFinder();
  let newRandomNumber = this.madeRandomNumber(0, this.arrayLength, spacePositions);

  while (newRandomNumber === this.randomNumber) {
    newRandomNumber = this.madeRandomNumber(0, this.arrayLength, spacePositions);
  }
  this.randomNumber = newRandomNumber;
}

  constructor() {
  }

  ngOnInit() {
    this.spaceFinder();
    setInterval(() => this.pickNewRedLetter(), 6000);
  }

}
