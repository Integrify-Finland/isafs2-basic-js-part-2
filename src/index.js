// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

const double = (arr) => arr.map((item) => item * 2)

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

const filterEven = (arr) => arr.filter((item) => item % 2 === 0)

filterEven ([2,3,4,44,55,66,77,88])

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

// const students = (arr) => arr.filter(({ name, age }) => name.length > 5 && age.length > 18);
// or
// const students = (arr) => arr.filter((item) => item.name.length > 5 && item.age.length > 18);
const students = (arr) => arr.filter(({ name }) => name.length > 5);

console.log (students([{name: "dfkjffjjdsf"}, {name: "jrdghsfhjsdjkjs"}, {name: "kngf"}]))
// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largest = (...numbers) => Math.max(...numbers)

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

const sum = (...numbers) => numbers.reduce((acc,curr) => acc + curr)

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]

const productListTag = document.getElementsByClassName("product-list")[0];

console.log(productListTag);

let ulContent = ''; 

products.map(product => {
  const productLi = document.createElement('li');
  productLi.innerHTML = product.name + ' - ' + product.category;
  ulContent = ulContent + productLi;
});

productListTag.appendChild(ulContent);

// Target the ul element in index.html and render the above list

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
