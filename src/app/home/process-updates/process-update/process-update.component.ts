import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Update } from 'src/app/models/update.model';

@Component({
  selector: 'app-process-update',
  templateUrl: './process-update.component.html',
  styleUrls: ['./process-update.component.css']
})
export class ProcessUpdateComponent {
  @Input() update: Update;
  @Input() dashboard: string;;
  @Input() index: number;
  @Output() updateDeleted = new EventEmitter<null>()

  constructor(private dataService: DataService) {}

  onDelete(index) {
    this.dataService.processUpdates.splice(index,1);
    this.dataService.saveData();
    this.updateDeleted.emit(null);
  }
}
