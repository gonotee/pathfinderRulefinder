/* eslint-disable require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireFunctions} from '@angular/fire/functions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mobile-spells',
  templateUrl: './mobile-spells.component.html',
  styleUrls: ['./mobile-spells.component.css'],
})
export class MobileSpellsComponent implements OnInit {
  spellsCollection: AngularFirestoreCollection<any>;
  spells: Observable<any>;
  searchLoaded: Promise<boolean>;
  names;
  sortType;
  config;
  constructor(private afs: AngularFirestore, private fns: AngularFireFunctions) { }

  ngOnInit(): void {
    this.spellsCollection = this.afs.collection('spells');
    this.spells = this.spellsCollection.valueChanges();
    const callable = this.fns.httpsCallable('getSecureKey');
    this.sortType = 'pathfinderSpells';
    callable({restrictedIndex: this.sortType}).subscribe((data) => {
      this.config = {
        apiKey: data.key,
        appId: 'HJN7F66MDX',
        indexName: this.sortType,
        routing: true,
      };
      this.searchLoaded = Promise.resolve(true);
    });
  }
}
