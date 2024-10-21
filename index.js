const container = document.getElementsByClassName("container")[0];
const userDiv = document.getElementById("users");

const base_url = "https://jsonplaceholder.typicode.com/";

// async function to fetch users
async function fetchUsers() {
  try {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    let usersData = await users.json();

    userDiv.textContent = "";

    usersData.forEach((user) => {
      const userElement = document.createElement("div");
      userElement.textContent = `ID: ${user.id},
      Name: ${user.name},
      Username: ${user.username},
      Email: ${user.email}`;
      userDiv.appendChild(userElement);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
}

fetchUsers();

// fetch posts for each user
async function fetchPosts(userID) {
  try {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postsData = await posts.json();

    // create div to hold user's posts
    postsData.forEach((post) => {
      if (post.userId === userID) {
        const userPost = document.createElement("div");
        userPost.textContent += `Post Title: ${post.title}`;
        userPost.textContent += `Post Content: ${post.body}`;
        userDiv.appendChild(userPost);
      }
    });
  } catch (error) {
    console.log("An error occured: ", error);
  }
}

const userIDp = 2;
fetchPosts(userIDp);
