export interface UserDetailsEntity {
    id: number;
    name: string;
    photoUrl: string;
    email: string;
    phone: string;
    address: string;
}


export const defaultUserDetails = {
    id: 0,
    name: "",
    photoUrl: "",
    email: "",
    phone: "",
    address: "",
};