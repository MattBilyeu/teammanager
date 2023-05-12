import { Member } from "./member.model";
import { Tip } from "./tip.model";
import { Update } from "./update.model";

export class Team {
    teamMembers: Member[];
    dailyTips: Tip[];
    processUpdates: Update[];
    tasks: string[];
    manager: [{name: string, password: string}];
    teamName: string;

    constructor(
        teamMembers: Member[],
        dailyTips: Tip[],
        processUpdates: Update[],
        tasks: string[],
        manager: [{name: string, password: string}],
        teamName: string
    ) {
        this.teamMembers = teamMembers;
        this.dailyTips = dailyTips;
        this.processUpdates = processUpdates;
        this.tasks = tasks;
        this.manager = manager;
        this.teamName = teamName;
    }
}