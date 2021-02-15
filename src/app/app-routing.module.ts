/* eslint-disable require-jsdoc */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConditionsComponent} from './conditions/conditions.component';
import {FeatsComponent} from './feats/feats.component';

import {SearchComponentComponent} from './search-component/search-component.component';

const routes: Routes = [
  {path: '', component: SearchComponentComponent},
  {path: 'conditions', component: ConditionsComponent},
  {path: 'feats', component: FeatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [ConditionsComponent, SearchComponentComponent, FeatsComponent];
