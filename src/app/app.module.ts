import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InitPageComponent } from './components/init-page/init-page.component';
import { RandomLetterComponent } from './components/random-letter/random-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InitPageComponent,
    RandomLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
