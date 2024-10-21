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
      userElement.textContent = `${user.name}`;
      userDiv.appendChild(userElement);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
}

fetchUsers();
