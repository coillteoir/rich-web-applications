const searchGithub = () => {
  const input = <HTMLInputElement>document.getElementById("unametext");

  fetch("https://api.github.com/users/" + input.value)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Fetch failed" + response.status);
      }
    })
    .then((data) => generatePage(data));
};

const generatePage = (data) => {
  console.log(data);
  let img = <HTMLImageElement>document.getElementById("profilePic");
  img.src = data.avatar_url;
  document.getElementById("nameText").innerText = "Name: " + data.name;
  document.getElementById("unameText").innerText = "Username: " + data.login;
  document.getElementById("emailText").innerText = "Email: " + data.email;
  document.getElementById("locoText").innerText = "Location: " + data.location;
  document.getElementById("gistText").innerText =
    "Number of Gists: " + data.public_gists;
  document.getElementById("profile").style.visibility = "visible";

  fetch(data.repos_url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Fetch failed" + response.status);
      }
    })
    .then((data) => generateRepos(data));
};

const generateRepos = (data) => {
  const repos = document.getElementById("repos");
  repos.innerText = "";

  const h3 = document.createElement("H3");
  h3.innerText = "User Repos";
  repos.appendChild(h3);

  data.forEach((repo) => {
    const newDiv = <HTMLDivElement>document.createElement("DIV");
    const name = <HTMLParagraphElement>document.createElement("P");
    const description = <HTMLParagraphElement>document.createElement("P");

    name.innerText = "Name: " + repo.name;

    description.innerText = "Description: " + repo.description;

    newDiv.appendChild(name);
    newDiv.appendChild(description);
    repos.appendChild(newDiv);
  });
  repos.style.visibility = "visible";
};
