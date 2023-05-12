import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AllTipsComponent } from './all-tips/all-tips.component';
import { AllUpdatesComponent } from './all-updates/all-updates.component'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'users', component: HomeComponent},
  {path: 'managers', component: ManagerDashboardComponent},
  {path: 'all-tips', component: AllTipsComponent},
  {path: 'all-updates', component: AllUpdatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
