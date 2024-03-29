/* eslint-disable require-jsdoc */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchComponentComponent} from './search-component/search-component.component';

import {NgAisModule} from 'angular-instantsearch';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RefinementListComponent} from './refinement-list/refinement-list.component';
import {SortByComponent} from './sort-by/sort-by.component';
import {ToggleComponent} from './toggle/toggle.component';
import {ToggleArcaneComponent} from './toggle-arcane/toggle-arcane.component';
import {FormsModule} from '@angular/forms';
import {ConditionsComponent} from './conditions/conditions.component';
import {FeatsComponent} from './feats/feats.component';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {MobileSpellsComponent} from './mobile-spells/mobile-spells.component';
import {CommonModule} from '@angular/common';


const firebaseConfig = {
  apiKey: 'AIzaSyCVP39hzZOXwdTJWFKHUMsphsCRdSieOnE',
  authDomain: 'pathfinder-rulefinder.firebaseapp.com',
  databaseURL: 'https://pathfinder-rulefinder.firebaseio.com',
  projectId: 'pathfinder-rulefinder',
  storageBucket: 'pathfinder-rulefinder.appspot.com',
  messagingSenderId: '1009375170406',
  appId: '1:1009375170406:web:fb892ab5a8463edcb2c2a7',
  measurementId: 'G-VGDYJ6SZQY',
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    RefinementListComponent,
    SortByComponent,
    ToggleComponent,
    ToggleArcaneComponent,
    ConditionsComponent,
    FeatsComponent,
    MobileSpellsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
    NgAisModule.forRoot(),
    MatExpansionModule,
    MatChipsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

