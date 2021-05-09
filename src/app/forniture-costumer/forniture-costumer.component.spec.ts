import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornitureCostumerComponent } from './forniture-costumer.component';

describe('FornitureCostumerComponent', () => {
  let component: FornitureCostumerComponent;
  let fixture: ComponentFixture<FornitureCostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornitureCostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornitureCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
