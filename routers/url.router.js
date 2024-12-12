import express from "express";
import {
	getUrlAndGenerateIdAndPost,
	redirectShortUrl,
} from "../controllers/url.controller.js";
const router = express.Router();
router.route("/:id").get(redirectShortUrl);
router.post("/", getUrlAndGenerateIdAndPost);
export default router;
