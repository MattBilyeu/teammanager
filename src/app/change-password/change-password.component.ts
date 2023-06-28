import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild('oldPassword') oldPassRef;
  @ViewChild('newPassword') newPassRef;
  user: string;
  success: boolean = false;

  constructor(private dataService: DataService,
              private serverService: ServerService) {};

  ngOnInit() {
    this.user = this.dataService.user;
  }

  onSubmit() {
    const oldPassword = this.oldPassRef.nativeElement.value;
    const newPassword = this.newPassRef.nativeElement.value;
    if(this.dataService.userRole === 'User') {
      for(let i = 0; i < this.dataService.teamMembers.length; i++) {
        if(this.dataService.teamMembers[i].name === this.dataService.user && this.dataService.teamMembers[i].password === oldPassword) {
          this.dataService.teamMembers[i].password = newPassword;
          this.serverService.changePassword(newPassword, this.dataService.serverToken);
          this.success = true;
          this.dataService.saveData();
        }
      }
      if(!this.success) {
        alert('Password Change Failed: Old Password Does Not Match!')
      }
    } else if (this.dataService.userRole === 'Manager') {
      for(let i = 0; i < this.dataService.manager.length; i++) {
        if(this.dataService.manager[i].name === this.dataService.user && this.dataService.manager[i].password === oldPassword) {
          this.dataService.manager[i].password = newPassword;
          this.serverService.changePassword(newPassword, this.dataService.serverToken);
          this.success = true;
          this.dataService.saveData();
        }
      }
      if(!this.success) {
        alert('Password Change Failed: Old Password Does Not Match!')
      }
    } else if (this.dataService.userRole === 'Admin') {
      for(let i = 0; i < this.dataService.admins.length; i++) {
        if(this.dataService.admins[i].name === this.dataService.user && this.dataService.admins[i].password === oldPassword) {
          this.dataService.admins[i].password = newPassword;
          this.serverService.changePassword(newPassword, this.dataService.serverToken);
          this.success = true;
          this.dataService.saveData();
        }
      }
      if(!this.success) {
        alert('Password Change Failed: Old Password Does Not Match!')
      }
    } else {
      alert('User role not found, contact administrator.')
    }

  }
}
