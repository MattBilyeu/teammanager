import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  @ViewChild('name') nameRef;

  constructor(private dataService: DataService,
              private authService: AuthService) {}

  onSubmit() {
    const user = this.nameRef.nativeElement.value;
    this.dataService.createMember(user, this.dataService.user, '','','user',this.dataService.teamName);
    this.authService.registerUser(user, 'Password');
  }
}
