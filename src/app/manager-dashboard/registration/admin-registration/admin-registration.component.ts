import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  @ViewChild('adminToDelete') adminDelRef;
  @ViewChild('adminName') adminNameRef;
  currentAdmins: Admin[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.currentAdmins = this.dataService.admins;
  }

  onDelete() {
    const name = this.adminDelRef.nativeElement.value;
    for (let i = 0; i < this.dataService.admins.length; i++) {
      if (this.dataService.admins[i].name === name) {
        this.dataService.admins.splice(i,1);
        this.dataService.saveData();
      }
    }
    if(this.dataService.admins.length === 0) {
      const admin = new Admin ('Admin', 'Admin');
      this.dataService.admins.push(admin);
      this.dataService.saveData();
    }
  }

  onRegisterAdmin() {
    const name = this.adminNameRef.nativeElement.value;
    const admin = new Admin (name, 'Password');
    this.dataService.admins.push(admin);
    this.dataService.saveData();
  }
}
