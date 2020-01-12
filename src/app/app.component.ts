import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
  }
}
