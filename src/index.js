// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const arr = [2,4,6];
const double = arr.map(num => num * 2);
console.log(double);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const evenNum = [1,2,3,4,5,6,7,8,9];
const even = evenNum.filter(n => {
  if(n % 2 === 0){
    console.log(n)
  }
})
// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
const students = [{name: "Buba"}, {name: "Amadou"}, {name: "Edme"}, {name: "Harouna"}, {name: "Modou"}];

const filterStudent = students.filter((student) => {
  if(student.name.length > 5){
    console.log(student);
  }
});

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()let largest = (...args) => Math.max(...args);


// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15let sum = (...args) => [...args].reduce((acc, curr) => acc + curr);

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list

const productList = document.querySelector(".product-list");
products.forEach(product => {
  const list = document.createElement('li');
  const listNote = document.createTextNode(`${product.name} ${product.category}`);
  list.appendChild(listNote);
  productList.appendChild(list);
})


// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", function(){
  const currentState = productList.style.display;
  if(currentState === 'block'){
    return productList.style.display = 'none';
  }
  productList.style.display = 'block';
})

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

const form = document.querySelector(".product-form");
const span = document.querySelector(".result");

 
form.addEventListener('submit',function(event){
  event.preventDefault;
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData);
  const {product} = formValues;

  const productFound = products.find( prod =>{
    return prod.name.includes(product)
  })
  if(!productFound){
    return (span.innerText = "Product not found");
  }
  return span.innerText = productFound.name;
});