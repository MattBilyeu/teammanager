import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userRole: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.userRole = this.dataService.userRole;
  }

}
