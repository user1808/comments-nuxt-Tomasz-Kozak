import Axios, { AxiosInstance } from "axios";
import { PORT } from '@/utils/constants';

export class MyAxios {
    static baseUrl: string = `http://localhost:${PORT}/`;

    public static create(): AxiosInstance {
        const myAxiosInstance: AxiosInstance = Axios.create();
        myAxiosInstance.defaults.baseURL = this.baseUrl;

        return myAxiosInstance;
    }
}