import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-daily-tip',
  templateUrl: './daily-tip.component.html',
  styleUrls: ['./daily-tip.component.css']
})
export class DailyTipComponent implements OnInit {
  @Input() userRole: string = '';
  tip: {category: string, tip: string};
  tipFound: boolean = false;

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    if(this.dataService.dailyTips.length !== 0) {
      const tips = this.dataService.dailyTips;
      const randomTip = tips[Math.floor(Math.random()*tips.length)];
      this.tip = randomTip;
      this.tipFound = true;
    }
  }

}
