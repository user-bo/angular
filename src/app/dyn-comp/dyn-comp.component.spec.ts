import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynCompComponent } from './dyn-comp.component';

describe('DynCompComponent', () => {
  let component: DynCompComponent;
  let fixture: ComponentFixture<DynCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
