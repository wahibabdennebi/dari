import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBorrowerComponent } from './update-borrower.component';

describe('UpdateBorrowerComponent', () => {
  let component: UpdateBorrowerComponent;
  let fixture: ComponentFixture<UpdateBorrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBorrowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
