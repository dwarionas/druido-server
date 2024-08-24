import { UrlInterface } from "./url.interface.ts";

export interface UserInterface {
    username: string;
    email: string;
    sbUserID: string;
    urls: UrlInterface[];
}

export interface createUserInterface {
    username: string;
    email: string;
    sbUserID: string;
}