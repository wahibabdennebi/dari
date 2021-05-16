import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankComponent } from './update-bank.component';

describe('UpdateBankComponent', () => {
  let component: UpdateBankComponent;
  let fixture: ComponentFixture<UpdateBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
