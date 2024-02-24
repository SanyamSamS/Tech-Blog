const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth'); 

// POST route to add a new comment
router.post('/:postId', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      userId: req.session.user_id, 
      postId: req.params.postId, 
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add comment' });
  }
});

module.exports = router;

