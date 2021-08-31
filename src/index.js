// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

const double = (arr) => arr.map(num => num * 2);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

const filterEven = (arr) => arr.filter(num => num % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const filterStudent = (arr) => arr.filter(student => student.name.length > 5);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

const largest = (...args) => args.reduce((a, b) => Math.max(a,b));

// alternative solution

const alternativeLargest = (...args) => Math.max(...args);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

const sum = (...args) => args.reduce((a,b) => a + b);

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list

const productList = document.querySelector(".product-list");
products.map(product => {
  const productListItem = document.createElement("li");
  productListItem.textContent = product.name;
  productList.appendChild(productListItem);  
})

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const toggleButton = document.querySelector(".toggle");
productList.style.display = "none";
toggleButton.textContent = "Show";
toggleButton.addEventListener("click", () => {
  if(productList.style.display === "block"){
    productList.style.display = "none";
    toggleButton.textContent = "Show";
  } else {
    productList.style.display = "block";
    toggleButton.textContent = "Hide";
  }
})

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

const form = document.querySelector(".product-form");
const searchInput = document.querySelector(".search-input");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(searchInput.value !== "") {
    let searchTerm = searchInput.value;
    const searchFunction = (product) => product.name.slice(0, searchTerm.length) === searchTerm;
    if(products.find(product => searchFunction(product)) === undefined) {
      result.textContent = "No products found.";
      result.style.color = "red";
    } else {
      result.textContent = products.find(product => searchFunction(product)).name;
    }
  }
})
