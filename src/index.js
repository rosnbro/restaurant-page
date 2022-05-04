console.log("this is a test!");

const content = document.querySelector('#content');

let title;
let background;
let description;

title.innerHTML = `<h1></h1>`;
background.innerHTML = `<img src="">`;
description.innerHTML = `<p></p>`;

content.appendChild(title);
content.appendChild(background);
content.appendChild(description);