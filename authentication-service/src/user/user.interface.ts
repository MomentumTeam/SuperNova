export interface IUser {
    id: string;
    name?: Name;
    firstName: string;
    lastName: string;
    fullName?: string;
    job: string;
    mail: string;
    hierarchy?: string[];
    hierarchyFlat?: string;
}

export interface Name {
    firstName: string;
    lastName: string;
}
