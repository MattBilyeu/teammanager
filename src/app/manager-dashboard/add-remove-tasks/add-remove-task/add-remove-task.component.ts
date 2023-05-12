import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-remove-task',
  templateUrl: './add-remove-task.component.html',
  styleUrls: ['./add-remove-task.component.css']
})
export class AddRemoveTaskComponent {
  @Input() task: string;
  @Input() index: number;

  constructor(private dataService: DataService) {}

  onRemoveTask() {
    this.dataService.tasks.splice(this.index,1);
    this.dataService.saveData();
  }
}
