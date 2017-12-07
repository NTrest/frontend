/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DmlistComponent } from './dmlist.component';

describe('DmlistComponent', () => {
  let component: DmlistComponent;
  let fixture: ComponentFixture<DmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
