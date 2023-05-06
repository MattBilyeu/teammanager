export class UpdateMemberService {
    updateTeam(name: string, array: any[], manager: string, team: string) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name = name) {
                array[i].manager = manager;
                array[i].team = team;
            }
        }
        return array;
    }

    updateAssignments(name: string, array: any[], primaryAssignment: string, secondaryAssignment: string) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name) {
                array[i].primaryAssignment = primaryAssignment;
                array[i].secondaryAssignment = secondaryAssignment;
            }
        }
        return array;
    }
}