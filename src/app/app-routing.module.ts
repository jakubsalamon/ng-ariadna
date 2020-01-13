import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {InitPageComponent} from './components/init-page/init-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: InitPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
