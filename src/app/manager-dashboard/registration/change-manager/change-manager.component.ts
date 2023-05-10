import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-change-manager',
  templateUrl: './change-manager.component.html',
  styleUrls: ['./change-manager.component.css']
})
export class ChangeManagerComponent implements OnInit {
  @ViewChild('managerSelection') managerSelRef;
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
      }
    }
  }

  onDelete(index: number) {
    let verify = confirm('Are you sure you want to delete this team?');
    if(verify) {
      this.dataService.allTeams.splice(index,1);
    }
  }
}
