export interface UserInfo {
    id: string;
    isActive: boolean;
    picture: string;
    age: number;
    name: string;
    email: string;
    address: string;
    about: string;
    registered: string;
    [key: string]: number | string | boolean;
}
