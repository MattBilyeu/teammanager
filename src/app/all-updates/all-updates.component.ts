import { Component, OnInit } from '@angular/core';
import { Update } from '../models/update.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-updates',
  templateUrl: './all-updates.component.html',
  styleUrls: ['./all-updates.component.css']
})
export class AllUpdatesComponent implements OnInit {
  updates: Update[];
  userRole: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.updates = this.dataService.processUpdates;
    this.userRole = this.dataService.userRole;
  }

  onDelete(index) {
    this.dataService.processUpdates.splice(index,1);
    this.dataService.saveData();
  }

  getClass(index: number) {
    if (index % 2 == 0) {
      return 'tip'
    } else {
      return 'grey tip'
    }
  }
}
