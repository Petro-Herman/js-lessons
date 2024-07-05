console.log("Hello!");
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))


const startOptions = document.querySelector(".js-start");
const inputPosts = document.querySelector(".js-input");
const outputDiv = document.querySelector(".js-output");

startOptions.addEventListener('click', () => {
const postId = inputPosts.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            outputDiv.innerHTML = `
            <h2>${json.title}</h2>
            <p>${json.body}</p>
            `;
            inputPosts.value = '';
        })
        .catch(error => {
            console.error('Error:', error)
            outputDiv.innerHTML = '<p>Error loading post</p>';
            inputPosts.value = '';
        });
});
