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
  tabSelected: string = 'home';
  displayMobileNav: boolean = false;

  constructor(private dataService: DataService,
              private router: Router,
              private loginService: LoginService) {}

  ngOnInit() {
    this.dataService.loadData();
    this.dataService.allTeams.forEach((team)=> {
      this.allTeamNames.push(team.teamName);
    })
    //for devo purposes
    this.loggedIn = true;
  }

  onHome() {
    if(this.dataService.loggedIn === false) {
      alert('You have to log in first.');
    } else if(this.dataService.userRole !== 'User') {
      this.router.navigate(['/managers']);
    } else {
      this.router.navigate(['/users']);
    }
    this.tabSelected = 'home';
  }

  onAllTips() {
    this.router.navigate(['/all-tips']);
    this.tabSelected = 'allTips';
  }

  onAllUpdates() {
    this.router.navigate(['/all-updates']);
    this.tabSelected = 'allUpdates';
  }

  onChangePassword() {
    this.router.navigate(['/change-password']);
    this.tabSelected = 'changePassword';
  }

  onLogOut() {
    this.loggedIn = false;
    this.tabSelected = '';
  }

  onLogIn() {
    const role = this.roleRef.nativeElement.value;
    const userName = this.userNameRef.nativeElement.value;
    const password = this.passwordRef.nativeElement.value;
    const teamName = this.teamNameRef.nativeElement.value;
    if(role === 'Admin') {
      this.loginService.loginAdmin(userName, password);
      if(this.dataService.loggedIn === true) {
        this.onHome();
      };
    } else if (role === 'Manager') {
      this.loginService.loginManager(userName, teamName, password);
      if(this.dataService.loggedIn === true) {
        this.onHome();
      };
    } else if (role === 'User') {
      this.loginService.loginUser(userName, teamName, password);
      if(this.dataService.loggedIn === true) {
        this.onHome();
      };
    } else {
      alert('Role error, contact administrator.')
    }
    this.loggedIn = this.dataService.loggedIn;
  }

  getClass(button) {
    if (button === this.tabSelected) {
      return 'selected'
    } else {
      return ''
    }
  }

  displayMobile() {
    this.displayMobileNav = !this.displayMobileNav;
  }
}
