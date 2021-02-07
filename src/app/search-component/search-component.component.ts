/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ThemeService} from '../theme-service/theme.service';
import {Observable} from 'rxjs';
import data from './spells-pf2-v2.json';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponentComponent implements OnInit {
  spellsCollection: AngularFirestoreCollection<any>;
  spells: Observable<any>;

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
    this.spellsCollection = this.afs.collection('spells');
    this.spells = this.spellsCollection.valueChanges();
    this.sortType = 'Relevance';
    this.config = {
      apiKey: '6a279064ee8ee83c68baa78bc0e83dbd',
      appId: 'HJN7F66MDX',
      indexName: this.sortType,
      routing: true,
    };
  }

  findData() {
    data.forEach((element) => {
      if (element.traits.length > 6) {
        console.log(element.name);
      }
    });
  }

  addData(): void {
    data.forEach((element) => {
      const addable = {
        name: '',
        level: '',
        text: '',
        traits: [],
        source: '',
        traditions: [],
        cast: '',
        actions: '',
        range: '',
        area: '',
        targets: '',
        savingthrow: '',
        duration: '',
        heightened: {
          heightened2nd: '',
          heightened3rd: '',
          heightened4th: '',
          heightened5th: '',
          heightened6th: '',
          heightened7th: '',
          heightened8th: '',
          heightened9th: '',
          heightenedplus1: '',
          heightenedplus2: '',
        },
        isArcane: false,
        isDivine: false,
        isOccult: false,
        isPrimal: false,
      };
      if (element.name) {
        console.log(element.name);
        addable.name = element.name;
      }
      if (element.level) {
        console.log(element.level);
        addable.level = element.level as string;
      }
      // Zero Clause For Level
      if (element.level == 0) {
        addable.level = '0';
      }
      if (element.text) {
        // Add to database
        addable.text = element.text;
      }
      if (element.traits) {
        // Add to database
        addable.traits = element.traits;
      }
      if (element.source) {
        // Add to database
        addable.source = element.source;
      }
      if (element.traditions) {
        // Add to database
        addable.traditions = element.traditions.split(', ');
      }
      if (element.traditions.split(', ').includes('arcane')) {
        addable.isArcane = true;
      }
      if (element.traditions.split(', ').includes('divine')) {
        addable.isDivine = true;
      }
      if (element.traditions.split(', ').includes('occult')) {
        addable.isOccult = true;
      }
      if (element.traditions.split(', ').includes('primal')) {
        addable.isPrimal = true;
      }
      if (element.cast) {
        // Add to database
        addable.cast = element.cast;
      }
      if (element.actions) {
        // Add to database
      }
      if (element.range) {
        // Add to database
        addable.range = element.range;
      }
      if (element.area) {
        addable.area = element.area;
      }
      if (element.targets) {
        addable.targets = element.targets;
      }
      if (element.duration) {
        addable.duration = element.duration;
      }
      if (element.heightened2nd) {
        addable.heightened.heightened2nd = element.heightened2nd;
      }
      if (element.heightened3rd) {
        addable.heightened.heightened3rd = element.heightened3rd;
      }
      if (element.heightened4th) {
        addable.heightened.heightened4th = element.heightened4th;
      }
      if (element.heightened5th) {
        addable.heightened.heightened5th = element.heightened5th;
      }
      if (element.heightened6th) {
        addable.heightened.heightened6th = element.heightened6th;
      }
      if (element.heightened7th) {
        addable.heightened.heightened7th = element.heightened7th;
      }
      if (element.heightened8th) {
        addable.heightened.heightened8th = element.heightened8th;
      }
      if (element.heightened9th) {
        addable.heightened.heightened9th = element.heightened9th;
      }
      if (element.heightenedplus1) {
        addable.heightened.heightenedplus1 = element.heightenedplus1;
      }
      if (element.heightenedplus2) {
        addable.heightened.heightenedplus2 = element.heightenedplus2;
      }
      if (element.savingthrow) {
        addable.savingthrow = element.savingthrow;
      }
      this.spellsCollection.add(addable);
      console.log('Spell Added');
    });
  }
}
