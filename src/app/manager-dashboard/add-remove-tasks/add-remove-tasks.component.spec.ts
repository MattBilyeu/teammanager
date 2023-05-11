import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveTasksComponent } from './add-remove-tasks.component';

describe('AddRemoveTasksComponent', () => {
  let component: AddRemoveTasksComponent;
  let fixture: ComponentFixture<AddRemoveTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
