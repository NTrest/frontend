/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedprivateComponent } from './feedprivate.component';

describe('FeedprivateComponent', () => {
  let component: FeedprivateComponent;
  let fixture: ComponentFixture<FeedprivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedprivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedprivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
