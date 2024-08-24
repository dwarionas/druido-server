import mongoose from "mongoose";

const URL = new mongoose.Schema({
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    sbUserID: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), required: true }
}, {
    autoCreate: false
});

export default mongoose.model('URL', URL);