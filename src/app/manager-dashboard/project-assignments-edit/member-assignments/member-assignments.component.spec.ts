import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAssignmentsComponent } from './member-assignments.component';

describe('MemberAssignmentsComponent', () => {
  let component: MemberAssignmentsComponent;
  let fixture: ComponentFixture<MemberAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
