import Axios, { AxiosInstance } from "axios";

export class MyAxios {
    //TODO dodać tu process.env.PORT
    static baseUrl: string = `http://localhost:3000/`;

    public static create(): AxiosInstance {
        const myAxiosInstance: AxiosInstance = Axios.create();
        myAxiosInstance.defaults.baseURL = this.baseUrl;

        return myAxiosInstance;
    }
}