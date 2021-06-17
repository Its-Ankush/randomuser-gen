"use strict";
console.log("nigga");
let request = new XMLHttpRequest();
let button = document.querySelector(".btn");
let output = document.querySelector(".output");

let dataLoader = function () {
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      let data = JSON.parse(request.responseText);
      let first = data.results[0].name.first,
        last = data.results[0].name.last,
        pic = data.results[0].picture.large;
      let html = `<br><br><img src=${pic}><br>${first} ${last}`;
      output.innerHTML = html;
      console.log(data.results[0]);
    }
  };
  request.open("GET", "https://randomuser.me/api", true);
  request.send();
};
button.addEventListener("click", dataLoader);
// console.log(request);
