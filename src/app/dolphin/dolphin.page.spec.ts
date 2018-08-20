import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphinPage } from './dolphin.page';

describe('DolphinPage', () => {
  let component: DolphinPage;
  let fixture: ComponentFixture<DolphinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolphinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolphinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
