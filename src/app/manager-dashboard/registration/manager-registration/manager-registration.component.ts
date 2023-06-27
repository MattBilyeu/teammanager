import { Component, ViewChild } from '@angular/core';
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

  constructor(private dataService: DataService) {}

  onSubmit() {
    const mgrName = this.mgrNameRef.nativeElement.value;
    const teamName = this.teamNameRef.nativeElement.value;
    this.dataService.createTeam(mgrName, this.managerPassword, teamName);
    this.mgrNameRef.nativeElement.value = '';
    this.teamNameRef.nativeElement.value = '';
  }
}
