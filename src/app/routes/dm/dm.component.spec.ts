/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DmComponent } from './dm.component';

describe('DmComponent', () => {
  let component: DmComponent;
  let fixture: ComponentFixture<DmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
