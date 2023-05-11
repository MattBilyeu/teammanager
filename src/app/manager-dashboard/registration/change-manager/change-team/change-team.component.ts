import { Component, Input, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-change-team',
  templateUrl: './change-team.component.html',
  styleUrls: ['./change-team.component.css']
})
export class ChangeTeamComponent {
  @Input('teamName') teamName;
  @Input('index') index;
  @Input('managers') managers;
  @ViewChild('addManager') addMgrRef;
  @ViewChild('managerSelection') mgrSelRef;

  constructor(private dataService: DataService) {}

  onRemoveManager() {
    const managerName = this.mgrSelRef.nativeElement.value;
    for (let i = 0; i < this.dataService.allTeams[this.index].manager.length; i++) {
      if(this.dataService.allTeams[this.index].manager[i].name === managerName) {
        this.dataService.allTeams[this.index].manager.splice(i,1);
      }
    }
  }

  onAddManager(){
    const name = this.addMgrRef.nativeElement.value;
    this.dataService.allTeams[this.index].manager.push({name: name, password: ''});
  }

  onDelete() {
    let verify = confirm('Are you sure you want to delete this team?');
    if(verify) {
      this.dataService.allTeams.splice(this.index,1);
    }
  }
}
