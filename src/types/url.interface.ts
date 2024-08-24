export interface UrlInterface {
    originalURL: string;
    shortURL: string;
    name: string;
    id: string;
    sbUserID: string;
    createdAt: Date;
}

export interface createURLInterface {
    originalURL: string;
    shortURL: string;
    name: string;
    id: string;
    sbUserID: string;
}

export interface checkIDInterface {
    id: string;
}