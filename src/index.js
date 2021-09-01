"use strict";
// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
const numbers = [1, 2, 3];
const double = (numbers) => {
  return numbers.map((num) => num * 2);
};
console.log(double(numbers));
// Ex: double([1,2,3]) => [2,4,6]

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
const arrNumbers = [1, 2, 3, 4, 5, 6];
function filterEven(array) {
  let evenArray = [];
  array.filter((num) => {
    if (num % 2 == 0) {
      evenArray.push(num);
    }
  });
  return evenArray;
}
console.log(filterEven(arrNumbers));
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
const students = [
  { name: "abc" },
  { name: "Umer Khan" },
  { name: "Duy Nguyen" },
];
let filterStudent = (studentLength) => {
  let newStudentName = [];
  studentLength.filter((studentName) => {
    if (studentName.name.length > 5) {
      return newStudentName.push(studentName);
    }
  });
  return newStudentName;
};
console.log(filterStudent(students));
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
let largest = (...args) => {
  return Math.max.apply(null, args);
};
console.log(largest(1, 2, 3, 4, 5, 6, 10, 100));
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
const sum = (...sumThem) => {
  let sumUp = sumThem.reduce((accumulator, sumValue) => accumulator + sumValue);

  return sumUp;
};
console.log(sum(1, 2, 3, 4, 5));
// Ex: sum(1,2,3,4,5) => 15

// 6. You have a list of products
const products = [
  { name: "paint", category: "household" },
  { name: "phone", category: "communication" },
  { name: "car", category: "transportation" },
  { name: "laptop", category: "computer" },
];
// Target the ul element in index.html and render the above list
const product = document.querySelector(".product-list");
products.map(prod => {
  const li = document.createElement("li");
  li.innerText = `${prod.name}: ${prod.category}`
  console.log(prod)
  product.appendChild(li);
});
// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
const btn = document.querySelector(".toggle")
btn.addEventListener("click", (e) => {
  if(product.classList.contains('hidden')){
    product.classList.remove('hidden')
  }else{
    product.classList.add('hidden')
  }
})

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
