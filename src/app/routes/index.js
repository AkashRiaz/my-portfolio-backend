import express from "express";
import { PostRoute } from "../modules/post/post.route.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/post",
    route: PostRoute,
  },
];

moduleRoutes.forEach((route) => router.use( route.path, route.route));

export default router;
