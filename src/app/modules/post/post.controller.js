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

export const PostController = {
  insertPostIntoDB,
};
