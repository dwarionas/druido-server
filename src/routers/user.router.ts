import { Router } from "express";
import UserController from "../controllers/user.controller.ts";

const user_router = Router();

user_router.post('/api/user/create', UserController.create);
user_router.post('/api/user/getUser', UserController.getUser);

export default user_router;