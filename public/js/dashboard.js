// Create a new post
const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/homepage');
        } else {
          alert('Failed to add post');
        }
      } catch (err) {
        console.error('Failed to add post', err);
      }
    } else {
      alert('Please fill out all fields');
    }
  };
  
  document.querySelector('#post-form').addEventListener('submit', postFormHandler);