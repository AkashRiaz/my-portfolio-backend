import Post from "./post.model.js";

const insertPostIntoDB = async (payload) => {
  try {
    const post = new Post(payload);
    await post.save();

    return post;
  } catch (error) {
    throw error;
  }
};

export const PostService = {
  insertPostIntoDB,
};
