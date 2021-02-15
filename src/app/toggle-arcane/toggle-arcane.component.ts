/* eslint-disable require-jsdoc */
import {Component, Inject, forwardRef} from '@angular/core';
import {BaseWidget, NgAisInstantSearch} from 'angular-instantsearch';
import {connectToggle} from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-toggle-arcane',
  template: `
  <mat-chip-list><mat-chip (click)="state.refine(state.value)" style="color: blue">Arcane</mat-chip>
`,
})
export class ToggleArcaneComponent extends BaseWidget {
  public state: {
     value: Object;
     refine: (value) => undefined;
     createURL: () => string;
     widgetParams: Object;
  };
  attribute: string;
  label: string;
  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent,
  ) {
    super('ToggleRefinement');
  }
  ngOnInit() {
    this.createWidget(connectToggle, {
      // instance options
      attributeName: 'isArcane',
      label: 'Arcane',
    });
    super.ngOnInit();
  }
  change($event) {
    this.state.refine($event.value);
  }
}
