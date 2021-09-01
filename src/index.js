// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const doubleArray = arr => arr.map(num => num * 2);
// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const evenNumbers = arr => arr.filter(num => num % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
let students = [{ name: "Umer Khan" }, { name: "Duy Nguyen" }, { name: "ad" }, { name: "cd" }, { name: "Adnan Taj" }];
const getLargerName = arr => students.filter(student => student.name.length > 5);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largestNumber = arr => Math.max(...(arr));

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
const sumNumers = arr => arr.reduce((a, b) => a + b);

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// function addProducts(){
//   let productList = document.getElementsByClassName(product-list);

// }
// Target the ul element in index.html and render the above list

let productList = document.querySelector('.product-list');
products.map(product => {
  let li = document.createElement("li");
  li.innerText = `${product.name}`;
  productList.appendChild(li);
})

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
let btnToggle = document.querySelector('.toggle');

btnToggle.addEventListener("click", (e) => {
productList.style.display = productList.style.display == "none" ? "block" : "none";
});

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag


let searchResult = document.querySelector('.result');
btnSearch = document.querySelector('.search-button');
input = document.querySelector('.search-input');


btnSearch.addEventListener("click", (e) => {
  e.preventDefault()
  console.log('button clicked', input.value);
  query = input.value;
  console.log(query);
  result = products.find(product => product.name ==query);
  console.log(result);
  searchResult.innerText = result.name;
  input.value = "";

  // it needs modification.. I will modify it. ;)

//   Array.prototype.slice.call(productList.children).forEach(li => {
//     if (li.innerText.includes(input.value)) {
//         searchResult.innerText = li.innerText
//     }
// })
// e.preventDefault()

});
