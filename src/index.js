// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const double = (arr) => arr.map((e) => e * 2);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const filterEven = (arr) => arr.filter((e) => e % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property.
//    Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
const students = [
  { name: "abc" },
  { name: "Umer Khan" },
  { name: "Duy Nguyen" },
];
const filterStudents = (students) =>
  students.filter((student) => student.name.length > 5);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number.
//    Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largest = (...all) => Math.max(...all);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number.
//    Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
const sum = (...all) => all.reduce((a, b) => a + b);
// 6. You have a list of products
const products = [
  { name: "paint", category: "household" },
  { name: "phone", category: "communication" },
  { name: "car", category: "transportation" },
  { name: "laptop", category: "computer" },
];
// Target the ul element in index.html and render the above list
ulList = document.querySelector(".product-list");
products.map((product) => {
  let li = document.createElement("li");
  li.innerText = `name: ${product.name}, category: ${product.category}`;
  ulList.appendChild(li);
});
// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
const btntoggle = document.querySelector(".toggle");
btntoggle.addEventListener("click", (e) => {
  if (ulList.style.display === "block") {
    ulList.style.display = "none";
  } else {
    ulList.style.display = "block";
  }
});
// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
const searchinput = document.querySelector(".search-input");
const searchform = document.querySelector(".product-form");
const result = document.querySelector(".result");
searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  products.find((product) => {
    if (
      product.name.substring(0, searchinput.value.length) === searchinput.value
    ) {
      return (result.innerText = product.name);
    }
  });
});
