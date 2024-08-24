import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import url_router from "./routers/url.router.ts";
import user_router from "./routers/user.router.ts";

const PORT = process.env.PORT || 7060;
const DATABASE_URL = process.env.DATABASE_URL || '';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use(url_router);
app.use(user_router);

app.get('/', (_: Request, res: Response) => {
    res.send('adm@druido.cc')
});

(async () => {
    try {
        await mongoose.connect(DATABASE_URL)
            .then(() => console.log('Database connected'));
    } catch (error) {
        console.log(error);
    }
})();

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
