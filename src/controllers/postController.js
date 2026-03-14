let posts = [];

exports.getPosts = (req, res) => {
  res.json(posts);
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: "Title and content required"
    });
  }

  const newPost = {
    id: Date.now(),
    title,
    content
  };

  posts.push(newPost);

  res.status(201).json({
    message: "Post created successfully",
    data: newPost
  });
};

exports.updatePost = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post not found"
    });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  res.json({
    message: "Post updated",
    post
  });
};

exports.deletePost = (req, res) => {
  const id = parseInt(req.params.id);

  posts = posts.filter(p => p.id !== id);

  res.json({
    message: "Post deleted"
  });
};