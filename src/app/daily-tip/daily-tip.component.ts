import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-daily-tip',
  templateUrl: './daily-tip.component.html',
  styleUrls: ['./daily-tip.component.css']
})
export class DailyTipComponent implements OnInit {
  tips: any[] = [];

  constructor(private dataService: DataService) {}

  getTip() {
    let tipIndex = Math.floor(Math.random()*this.tips.length);
    return this.tips[tipIndex];
  }
  
  ngOnInit() {
    this.tips = this.dataService.dailyTips;
  }

}
