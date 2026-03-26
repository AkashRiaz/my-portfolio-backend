import { PostService } from "./post.service.js";

const insertPostIntoDB = async (req, res) => {
  const payload = req.body;
  const post = await PostService.insertPostIntoDB(payload);
  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: post,
  });
};

const getPostsFromDB = async (req, res) => {
  const posts = await PostService.getPostsFromDB();
  res.status(200).json({
    success: true,
    message: "Posts fetched successfully",
    data: posts,
  });
};

export const PostController = {
  insertPostIntoDB,
  getPostsFromDB,
};
