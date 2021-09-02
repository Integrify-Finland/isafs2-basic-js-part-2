// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const double = arr => arr.map(e => e * 2);


// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const filterEven = arr => arr.filter(e => e % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
const filterStudent = arr => arr.filter(e => e.name.length > 5);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number < 
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largest = (...num) => Math.max(...num);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
const sum = (...arr) => [...arr].reduce((acc,val) => acc + val);

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list
let list = document.querySelector("ul");

function addList(){
  for(let i = 0; i < products.length; i++){
    let newTodo = document.createElement("li");
    newTodo.innerHTML = products[i].name;
    //console.log(newTodo);
    list.appendChild(newTodo);
  }
}
addList();
    
// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
let button  = document.querySelector("button");
function toggle() {
  if(list.style.display === "none"){
    list.style.display = "block";
  }else {
    list.style.display = "none"
  }
  
} 
button.addEventListener("click", toggle);


// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
let input = document.querySelector("input");
let search = document.querySelector("#search");
let result = document.querySelector(".result");
function results(e) {
  e.preventDefault();
  let word = input.value;
  console.log(word);
  const searchResult = products.filter(product => {
    //console.log(product.name.slice(0, word.length), word);
   if(product.name.includes(word)){
     return result.innerHTML = product.name;
   }
    
  });
 // console.log(searchResult);
}


search.addEventListener("click", results);
