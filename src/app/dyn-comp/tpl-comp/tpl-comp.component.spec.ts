import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplCompComponent } from './tpl-comp.component';

describe('TplCompComponent', () => {
  let component: TplCompComponent;
  let fixture: ComponentFixture<TplCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
