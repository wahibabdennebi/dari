import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBankComponent } from './get-bank.component';

describe('GetBankComponent', () => {
  let component: GetBankComponent;
  let fixture: ComponentFixture<GetBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
