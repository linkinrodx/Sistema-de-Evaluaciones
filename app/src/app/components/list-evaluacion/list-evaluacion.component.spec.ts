import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvaluacionComponent } from './list-evaluacion.component';

describe('ListEvaluacionComponent', () => {
  let component: ListEvaluacionComponent;
  let fixture: ComponentFixture<ListEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
