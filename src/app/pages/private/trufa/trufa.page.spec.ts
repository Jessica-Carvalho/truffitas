import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrufaPage } from './trufa.page';

describe('TrufaPage', () => {
  let component: TrufaPage;
  let fixture: ComponentFixture<TrufaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrufaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrufaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
