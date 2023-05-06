import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTipEditComponent } from './daily-tip-edit.component';

describe('DailyTipEditComponent', () => {
  let component: DailyTipEditComponent;
  let fixture: ComponentFixture<DailyTipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTipEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
