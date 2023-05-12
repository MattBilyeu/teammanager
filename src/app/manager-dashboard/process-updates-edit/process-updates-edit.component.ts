import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Update } from 'src/app/models/update.model';

@Component({
  selector: 'app-process-updates-edit',
  templateUrl: './process-updates-edit.component.html',
  styleUrls: ['./process-updates-edit.component.css']
})
export class ProcessUpdatesEditComponent implements OnInit {
  processUpdates: Update[];
  @ViewChild('taskName') taskNameRef;
  @ViewChild('taskUpdate') taskUpdateRef;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.updateArray();
  }

  updateArray() {
    this.processUpdates = this.dataService.processUpdates;
  }

  onSubmit() {
    const task = this.taskNameRef.nativeElement.value;
    const update = this.taskUpdateRef.nativeElement.value;
    this.dataService.createProcessUpdate(task, update);
    this.updateArray();
    this.taskNameRef.nativeElement.value = '';
    this.taskUpdateRef.nativeElement.value = '';
  }
}
