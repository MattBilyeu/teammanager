import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-project-assignments',
  templateUrl: './project-assignments.component.html',
  styleUrls: ['./project-assignments.component.css']
})
export class ProjectAssignmentsComponent implements OnInit {
  currentUser: Member;
  managers: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.currentUser = this.dataService.returnUser();
    for (let i = 0; i < this.dataService.manager.length; i++) {
      this.managers.push(this.dataService.manager[i].name);
    }
  }

}
