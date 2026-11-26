'use strict';

let arr = new Array();

let name1 = prompt("Name: ");
let name2 = prompt("Name2: ");

arr.push(name1, name2);

const list = document.getElementById("name-list");

for (const name of arr) {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
}

