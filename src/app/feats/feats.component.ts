/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ThemeService} from '../theme-service/theme.service';
import {Observable} from 'rxjs';
import data from '../feats-pf2-v2.json';
import {AngularFireFunctions} from '@angular/fire/functions';

@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrls: ['./feats.component.css'],
})
export class FeatsComponent implements OnInit {
  featsCollection: AngularFirestoreCollection<any>;
  feats: Observable<any>;
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
    this.sortType = 'pathfinderFeats';
    callable({restrictedIndex: this.sortType}).subscribe((data) => {
      this.config = {
        apiKey: data.key,
        appId: 'HJN7F66MDX',
        indexName: this.sortType,
        routing: true,
      };
      this.searchLoaded = Promise.resolve(true);
    });
    this.featsCollection = this.afs.collection('feats');
    this.feats = this.featsCollection.valueChanges();
  }

  addData(): void {
    data.baseFeats.generalFeats.forEach((element) => {
      const addable = {
        name: '',
        level: '',
        traits: [],
        link: '',
        prerequisites: '',
        benefits: '',
        text: '',
      };
      if (element.name) {
        addable.name = element.name;
      }
      if (element.level) {
        addable.level = element.level.toString();
      }
      if (element.traits) {
        addable.traits = element.traits;
      }
      if (element.link) {
        addable.link = element.link;
      }
      if (element.prerequisites) {
        addable.prerequisites = element.prerequisites;
      }
      if (element.benefits) {
        addable.benefits = element.benefits;
      }
      if (element.text) {
        addable.text = element.text;
      }
      this.featsCollection.add(addable);
      console.log('Condition Added');
    });
  }
}
