import { Member } from "./member.model";
import { Tip } from "./tip.model";
import { Update } from "./update.model";

export class Team {
    teamMembers: Member[];
    dailyTips: Tip[];
    processUpdates: Update[];
    tasks: string[];
    manager: string;
    teamName: string;
}