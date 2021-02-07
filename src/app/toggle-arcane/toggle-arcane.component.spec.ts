import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleArcaneComponent } from './toggle-arcane.component';

describe('ToggleArcaneComponent', () => {
  let component: ToggleArcaneComponent;
  let fixture: ComponentFixture<ToggleArcaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleArcaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleArcaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
