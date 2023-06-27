import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Update } from '../models/update.model';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  dashboard: string;
  processUpdates: Update[];
  teamMembers: Member[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teamMembers = this.dataService.teamMembers;
    this.dashboard = this.dataService.userRole;
    this.updateArray();
  }

  updateArray() {
    this.processUpdates = this.dataService.processUpdates;
  }

}
