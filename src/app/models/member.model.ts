export class Member {
    public name: string;
    public manager: string;
    public primaryAssignment: string;
    public secondaryAssignment: string;
    public role: string;
    public team: string;

    constructor(name: string, 
                manager: string, 
                primaryAssignment: string, 
                secondaryAssignment: string, 
                role: string, 
                team: string) {
        this.name = name;
        this.manager = manager;
        this.primaryAssignment = primaryAssignment;
        this.secondaryAssignment = secondaryAssignment;
        this.role = role;
        this.team = team;
    }
}