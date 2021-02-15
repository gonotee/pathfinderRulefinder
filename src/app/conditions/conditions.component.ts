/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ThemeService} from '../theme-service/theme.service';
import {Observable} from 'rxjs';
import data from '../conditions-pf2.json';
import {AngularFireFunctions} from '@angular/fire/functions';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
})
export class ConditionsComponent implements OnInit {
  conditionsCollection: AngularFirestoreCollection<any>;
  conditions: Observable<any>;
  searchLoaded: Promise<boolean>;
  names;
  sortType;
  config;

  constructor(private afs: AngularFirestore, private themeService: ThemeService, private fns: AngularFireFunctions) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

   isDarkMode: boolean;

   toggleDarkMode() {
     this.isDarkMode = this.themeService.isDarkMode();

     this.isDarkMode ? this.themeService.updateTheme('custom-light-theme') : this.themeService.updateTheme('custom-dark-theme');
   }

   ngOnInit(): void {
     const callable = this.fns.httpsCallable('getSecureKey');
     this.sortType = 'pathfinderConditions';
     callable({restrictedIndex: this.sortType}).subscribe((data) => {
       this.config = {
         apiKey: data.key,
         appId: 'HJN7F66MDX',
         indexName: this.sortType,
         routing: true,
       };
       this.searchLoaded = Promise.resolve(true);
     });
     this.conditionsCollection = this.afs.collection('conditions');
     this.conditions = this.conditionsCollection.valueChanges();
   }

   addData(): void {
     data.forEach((element) => {
       const addable = {
         name: '',
         text: '',
         source: '',
       };
       if (element.name) {
         addable.name = element.name;
       }
       if (element.text) {
         addable.text = element.text[0];
       }
       if (element.source) {
         addable.source = element.source;
       }
       this.conditionsCollection.add(addable);
       console.log('Condition Added');
     });
   }
}
