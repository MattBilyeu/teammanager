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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tips = this.dataService.dailyTips;
  }

  getClass(index: number) {
    if (index % 2 == 0) {
      return ''
    } else {
      return 'grey'
    }
  }

}
