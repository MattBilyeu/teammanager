import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Update } from 'src/app/models/update.model';

@Component({
  selector: 'app-process-updates',
  templateUrl: './process-updates.component.html',
  styleUrls: ['./process-updates.component.css']
})
export class ProcessUpdatesComponent implements OnInit {
  processUpdates: Update[];
  user: string;

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.processUpdates = this.dataService.processUpdates;
    this.user = this.dataService.user;
  }

  onAcknowledged(i) {

  }

}
