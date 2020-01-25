import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerSelectionComponent } from './pointer-selection.component';

describe('PointerSelectionComponent', () => {
  let component: PointerSelectionComponent;
  let fixture: ComponentFixture<PointerSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointerSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
