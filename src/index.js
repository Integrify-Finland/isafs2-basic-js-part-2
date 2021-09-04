// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const double = (arr) => {
	arrDouble = arr.map((item, index) => {
		return item * 2;
	});
	return arrDouble;
};
//console.log(double([1, 2, 3]));

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const filterEven = (arr) => {
	exit = arr.filter((item) => item % 2 === 0);
	return exit;
};
//console.log(filterEven([1, 2, 3, 4, 5, 6]));

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
const filterStudent = (students) => {
	let exitArr = students.filter((student) => {
		return student.name.length > 5;
	});
	return exitArr;
};
let students = [{ name: 'abc' }, { name: 'Umer Khan' }, { name: 'Duy Nguyen' }];

//console.log(filterStudent(students));

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largest = (arr) => {
	return (max = Math.max.apply(null, arr));
};
//console.log(largest([1, 2, 20, 30, 34, 51, 3, 7])); //51

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
const sum = (arr) => {
	let result = 0;
	arr.forEach((element) => {
		result = result + element;
	});
	return result;
};
//console.log(sum([1, 2, 20, 30]));

// 6. You have a list of products
const products = [
	{ name: 'paint', category: 'household' },
	{ name: 'phone', category: 'communication' },
	{ name: 'car', category: 'transportation' },
	{ name: 'laptop', category: 'computer' },
];
// Target the ul element in index.html and render the above list
const productList = document.querySelector('.product-list');
products.forEach((product) => {
	const productListElement = document.createElement('li');
	productListElement.innerText = `${product.name} - ${product.category}`;
	productList.appendChild(productListElement);
});

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
const toggleButton = document.querySelector('.toggle');
toggleButton.addEventListener('click', () => {
	let productListDisplay = productList.style.display;
	productListDisplay === 'none'
		? (console.log('show list'), (productList.style.display = 'block'))
		: (console.log('hide list'), (productList.style.display = 'none'));
});

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
const form = document.querySelector('.product-form');
const resultSpan = document.querySelector('.result');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	let inputValue = event.target.firstElementChild.value;
	products.forEach((item) => {
		if (item.name.includes(inputValue)) {
			resultSpan.innerText = `${item.name} - ${item.category}`;
		}
	});
});
