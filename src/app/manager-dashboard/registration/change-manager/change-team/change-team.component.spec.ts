import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTeamComponent } from './change-team.component';

describe('ChangeTeamComponent', () => {
  let component: ChangeTeamComponent;
  let fixture: ComponentFixture<ChangeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
