import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-remove-tasks',
  templateUrl: './add-remove-tasks.component.html',
  styleUrls: ['./add-remove-tasks.component.css']
})
export class AddRemoveTasksComponent implements OnInit {
  @ViewChild('task') taskRef;
  tasks: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tasks = this.dataService.tasks;
  }

  onSubmit() {
    const task = this.taskRef.nativeElement.value;
    this.dataService.tasks.push(task);
    this.dataService.saveData();
  }

}
