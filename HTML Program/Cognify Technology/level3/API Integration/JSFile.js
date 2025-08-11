// The endpoint for fetching posts from JSONPlaceholder
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data from the API
function fetchPosts() {
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            // Call the function to display posts
            displayPosts(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to display posts on the page
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    
    // Clear any existing posts in the container
    postsContainer.innerHTML = '';

    // Loop through each post and create HTML to display it
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        
        // Add title and body of the post
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        
        // Append the post to the container
        postsContainer.appendChild(postDiv);
    });
}

// Call the fetchPosts function to load data when the page is loaded
window.onload = fetchPosts;
