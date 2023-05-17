import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  dashboard: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dashboard = this.dataService.userRole;
  }

}
