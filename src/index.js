"use strict";
// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

let double = arr => arr.map(elm => elm * 2);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

let filterEven = arr => arr.filter(elm => elm % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

let filterStudent = arr => arr.filter(elm => elm.name.length > 5);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

let largest = (...args) => Math.max(...args);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

let sum = (...args) => [...args].reduce((acc, curr) => acc + curr);

// 6. You have a list of products
const products = [
  { name: "paint", category: "household" },
  { name: "phone", category: "communication" },
  { name: "car", category: "transportation" },
  { name: "laptop", category: "computer" },
];
// Target the ul element in index.html and render the above list

const productUlList = document.querySelector(".product-list");
products.map(product => {
  /* Create "li" for the  Categories */
  const li = document.createElement("li");
  li.innerText = product.category;
  /*create sub-"ul" and sub "li"items for the products */
  const subUl = document.createElement("ul");
  const subLi = document.createElement("li");
  subLi.innerText = product.name;
  /* Append the "li", the sub-"ul" and the sub-"li"items for the product to "ul" in the HTML document*/
  subUl.append(subLi);
  li.append(subUl);
  productUlList.append(li);
});

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

/* Hide  Categories and products lists*/
productUlList.style.display = "none";

/* Target the button in index.html */

const toggleBtn = document.querySelector(".toggle");

/* attach an event listener to the button to hide and show the lists*/

toggleBtn.addEventListener("click", ev => {
  productUlList.style.display =
    productUlList.style.display === "none" ? "block" : "none";
});

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

/* target the HTML elements */
const searchInput = document.querySelector(".search-input");
const searchSpan = document.querySelector(".result");
const searchBtn = document.querySelector("#search-btn");

/* Attach eventListener to the input element */

searchInput.addEventListener("input", e => {
  let searchNameArray = [];
  const productsNames = products.map(product => product.name);

  if (e.target.value) {
    searchNameArray = productsNames.filter(product =>
      product.toLowerCase().includes(e.target.value)
    );
    searchNameArray = searchNameArray.map(product => `${product}`);
    searchSpan.innerHTML = searchNameArray;

    /*Attach eventListener to the button*/

    searchBtn.addEventListener("click", e => {
      e.preventDefault();
      searchSpan.innerHTML = searchNameArray;
    });
  }
});
