import { Injectable } from "@angular/core";
import { Member } from "./models/member.model";
import { UpdateMemberService } from "./update-member.service";
import { Tip } from "./models/tip.model";
import { Update } from "./models/update.model";
import { Team } from "./models/team.model";

@Injectable()
export class DataService {
    teamMembers: Member[] = [];
    dailyTips: Tip[] = [];
    processUpdates: Update[] = [];
    tasks: string[] = ['Task 1', 'Task 2'];
    user: string = 'Frank';
    userRole: string = 'manager';
    teamName: string = 'teamName';
    admins: object[] = [{name: 'Admin', password: 'Admin'}];
    allTeams: Team[] = [];

    constructor(private update: UpdateMemberService) {}

    createMember(name: string, manager: string, primaryAssignment: string, secondaryAssignment: string, role: string, team: string) {
        let newMember = new Member(name, manager, primaryAssignment, secondaryAssignment, role, team);
        this.teamMembers.push(newMember);
    }

    createDailyTip(category: string, info: string) {
        const tip = {
            category: category,
            tip: info
        };
        this.dailyTips.push(tip);
    }

    createProcessUpdate(task: string, info: string) {
        const newUpdate: Update = {
            task: task,
            info: info,
            membersRead: []
        };
        this.processUpdates.push(newUpdate);
    }

    updateMemberOrg(name: string, manager: string, team: string) {
        this.teamMembers = this.update.updateTeam(name, this.teamMembers, manager, team);
        this.saveData();
    }

    updateTasks(name: string, primaryAssignment: string, secondaryAssignment: string) {
        this.teamMembers = this.update.updateAssignments(name, this.teamMembers, primaryAssignment, secondaryAssignment);
        this.saveData();
    }

    returnUser() {
        for (let i = 0; i < this.teamMembers.length; i++) {
            if (this.user = this.teamMembers[i].name) {
                return this.teamMembers[i]
            }
        };
        alert('Login Process Failed, User not set at Data Service');
        return new Member('Login Broken','Login Broken','Login Broken', 'Login Broken','Login Broken','Login Broken');
    }

    createTeam(managerName: string, mgrPassword: string, teamName: string) {
        const newTeam: Team = {
            teamMembers: [],
            dailyTips: [],
            processUpdates: [],
            tasks: [],
            manager: [{name: managerName, password: mgrPassword}],
            teamName: teamName
        };
        this.allTeams.push(newTeam);
        this.saveData();
    }

    //uses web storage for now, can eventually be hooked up to a database.
    saveData() {
        let data = {
            teamMembers: this.teamMembers,
            dailyTips: this.dailyTips,
            processUpdates: this.processUpdates,
            teams: this.allTeams
        }
        localStorage.setItem('data', JSON.stringify(data));
    }

    loadData() {
        const dataString = localStorage.getItem('data');
        if (dataString !== null && dataString !== '') {
            try {
                const data: {teamMembers: Member[], dailyTips: Tip[], processUpdates: Update[], teams: Team[]} = JSON.parse(dataString);
                this.teamMembers = data.teamMembers;
                this.dailyTips = data.dailyTips;
                this.processUpdates = data.processUpdates;
                this.allTeams = data.teams;
            } catch (err) {
                console.error('Error parsing data from localStorage', err);
            }
        }
    }
}