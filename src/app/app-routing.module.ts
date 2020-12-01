/* eslint-disable require-jsdoc */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponentComponent} from './search-component/search-component.component';

const routes: Routes = [
  {path: '', component: SearchComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
