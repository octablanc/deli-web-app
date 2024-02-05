import axios, { AxiosError } from "axios";
import { User } from "../interfaces";

const { VITE_REACT_APP_API_URL, VITE_ACCESS_USER } = import.meta.env;

class APIConnectionRaw {
    private token: string;

    constructor() {
        this.token = '';
        this.getToken();
    }

    async getToken() {
        try {
            const { token }: { token: string } = (await axios.post(`${VITE_REACT_APP_API_URL}/generate-token`, { access_user: VITE_ACCESS_USER })).data;
            this.token = token
        } catch (error) {
            if (error instanceof AxiosError)
                window.alert('Error to generate API token');
        }
    }

    async createUser(user: User) {
        await axios.post(
            `${VITE_REACT_APP_API_URL}/users/create-user`,
            user,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            }
        );
    }
}

export const APIConnection = new APIConnectionRaw();