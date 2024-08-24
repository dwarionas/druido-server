import mongoose from 'mongoose';
import URL from "./url.model.ts";

const User = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    sbUserID: { type: String, required: true, unique: true },
    urls: [URL.schema]
});

export default mongoose.model('User', User);