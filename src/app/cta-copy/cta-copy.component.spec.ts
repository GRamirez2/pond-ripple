import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCopyComponent } from './cta-copy.component';

describe('CtaCopyComponent', () => {
  let component: CtaCopyComponent;
  let fixture: ComponentFixture<CtaCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
