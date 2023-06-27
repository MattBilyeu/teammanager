import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Tip } from 'src/app/models/tip.model';

@Component({
  selector: 'app-daily-tip-edit',
  templateUrl: './daily-tip-edit.component.html',
  styleUrls: ['./daily-tip-edit.component.css']
})
export class DailyTipEditComponent implements OnInit {
  tipArray: Tip[] = [];
  @ViewChild('category') catInputRef;
  @ViewChild('tip') tipInputRef;


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tipArray = this.dataService.dailyTips;
  }

  onSubmit() {
    this.dataService.loadData();
    let cat = this.catInputRef.nativeElement.value;
    let tip = this.tipInputRef.nativeElement.value;
    this.dataService.createDailyTip(cat, tip);
    this.tipArray = this.dataService.dailyTips;
    this.catInputRef.nativeElement.value = '';
    this.tipInputRef.nativeElement.value = '';
  }

  onDelete(index: number) {
      this.dataService.dailyTips.splice(index,1);
      this.dataService.saveData();
      this.tipArray = this.dataService.dailyTips;
  }
}
