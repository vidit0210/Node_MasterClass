const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise Resolved");
    reject("Rejected");
  }, 2000);
});

p.then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
});
