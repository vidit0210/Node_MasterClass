getUser(1, user => {
  console.log(user);
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from a Database");
    callback({ id: id, githubUsername: "vidit0210" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Getting Repositories..");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

getRepositories("Vidit0210", user => {
  console.log(user);
});
