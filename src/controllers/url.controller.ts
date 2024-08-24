import { Request, Response } from 'express';
import UrlService from "../services/url.service.ts";

class UrlController {
    async create(req: Request, res: Response) {
        try {
            const resp = await UrlService.create(req.body);
            res.json(resp);
        } catch (error: any) {
            // res.status(500).json(error.message);
            res.json({success: false, msg: error.message});
        }
    }

    async check(req: Request, res: Response) {
        try {
            const resp = await UrlService.check(req.body);
            res.json(resp);
        } catch (error: any) {
            // res.status(500).json(error.message);
            res.json({success: false, msg: error.message});
        }
    }
}

export default new UrlController();