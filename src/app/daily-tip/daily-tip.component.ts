import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-daily-tip',
  templateUrl: './daily-tip.component.html',
  styleUrls: ['./daily-tip.component.css']
})
export class DailyTipComponent implements OnInit {
  tip: {category: string, tip: string};

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    const tips = this.dataService.dailyTips;
    const randomTip = tips[Math.floor(Math.random()*tips.length)];
    this.tip = randomTip;
  }

}
