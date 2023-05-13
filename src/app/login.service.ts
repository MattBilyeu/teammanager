import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class LoginService {

    constructor(private dataService: DataService) {}

    verifyLoginCredentials(array: any[], name: string, password: string) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name && array[i].password === password) {
                this.dataService.loggedIn = true;
                return true;
            }
        }
        return false;
    }

    loginAdmin(userName, password) {
        const admins = this.dataService.admins;
        if (this.verifyLoginCredentials(admins, userName, password)) {
          this.dataService.user = userName;
          this.dataService.userRole = 'Admin';
        } else {
            alert('Login failed, contact an administrator');
        }
    }

    verifyManager(userName, teamName, password) {
        for (let i = 0; i < this.dataService.allTeams.length; i++) {
            if (this.dataService.allTeams[i].teamName === teamName) {
                return this.verifyLoginCredentials(this.dataService.allTeams[i].manager,userName,password)
            }
        }
        return false
    }

    verifyUser(userName, teamName, password) {
        for (let i = 0; i < this.dataService.allTeams.length; i++) {
            if (this.dataService.allTeams[i].teamName === teamName) {
                return this.verifyLoginCredentials(this.dataService.allTeams[i].teamMembers,userName,password)
            }
        }
        return false
    }

    loginManager(userName, teamName, password) {
        if (this.verifyManager(userName, teamName, password)) {
            this.loadTeam(userName, 'Manager', teamName);
        } else {
            alert('Login failed, contact an administrator');
        }
    }

    loginUser(userName, teamName, password) {
        if(this.verifyUser(userName, teamName, password)) {
            this.loadTeam(userName, 'User', teamName);
        } else {
            alert('Login failed, contact an administrator');
        }
    }

    loadTeam(userName, userRole, teamName) {
        let team;
        for (let i = 0; i < this.dataService.allTeams.length; i++) {
            if (this.dataService.allTeams[i].teamName === teamName) {
                team = this.dataService.allTeams[i];
                this.dataService.teamMembers = team.teamMembers;
                this.dataService.dailyTips = team.dailyTips;
                this.dataService.processUpdates = team.processUpdates;
                this.dataService.tasks = team.tasks;
                this.dataService.user = userName;
                this.dataService.userRole = userRole;
                this.dataService.teamName = teamName;
                this.dataService.manager = team.manager;
            }
        }
    }
}