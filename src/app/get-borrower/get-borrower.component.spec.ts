import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBorrowerComponent } from './get-borrower.component';

describe('GetBorrowerComponent', () => {
  let component: GetBorrowerComponent;
  let fixture: ComponentFixture<GetBorrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBorrowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
