document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.comment-btn').addEventListener('click', () => {
      document.querySelector('.add-comment-section').style.display = 'block'; // Show the comment form
  });

  document.getElementById('comment-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const content = document.getElementById('comment-content').value.trim();
      const postId = document.getElementById('post-id').value;

      if (content) {
          const response = await fetch(`/api/comments/${postId}`, {
              method: 'POST',
              body: JSON.stringify({ content }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          if (response.ok) {
              location.reload(); // Reload the page to show the new comment
          } else {
              alert('Failed to add comment');
          }
      }
  });
});
