import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
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

  onAcknowledged(index: number) {
    this.dataService.processUpdates[index].membersRead.push(this.user);
    this.processUpdates = this.dataService.processUpdates;
    this.dataService.saveData();
  }

  updateRead(update: Update) {
    for (let i = 0; i < update.membersRead.length; i++) {
      if (this.user == update.membersRead[i]) {
        return true
      }
    }
    return false
  }

}
