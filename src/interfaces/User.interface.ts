export interface User {
    full_name: string;
    mail: string;
    age: number | string;
    user_name: string;
    country: string;
}

export interface UserErrors {
    full_name: boolean;
    email: boolean;
    age: boolean;
    user_name: boolean;
    country: boolean;
}
