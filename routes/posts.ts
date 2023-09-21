import PostsController from "../controllers/posts";
import { Router } from "express";

const router = Router();

router.get("/", PostsController.getPosts);

router.get("/:id", PostsController.getPostById);

router.post("/", PostsController.createPost);

router.put("/:id", PostsController.updatePost);

router.delete("/:id", PostsController.deletePost);

export default router;
