import { Router } from "express";
import UrlController from "../controllers/url.controller.ts";

const url_router = Router();

url_router.post('/api/url/create', UrlController.create);
url_router.post('/api/url/check', UrlController.check);

export default url_router;