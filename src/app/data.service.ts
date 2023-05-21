import { Injectable } from "@angular/core";
import { Member } from "./models/member.model";
import { UpdateMemberService } from "./update-member.service";
import { Tip } from "./models/tip.model";
import { Update } from "./models/update.model";
import { Team } from "./models/team.model";
import { Admin } from "./models/admin.model";

@Injectable()
export class DataService {
    teamMembers: Member[] = [];
    dailyTips: Tip[] = [];
    processUpdates: Update[] = [];
    tasks: string[] = [];
    user: string;
    userRole: string;
    teamName: string;
    manager: [{name: string, password: string}];
    admins: Admin[] = [{name: 'Admin', password: 'Admin'}];
    allTeams: Team[] = [];
    loggedIn: boolean = false;

    constructor(private update: UpdateMemberService) {}

    createMember(name: string, manager: string, primaryAssignment: string, secondaryAssignment: string, role: string, team: string) {
        let newMember = new Member(name, manager, primaryAssignment, secondaryAssignment, role, team, 'Password');
        this.teamMembers.push(newMember);
        this.saveData();
    }

    createDailyTip(category: string, info: string) {
        const tip = {
            category: category,
            tip: info
        };
        this.dailyTips.push(tip);
        this.saveData();
    }

    createProcessUpdate(task: string, info: string) {
        const newUpdate: Update = {
            task: task,
            info: info,
            membersRead: []
        };
        this.processUpdates.push(newUpdate);
        this.saveData();
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
        return new Member('Login Broken','Login Broken','Login Broken', 'Login Broken','Login Broken','Login Broken', 'Login Broken');
    }

    createTeam(managerName: string, mgrPassword: string, teamName: string) {
        this.teamMembers = [];
        this.dailyTips = [];
        this.processUpdates = [];
        this.tasks = [];
        this.manager = [{name: managerName, password: mgrPassword}] 
        this.teamName = teamName;
        this.saveData();
    }

    //uses web storage for now, can eventually be hooked up to a database.
    saveData() {
        if(this.userRole !== 'Admin') {
            this.loadData();
        }
        let teamFound: boolean = false;
        const team = new Team(this.teamMembers, this.dailyTips, this.processUpdates, this.tasks, this.manager, this.teamName);
        console.log('Team loaded into variable',team);
        for (let i = 0; i < this.allTeams.length; i++) {
            if(this.allTeams[i].teamName === team.teamName) {
                this.allTeams[i] = team;
                teamFound = true;
            }
        }
        if (!teamFound && team.teamName !== undefined) {
            this.allTeams.push(team);
        }
        console.log('all teams prior to save',this.allTeams);
        let data = JSON.stringify(this.allTeams);
        let adminData = JSON.stringify(this.admins);
        localStorage.setItem('data5', data);
        localStorage.setItem('admins', adminData);
    }

    loadData() {
        const dataString = localStorage.getItem('data5');
        const adminDataString = localStorage.getItem('admins');
        if (dataString !== null && dataString !== '') {
            try {
                const data: Team[] = JSON.parse(dataString);
                this.allTeams = data;
            } catch (err) {
                console.error('Error parsing data from localStorage', err);
            }
        }
        if (adminDataString !== null && adminDataString !== '') {
            try {
                const adminData: Admin[] = JSON.parse(adminDataString);
                this.admins = adminData;
            } catch (err) {
                console.error('Error parsing data from localStorage', err);
            }
        }
    }
}