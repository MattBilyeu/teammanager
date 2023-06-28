import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Injectable()
export class LoginService {

    constructor(private dataService: DataService,
                private authService: AuthService) {}

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