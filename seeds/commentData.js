const { Comment } = require('../models');

const commentData = [
    {
        "content": "Great post!",
        "user_id": 1,
        "post_id": 1
    },
    {
        "content": "I found this very helpful.",
        "user_id": 2,
        "post_id": 1
    },
    {
        "content": "Nice job!",
        "user_id": 3,
        "post_id": 2
    }
]

const seedComments = () => Comment.bulkCreate(commentData); 

module.exports = seedComments;