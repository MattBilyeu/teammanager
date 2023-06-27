import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-change-manager',
  templateUrl: './change-manager.component.html',
  styleUrls: ['./change-manager.component.css']
})
export class ChangeManagerComponent implements OnInit {
  @ViewChild('managerSelection') managerSelRef;
  @ViewChild('addManager') managerNameRef;
  teams: Team[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teams = this.dataService.allTeams;
  }

  onRemoveManager(index: number) {
    const managerName = this.managerSelRef.nativeElement.value;
    for (let i = 0; i < this.dataService.allTeams[index].manager.length; i++) {
      if(this.dataService.allTeams[index].manager[i].name === managerName) {
        this.dataService.allTeams[index].manager.splice(i,1);
        this.dataService.saveData();
      }
    }
    this.updateTeams();
  }

  onAddManager(index: number){
    const name = this.managerNameRef.nativeElement.value;
    this.dataService.allTeams[index].manager.push({name: name, password: 'Password'});
    this.teams = this.dataService.allTeams;
    this.dataService.saveData();
    this.updateTeams();
  }
  
  updateTeams() {
    this.teams = this.dataService.allTeams;
  }
}
