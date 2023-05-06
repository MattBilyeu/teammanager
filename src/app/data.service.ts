import { Injectable } from "@angular/core";
import { Member } from "./member.model";

@Injectable()
export class DataService {
    teamMembers: Member[] = [];
    dailyTips: any[] = [];
    processUpdates: any[] = [];

    constructor(private member: Member) {}

    createMember(name: string, manager: string, primaryAssignment: string, secondaryAssignment: string, role: string, team: string) {
        let newMember = new Member(name, manager, primaryAssignment, secondaryAssignment, role, team);
        this.teamMembers.push(newMember);
    }

    createDailyTip(cat: string, info: string) {
        const tip = {
            category: cat,
            tip: info
        };
        this.dailyTips.push(tip);
    }

    createProcessUpdate(task: string, info: string) {
        const update = {
            assignment: task,
            update: info
        };
        this.processUpdates.push(update);
    }

    //uses web storage for now, can eventually be hooked up to a database.
    saveData() {
        let data = {
            teamMembers: this.teamMembers,
            dailyTips: this.dailyTips,
            processUpdates: this.processUpdates
        }
        localStorage.setItem('data', JSON.stringify(data));
    }

    loadData() {
        const dataString = localStorage.getItem('data');
        if (dataString !== null && dataString !== '') {
            try {
                const data: {teamMembers: Member[], dailyTips: any[], processUpdates: any[]} = JSON.parse(dataString);
                this.teamMembers = data.teamMembers;
                this.dailyTips = data.dailyTips;
                this.processUpdates = data.processUpdates;
            } catch (err) {
                console.error('Error parsing data from localStorage', err);
            }
        }
    }
}