const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim(); // Updated ID
  const content = document.querySelector('#post-content').value.trim(); // Updated ID
  const id = document.querySelector('#post-id').value; // Assuming this ID is correct

  if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/dashboard'); // Redirects to the dashboard
      } else {
          alert('Failed to update post');
      }
  }
};

  
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-post-id')) {
      const id = event.target.getAttribute('data-post-id'); // Updated attribute

      const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
      });

      if (response.ok) {
          document.location.replace('/dashboard'); // Redirects to the dashboard
      } else {
          alert('Failed to delete post');
      }
  }
};
document
    .querySelector('.edit-post-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', delButtonHandler);
    });
