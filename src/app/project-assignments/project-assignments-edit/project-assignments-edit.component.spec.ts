import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssignmentsEditComponent } from './project-assignments-edit.component';

describe('ProjectAssignmentsEditComponent', () => {
  let component: ProjectAssignmentsEditComponent;
  let fixture: ComponentFixture<ProjectAssignmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAssignmentsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAssignmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
