import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Admin } from './models/admin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('teamName') teamNameRef;
  @ViewChild('userName') userNameRef;
  @ViewChild('role') roleRef;
  @ViewChild('password') passwordRef;
  loggedIn: boolean = false;
  allTeamNames: string[] = [];
  tabSelected: string = 'home';
  displayMobileNav: boolean = false;
  userRole: string;
  loginEventSubscription: Subscription;

  constructor(private dataService: DataService,
              private router: Router,
              private loginService: LoginService,
              private authService: AuthService) {}

  ngOnInit() {
    const admin = new Admin('test@test.com', 'Password');
    this.dataService.admins.push(admin);
  }

  onHome() {
    if(this.dataService.userRole !== 'User') {
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
    this.authService.logout();
    this.dataService.loadData();
    this.tabSelected = '';
  }

  onLogIn() {
    const role = this.roleRef.nativeElement.value;
    const userName = this.userNameRef.nativeElement.value;
    const password = this.passwordRef.nativeElement.value;
    this.authService.login(userName, password);
    this.loginEventSubscription = this.authService.loginEvent.subscribe(()=> {
      const team = this.dataService.findUserTeam(userName, password, role);
      this.dataService.userRole = role;
      this.loginService.loadTeam(userName, role, team);
      this.loggedIn = true;
      this.onHome();
    });
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

  ngOnDestroy() {
    this.loginEventSubscription.unsubscribe();
  }
}
