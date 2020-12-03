/* eslint-disable require-jsdoc */
import {Component, Inject, forwardRef} from '@angular/core';
import {BaseWidget, NgAisInstantSearch} from 'angular-instantsearch';
import {connectRefinementList} from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-refinement-list',
  template: `
  <p *ngFor="let item of state.items">
    <mat-checkbox
          (click)="state.refine(item.value)"
          [checked]="item.isRefined" > {{ item.label }} ({{ item.count }}) </mat-checkbox>
  </p>
  `,
})
export class RefinementListComponent extends BaseWidget {
  state: {
    items: { label: string; value: string }[];
    createUrl: () => string;
    refine: (value: string) => void;
    searchForItems: Function;
    isFromSearch: boolean;
    canRefine: boolean;
    canToggleShowMore: boolean;
    widgetParams: object;
    isShowingMore: boolean;
    toggleShowMore: () => void;
  }

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent,
  ) {
    super('RefinementList');
  }

  public ngOnInit() {
    this.createWidget(connectRefinementList, {attributeName: 'level', sortBy: []});
    super.ngOnInit();
  }
}

