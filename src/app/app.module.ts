import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DailyTipComponent } from './daily-tip/daily-tip.component';
import { ProjectAssignmentsComponent } from './project-assignments/project-assignments.component';
import { DailyTipEditComponent } from './daily-tip/daily-tip-edit/daily-tip-edit.component';
import { ProjectAssignmentsEditComponent } from './project-assignments/project-assignments-edit/project-assignments-edit.component';
import { ProcessUpdatesComponent } from './process-updates/process-updates.component';
import { ProcessUpdatesEditComponent } from './process-updates/process-updates-edit/process-updates-edit.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangeManagerComponent } from './registration/change-manager/change-manager.component';

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
    ChangeManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
