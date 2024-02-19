const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value;
    const userId = getUserId(); // You need to implement a function to get the user ID
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, userId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        location.reload(); // Reload the page after adding the comment
      } else {
        console.error('Failed to add comment');
      }
    } catch (err) {
      console.error('Failed to add comment', err);
    }
  };
  
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
  