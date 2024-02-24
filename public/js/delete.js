// Delete a post
document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const postId = event.target.value;
            
            if (postId) {
                const response = await fetch(`/api/posts/${postId}`, {
                    method: 'DELETE',
                });
  
                if (response.ok) {
                    document.location.reload(); 
                } else {
                    alert('Failed to delete post');
                }
            }
        });
    });
  });