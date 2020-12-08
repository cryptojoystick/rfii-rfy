import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecentralizationComponent } from './decentralization.component';

describe('DecentralizationComponent', () => {
  let component: DecentralizationComponent;
  let fixture: ComponentFixture<DecentralizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecentralizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecentralizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
