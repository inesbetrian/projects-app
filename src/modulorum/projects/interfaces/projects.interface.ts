export interface Project {

    id: string;
    nomen: string;
    chores: Chore[];

}

export interface Chore {

    id: string;
    nomen: string;
    completaIn: Date;

}