const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get a single blog post by id
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment, include: [User] }]
    });
    res.json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new blog post
router.post('/add', withAuth, async (req, res) => {
  try {
      const newPost = await Post.create({
          title: req.body.title,
          content: req.body.content,
          userId: req.session.user_id 
      });

      res.status(200).json(newPost);
  } catch (error) {
      res.status(500).json({ message: 'Failed to create post' });
  }
});

// Update an existing blog post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add a comment to a blog post
router.post('/:id/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      post_id: req.params.id,
      user_id: req.session.user_id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
