/* eslint-disable require-jsdoc */
import {Component, Inject, forwardRef} from '@angular/core';
import {BaseWidget, NgAisInstantSearch} from 'angular-instantsearch';
import {connectToggle} from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-toggle',
  template: `
  <mat-chip-list><mat-chip style="color: blue">{{label}}</mat-chip>
`,
})
export class ToggleComponent extends BaseWidget {
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
      attributeName: this.attribute,
      label: this.label,
    });
    super.ngOnInit();
  }
  change($event) {
    this.state.refine($event.value);
  }
}
