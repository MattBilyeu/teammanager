import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessUpdatesEditComponent } from './process-updates-edit.component';

describe('ProcessUpdatesEditComponent', () => {
  let component: ProcessUpdatesEditComponent;
  let fixture: ComponentFixture<ProcessUpdatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessUpdatesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessUpdatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
