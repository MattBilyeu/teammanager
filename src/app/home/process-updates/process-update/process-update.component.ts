import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Member } from 'src/app/models/member.model';
import { Update } from 'src/app/models/update.model';

@Component({
  selector: 'app-process-update',
  templateUrl: './process-update.component.html',
  styleUrls: ['./process-update.component.css']
})
export class ProcessUpdateComponent implements OnInit {
  @Input() update: Update;
  @Input() dashboard: string;;
  @Input() index: number;
  @Output() updateDeleted = new EventEmitter<null>();
  membersNotRead: Member[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.teamMembers.forEach(
      (member) => {
        if(this.update.membersRead.indexOf(member.name) === -1) {
          this.membersNotRead.push(member);
        }
      }
    )
  }

  onDelete(index) {
    this.dataService.processUpdates.splice(index,1);
    this.dataService.saveData();
    this.updateDeleted.emit(null);
  }
}
