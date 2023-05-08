import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-project-assignments-edit',
  templateUrl: './project-assignments-edit.component.html',
  styleUrls: ['./project-assignments-edit.component.css']
})
export class ProjectAssignmentsEditComponent implements OnInit {
  teamMembers: Member[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teamMembers = this.dataService.teamMembers;
  }

}
