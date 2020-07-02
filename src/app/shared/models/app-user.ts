export interface AppUser {
    id: string;
    name: string;
    password?: string;
    email: string;
    mobile: string;
    isAdmin: boolean;
}
