//Q1
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json.map(function (obj) { return obj.title; }).filter(function (str) { return str.split(' ').length >= 6; })); });
//Q2
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json.map(function (obj) { return obj.body; })
    .reduce(function (acc, curr) { return acc + curr; })
    .split(' ')
    .map(function (e) { return e.split('\n'); })
    .flat()
    .sort()
    .reduce(function (acc, curr) {
    if (!acc[curr]) {
        acc[curr] = 1;
    }
    else {
        acc[curr]++;
    }
    return acc;
}, {})); });
