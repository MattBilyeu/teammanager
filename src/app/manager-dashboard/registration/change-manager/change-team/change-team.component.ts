import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
  @Output('teamDeleted') teamDel = new EventEmitter<null>();

  constructor(private dataService: DataService) {}

  onRemoveManager() {
    const managerName = this.mgrSelRef.nativeElement.value;
    for (let i = 0; i < this.dataService.allTeams[this.index].manager.length; i++) {
      if(this.dataService.allTeams[this.index].manager[i].name === managerName) {
        this.dataService.allTeams[this.index].manager.splice(i,1);
        this.dataService.saveData();
      }
    }
  }

  onAddManager(){
    const name = this.addMgrRef.nativeElement.value;
    this.dataService.allTeams[this.index].manager.push({name: name, password: ''});
    this.dataService.saveData();
  }

  onDelete() {
    let verify = confirm('Are you sure you want to delete this team?');
    if(verify) {
      this.dataService.allTeams.splice(this.index,1);
    };
    this.dataService.teamName = undefined;
    this.teamDel.emit(null);
    this.dataService.saveData();
  }
}
