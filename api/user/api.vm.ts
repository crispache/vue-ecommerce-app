export interface UserDetailEntity {
    id: number;
    name: string;
    photoUrl: string;
    email: string;
    phone: string;
    address: string;
}


export const defaultUserDetail = {
    id: 0,
    name: "",
    photoUrl: "",
    email: "",
    phone: "",
    address: "",
};