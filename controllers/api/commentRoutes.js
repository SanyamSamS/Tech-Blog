const router = require('express').Router();
const { Comment } = require('../../models');

// POST route to add a new comment
router.post('/:id/comments', async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.body.userId,
      post_id: req.params.postId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
