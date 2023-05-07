import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userRole: string = 'admin';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.loadData();
    //The following lines are for development use to reset the application on every refresh.  It should be removed prior to pushing the application to production.
      // this.dataService.teamMembers = [];
      // this.dataService.dailyTips = [];
      // this.dataService.processUpdates = [];
      // this.dataService.createMember('Sally Member', 'Billy Manager', 'Sally Primary', 'Sally Secondary', 'User', 'Team Red');
      // this.dataService.createMember('Johnny Member', 'Billy Manager', 'Johnny Primary', 'Johnny Secondary', 'User', 'Team Red');
      // this.dataService.createMember('Fred Member', 'Jason Manager', 'Fred Primary', 'Fred Secondary', 'User', 'Team Blue');
      // this.dataService.createMember('Jane Member', 'Jason Manager', 'Jane Primary', 'Jane Secondary', 'User', 'Team Blue');
      // this.dataService.createDailyTip('Category 1', 'Tip 1 for Cat 1');
      // this.dataService.createDailyTip('Category 1', 'Tip 2 for Cat 1');
      // this.dataService.createDailyTip('Category 2', 'Tip 1 for Cat 2');
      // this.dataService.createDailyTip('Category 2', 'Tip 2 for Cat 2');
      // this.dataService.createProcessUpdate('Task 1', 'Process update 1 for task 1');
      // this.dataService.createProcessUpdate('Task 2', 'Process update 1 for task 2');
  }
}
