import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DailyTipComponent } from './home/daily-tip/daily-tip.component';
import { ProjectAssignmentsComponent } from './home/project-assignments/project-assignments.component';
import { DailyTipEditComponent } from './manager-dashboard/daily-tip-edit/daily-tip-edit.component';
import { ProjectAssignmentsEditComponent } from './manager-dashboard/project-assignments-edit/project-assignments-edit.component';
import { ProcessUpdatesComponent } from './home/process-updates/process-updates.component';
import { ProcessUpdatesEditComponent } from './manager-dashboard/process-updates-edit/process-updates-edit.component';
import { RegistrationComponent } from './manager-dashboard/registration/registration.component';
import { ChangeManagerComponent } from './manager-dashboard/registration/change-manager/change-manager.component';
import { DataService } from './data.service';
import { UpdateMemberService } from './update-member.service';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ProcessUpdateComponent } from './home/process-updates/process-update/process-update.component';
import { MemberAssignmentsComponent } from './manager-dashboard/project-assignments-edit/member-assignments/member-assignments.component';
import { UserRegistrationComponent } from './manager-dashboard/registration/user-registration/user-registration.component';
import { ManagerRegistrationComponent } from './manager-dashboard/registration/manager-registration/manager-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DailyTipComponent,
    ProjectAssignmentsComponent,
    DailyTipEditComponent,
    ProjectAssignmentsEditComponent,
    ProcessUpdatesComponent,
    ProcessUpdatesEditComponent,
    RegistrationComponent,
    ChangeManagerComponent,
    ManagerDashboardComponent,
    ProcessUpdateComponent,
    MemberAssignmentsComponent,
    UserRegistrationComponent,
    ManagerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, UpdateMemberService, DataService, UpdateMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
