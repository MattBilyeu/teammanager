import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessUpdatesComponent } from './process-updates.component';

describe('ProcessUpdatesComponent', () => {
  let component: ProcessUpdatesComponent;
  let fixture: ComponentFixture<ProcessUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
