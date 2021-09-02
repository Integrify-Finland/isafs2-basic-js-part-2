// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Use the .map() in order to loop through the array. 
// Ex: double([1,2,3]) => [2,4,6]
const numbers = [1000, 23456, 4578]

const double = (numbers) => {
  return numbers.map(x => x *2);
}



// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

const numbers2 = [1,2,4,5,6,7,8,9,10,11]

const filterEven = (numbers2) => numbers2.filter(x => x % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. 
// Return those students that has name length larger than 5
const students = [{name: "deo"}, {name: "Nelson Rosales"}, {name: "John Lennon"}, {name: "John F Kennedy"}]

const studentFilterName = (students) => students.filter(x => x.name.length > 5);


// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. 
//Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

const largest = (...arr) => Math.max(...arr);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. 
//Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

const sum = (...arr2) => arr2.reduce((x, y) => x +y)



// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list
// Element in the index.html file needs to be targeted
// We need to iterate through the elements in the array
// Both properties need to be targeted in the array:name and category
// We need to display both properties in the thml dcoument
// The list needs to be rendered in the thml document
const list = document.querySelector(".product-list");
list.style.listStyle = "none";

products.map(item => {
  let li = document.createElement('li'); 
  li.innerHTML = `name: ${item.name} category: ${item.category}`;
  list.appendChild(li)

}); 
// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
const btn = document.querySelector('.toggle')
btn.addEventListener('click', () => {
  if(list.style.display === 'none'){
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
})

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name 
//from the list above
// and show it in the <span> tag
//input value must iterate through "products" list
// Input value must match with items in list "products"
// If input query matches the items in the "products" list must be added to the "result" element
const form2 = document.querySelector('.product-form')
const btn2 = document.querySelector('.btn2');
const query = document.querySelector('.search-input')
const result = document.querySelector('.result')
const errMessage = 'Please add a query';
const li = document.createElement('li')
const clearList = document.querySelector('.remove')

const clear = () => {
  while(result.firstChild){
    result.removeChild(result.firstChild)
  }
}

clearList.addEventListener('click', clear)

const queryValidator = (e) => {
  e.preventDefault()

  if(query.value === ''){
    document.getElementById('field-empty').innerHTML = errMessage;

  } else {
    products.find(itemSearch)
  }
}

form2.addEventListener('submit', queryValidator);
const itemSearch = (item) => {
  if(item.name.slice(0, query.value.length) === query.value){
  result.appendChild(document.createElement('li')).appendChild(document.createTextNode(item.name));
    
  } 
}


