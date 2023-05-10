import { Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  @ViewChild('name') nameRef;

  constructor(private dataService: DataService) {}

  onSubmit() {
    const user = this.nameRef.nativeElement.value;
    this.dataService.createMember(user, this.dataService.user, '','','user',this.dataService.teamName);
  }
}
