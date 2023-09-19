import PostsController from "../controllers/posts";

const router = require("express").Router();

router.get("/", PostsController.getPosts);

router.post("/", PostsController.createPost);

export default router;
