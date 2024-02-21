const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new blog post
router.post('/', withAuth, async (req, res) => {
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
router.put('/:id', withAuth, async (req, res) => {
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
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
