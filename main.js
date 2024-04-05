document.addEventListener("DOMContentLoaded", function () {
  const endpoint = "https://api.github.com/users/Paulooo0";

  const name = document.querySelector("#profile-name");
  const username = document.querySelector("#profile-username");
  const avatar = document.querySelector("#profile-avatar");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const repos = document.querySelector("#repos");
  const link = document.querySelector("#profile-link");

  fetch(endpoint)
    .then(function (answer) {
      return answer.json();
    })
    .then(function (json) {
      name.innerText = json.name;
      username.innerText = json.login;
      avatar.src = json.avatar_url;
      followers.innerText = json.followers;
      following.innerText = json.following;
      repos.innerText = json.public_repos;
      link.href = json.html_url;
    })
    .catch(function () {
      throw new Error("An error has occurred, try again");
    });
});
