/* eslint-disable require-jsdoc */
import {Component, Inject, forwardRef, Input} from '@angular/core';
import {BaseWidget, NgAisInstantSearch} from 'angular-instantsearch';
import {connectSortBySelector} from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-sort-by',
  template: `
  <mat-form-field appearance="outline">
  <mat-select placeholder="Sort By" (selectionChange)="change($event)">
  <mat-option *ngFor="let option of state.options" [value]="option.value" >
    {{ option.label }}
  </mat-option>
</mat-select>
</mat-form-field>
  `,
})
export class SortByComponent extends BaseWidget {
  @Input() indicesArray: any[];
  state: {
    options: Array<any>;
    currentRefinement: string;
    hasNoResults: boolean;
    refine: (string) => undefined;
    widgetParams: object;
  }

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent,
  ) {
    super('SortBy');
  }

  change($event) {
    this.state.refine($event.value);
  }

  public ngOnInit() {
    this.createWidget(connectSortBySelector, {indices: this.indicesArray});
    super.ngOnInit();
  }
}
