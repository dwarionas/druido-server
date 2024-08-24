import { nanoid } from "nanoid";

import URL from "../models/url.model.ts";
import User from "../models/user.model.ts";

import { createURLInterface, checkIDInterface } from "../types/url.interface.ts";

class UrlService {
    async create(data: createURLInterface) {
        const { originalURL, name, sbUserID } = data;

        const id: string = nanoid(5);
        const host: string = process.env.NODE_ENV === "prod" ? "https://druido.cc/" : "http://localhost:3000/";

        const urlData = {
            originalURL,
            name,
            sbUserID,
            id,
            shortURL: host.concat(id)
        }

        const newURLEntity = new URL(urlData);

        const user = await User.findOne({ sbUserID });
        if (!user) {
            throw new Error('User not found');
        }

        user.urls.unshift(newURLEntity);
        await URL.create(urlData);

        await user.save();

        return newURLEntity;
    }

    async check(data: checkIDInterface) {
        const { id } = data;

        const candidate = await URL.findOne({ id });
        if (!candidate) {
            throw new Error('ID not found');
        }

        return candidate;
    }
}

export default new UrlService();
