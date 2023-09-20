import Post from "../models/post";
import { Request, Response } from "express";

const PostsController = {
  getPosts: async (req: Request, res: Response) => {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      res.status(201).json(posts);
    } catch (error) {
      console.error("Error getting post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPostById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (!post) {
        res.status(404).json({ error: "Post not found" });
      }
      res.status(201).json(post);
    } catch (error) {
      console.error("Error getting post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPost: async (req: Request, res: Response) => {
    try {
      const { title, body } = req.body;
      const newPost = await Post.create({
        title,
        body,
      });
      res.status(201).json(newPost);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePost: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const { title, body } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, body },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(200).json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePost: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedPost = await Post.findByIdAndRemove(id);

      if (!deletedPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(204).send();
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default PostsController;
