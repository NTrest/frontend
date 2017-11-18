/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedpublicComponent } from './feedpublic.component';

describe('FeedpublicComponent', () => {
  let component: FeedpublicComponent;
  let fixture: ComponentFixture<FeedpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
