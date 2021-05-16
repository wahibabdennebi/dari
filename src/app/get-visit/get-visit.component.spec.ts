import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVisitComponent } from './get-visit.component';

describe('GetVisitComponent', () => {
  let component: GetVisitComponent;
  let fixture: ComponentFixture<GetVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
