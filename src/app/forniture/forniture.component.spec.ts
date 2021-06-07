import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FornitureComponent } from './forniture.component';

describe('FornitureComponent', () => {
  let component: FornitureComponent;
  let fixture: ComponentFixture<FornitureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FornitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
