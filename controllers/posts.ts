import Post from "../models/post";

const PostsController = {
  getPosts: async (req, res) => {
    // Implement logic to fetch and return posts
  },

  getPostById: async (req, res) => {
    // Implement logic to fetch a post by ID
  },

  createPost: async (req, res) => {
    try {
      console.log("I'm here!", req.body);

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

  updatePost: async (req, res) => {
    // Implement logic to update a post by ID
  },

  deletePost: async (req, res) => {
    // Implement logic to delete a post by ID
  },
};

export default PostsController;
