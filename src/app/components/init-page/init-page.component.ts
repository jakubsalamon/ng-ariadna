import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.scss']
})
export class InitPageComponent implements OnInit {

  constructor(private router: Router ) {
  }

  backgroundOnInit = 'init-bcg-on';
  logoTextFirst = 'logo__text-first-init';
  logoTextSecond = 'logo__text-sec-init';
  logoTextThird = 'logo__text-third-init';

  ngOnInit(): void {
    setTimeout(() => {
      this.backgroundOnInit = 'init-bcg-off';
      this.logoTextFirst = 'logo__text-first';
      this.logoTextSecond = 'logo__text-sec';
    }, 400);
    setTimeout(() => this.logoTextThird = 'logo__text-third', 3000);
  }

  exitInitPageHandler() {
    setTimeout(() => {
      this.backgroundOnInit = 'init-bcg-out';
    }, 1000);
    setTimeout(() => {
    this.router.navigate(['/', 'home']);
    }, 4000);
  }

}
