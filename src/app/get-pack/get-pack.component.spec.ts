import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPackComponent } from './get-pack.component';

describe('GetPackComponent', () => {
  let component: GetPackComponent;
  let fixture: ComponentFixture<GetPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
