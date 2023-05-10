import { Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-manager-registration',
  templateUrl: './manager-registration.component.html',
  styleUrls: ['./manager-registration.component.css']
})
export class ManagerRegistrationComponent {
  @ViewChild('managerName') mgrNameRef;
  @ViewChild('teamName') teamNameRef;
  @ViewChild('mgrPassWord') mgrPWRef;

  constructor(private dataService: DataService) {}

  onSubmit() {
    const mgrName = this.mgrNameRef.nativeElement.value;
    const mgrPW = '';
    const teamName = this.teamNameRef.nativeElement.value;
    this.dataService.createTeam(mgrName, mgrPW, teamName);
  }

  onDelete() {
    const team = this.teamNameRef.nativeElement.value;
    let verify = prompt('Are you sure you want to delete this team?');
    if(verify !== null) {
      for (let i = 0; i < this.dataService.allTeams.length; i++) {
        if (this.dataService.allTeams[i].teamName === team) {
          this.dataService.allTeams.splice(i,1);
          this.dataService.saveData();
        }
      }
    }
  }

}
