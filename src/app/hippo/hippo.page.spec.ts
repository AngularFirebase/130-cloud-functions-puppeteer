import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HippoPage } from './hippo.page';

describe('HippoPage', () => {
  let component: HippoPage;
  let fixture: ComponentFixture<HippoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HippoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HippoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
