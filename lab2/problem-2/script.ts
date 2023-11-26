//Q1
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((json) =>
    console.log(
      json.map((obj) => obj.title).filter((str) => str.split(" ").length >= 6),
    ),
  );
//Q2

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((json) =>
    console.log(
      json
        .map((obj) => obj.body)
        .reduce((acc, curr) => acc + curr)
        .split(" ")
        .map((e) => e.split("\n"))
        .flat()
        .sort()
        .reduce((acc, curr) => {
          if (!acc[curr]) {
            acc[curr] = 1;
          } else {
            acc[curr]++;
          }
          return acc;
        }, {}),
    ),
  );
