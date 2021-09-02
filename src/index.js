/** @format */

"use strict";

/** @format */

// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const doubleNumbers = (numbers) => {
	return numbers.map((num) => num * 2);
	// console.log(result);
};

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const onlyEvenNumbers = (arr) => {
	return arr.filter((item) => (item % 2 === 0 ? item : ""));
};

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const filterStudents = (arr) => {
	return arr.filter((item) => (item.name.length > 5 ? item.name : ""));
};

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largest = (...args) => {
	return args
		.map((arg) => arg)
		.reduce((prev, cur) => {
			return Math.max(prev, cur);
		}, 0);
};

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
const sum = (...args) => {
	return args
		.map((arg) => arg)
		.reduce((prev, cur) => {
			return prev + cur;
		}, 0);
};

// 6. You have a list of products
const products = [
	{ name: "paint", category: "household" },
	{ name: "phone", category: "communication" },
	{ name: "car", category: "transportation" },
	{ name: "laptop", category: "computer" },
];
// Target the ul element in index.html and render the above list
const prodList = document.querySelector(".product-list");
const markup = products.map((prod) => {
	const li = `<li>${prod.name}</li>`;
	prodList.insertAdjacentHTML("beforebegin", li);
});

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
const button = document.querySelector(".toggle");
button.addEventListener("click", (e) => {
	console.log("button clicked");
});

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
