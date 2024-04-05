// let c =  new String("Hello");
// let b = "Hello";

// if(c === b) 
//     console.log("yes");
// else
//     console.log("no");


// document.body.innerHTML = "hello";

// let a = new String("Hello world");
// document.write(JSON.stringify(a));

// const arr = [1,2,3,4,5];
// arr[2] = 20;
// console.log(arr);
// var i;
// for(i = 0; i < arr.length; i++) {

//     document.write(JSON.stringify(arr[i]));
//     console.log(" ");
// }


// console.log(Array.isArray(arr));
// console.log(typeof(arr));

// //check if object

const obj = {
    "name" : "Ajay",
    "lastName" : "Singh"
}

// console.log(typeof(obj));

const arr = ['name', 2];

//normal for loop

for(let i = 0; i < 2; i++) {
    console.log(arr[i]);
}

//for of
for(let i of arr) {
    console.log(i);
}

//for in
for(let i in obj) {
    console.log(i);
}

for(let i in arr) {
    console.log(i);
}
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.document);
console.log(window)

const res = document.getElementsByTagName("h2");

console.log(res);

//attributes
//all manipulations using document of html


const ne = document.getElementsByTagName("h3");

ne[0].innerText = "Dynamic Text";
console.log(ne);

const firstDiv = document.getElementById("first");

firstDiv.appendChild(ne[0]);