document.getElementById('comment-form').addEventListener('submit', async (event) => {
  try {
    event.preventDefault();

    const content = document.getElementById('comment-content').value.trim();
    const postId = document.getElementById('post-id').value;


    if (content) {
      const response = await fetch(`/api/comments/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  } catch (err) {
    console.error('Failed to add comment', err);
  }
});
  

  