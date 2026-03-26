import express from "express";
import { PostController } from "./post.controller.js";

const router = express.Router();

router.post("/create-post", PostController.insertPostIntoDB);

export const PostRoute = router;
