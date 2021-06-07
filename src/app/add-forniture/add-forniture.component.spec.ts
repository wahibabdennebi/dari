import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddFornitureComponent } from './add-forniture.component';

describe('AddFornitureComponent', () => {
  let component: AddFornitureComponent;
  let fixture: ComponentFixture<AddFornitureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFornitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
