import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-member-assignments',
  templateUrl: './member-assignments.component.html',
  styleUrls: ['./member-assignments.component.css']
})
export class MemberAssignmentsComponent implements OnInit {
  @ViewChild('primary') primaryRef;
  @ViewChild('secondary') secondaryRef;
  @Input() member: Member;
  @Input() index: number;
  taskList: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.taskList = this.dataService.tasks;
  }

  onSubmit() {
    let primary = this.primaryRef.nativeElement.value;
    let secondary = this.secondaryRef.nativeElement.value;
    this.dataService.teamMembers[this.index].primaryAssignment = primary;
    this.dataService.teamMembers[this.index].secondaryAssignment = secondary;
    this.dataService.saveData();
  }
}
