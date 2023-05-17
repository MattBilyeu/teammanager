import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tip } from '../models/tip.model';

@Component({
  selector: 'app-all-tips',
  templateUrl: './all-tips.component.html',
  styleUrls: ['./all-tips.component.css']
})
export class AllTipsComponent implements OnInit {
  tips: Tip[];
  userRole: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tips = this.dataService.dailyTips;
    this.userRole = this.dataService.userRole;
  }

  getClass(index: number) {
    if (index % 2 == 0) {
      return ''
    } else {
      return 'grey'
    }
  }

  onDelete(index: number) {
    this.dataService.dailyTips.splice(index,1);
    this.dataService.saveData();
    this.tips = this.dataService.dailyTips;
  }

}
