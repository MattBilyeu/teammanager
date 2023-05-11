import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveTaskComponent } from './add-remove-task.component';

describe('AddRemoveTaskComponent', () => {
  let component: AddRemoveTaskComponent;
  let fixture: ComponentFixture<AddRemoveTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
