import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('teamName') teamNameRef;
  @ViewChild('userName') userNameRef;
  @ViewChild('role') roleRef;
  @ViewChild('password') passwordRef;
  loggedIn: boolean = false;
  allTeamNames: string[] = [];

  constructor(private dataService: DataService,
              private router: Router,
              private loginService: LoginService) {}

  ngOnInit() {
    this.dataService.loadData();
    this.dataService.allTeams.forEach((team)=> {
      this.allTeamNames.push(team.teamName);
    })
  }

  onHome() {
    if(this.dataService.loggedIn === false) {
      alert('You have to log in first.');
    } else if(this.dataService.userRole !== 'User') {
      this.router.navigate(['/managers']);
    } else {
      this.router.navigate(['/users']);
    }
  }

  onAllTips() {
    this.router.navigate(['/all-tips']);
  }

  onAllUpdates() {
    this.router.navigate(['/all-updates']);
  }

  onLogOut() {
    this.loggedIn = false;
  }

  onLogIn() {
    const role = this.roleRef.nativeElement.value;
    const userName = this.userNameRef.nativeElement.value;
    const password = this.passwordRef.nativeElement.value;
    let teamName;
    if(this.teamNameRef.nativeElement.value !== undefined) {
      teamName = this.teamNameRef.nativeElement.value;
    }
    if(role === 'Admin') {
      this.loginService.loginAdmin(userName, password);
      if(this.dataService.loggedIn) {
        this.onHome();
      };
    } else if (role === 'Manager') {
      this.loginService.loginManager(userName, teamName, password);
      if(this.dataService.loggedIn) {
        this.onHome();
      };
    } else if (role === 'User') {
      this.loginService.loginUser(userName, teamName, password);
      if(this.dataService.loggedIn) {
        this.onHome();
      };
    } else {
      alert('Role error, contact administrator.')
    }
    this.loggedIn = this.dataService.loggedIn;
  }
}
