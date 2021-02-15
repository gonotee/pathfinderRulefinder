/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ThemeService} from '../theme-service/theme.service';
import {Observable} from 'rxjs';
import data from '../conditions-pf2.json';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
})
export class ConditionsComponent implements OnInit {
  conditionsCollection: AngularFirestoreCollection<any>;
  conditions: Observable<any>;

  names;
  sortType;
  config;

  constructor(private afs: AngularFirestore, private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

   isDarkMode: boolean;

   toggleDarkMode() {
     this.isDarkMode = this.themeService.isDarkMode();

     this.isDarkMode ? this.themeService.updateTheme('custom-light-theme') : this.themeService.updateTheme('custom-dark-theme');
   }

   ngOnInit(): void {
     this.conditionsCollection = this.afs.collection('conditions');
     this.conditions = this.conditionsCollection.valueChanges();
     this.sortType = 'Relevance';
     this.config = {
       apiKey: '6a279064ee8ee83c68baa78bc0e83dbd',
       appId: 'HJN7F66MDX',
       indexName: this.sortType,
       routing: true,
     };
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
