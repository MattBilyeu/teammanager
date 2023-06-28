import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manager-registration',
  templateUrl: './manager-registration.component.html',
  styleUrls: ['./manager-registration.component.css']
})
export class ManagerRegistrationComponent {
  @ViewChild('managerName') mgrNameRef;
  @ViewChild('teamName') teamNameRef;
  managerPassword: string = 'Password';

  constructor(private dataService: DataService,
              private authService: AuthService) {}

  onSubmit() {
    const mgrName = this.mgrNameRef.nativeElement.value;
    const teamName = this.teamNameRef.nativeElement.value;
    this.authService.registerUser(mgrName, this.managerPassword);
    this.dataService.createTeam(mgrName, this.managerPassword, teamName);
    this.mgrNameRef.nativeElement.value = '';
    this.teamNameRef.nativeElement.value = '';
  }
}
