// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

const numbers = [1,2,3];
const newArr = numbers.map((num)=>{return num*2})
console.log(newArr)

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

//another way of doing
// const numbers = [1,2,3,4,5,6]
// const newArr = numbers.filter(filterEven)
// console.log(newArr)
// function filterEven(num){
//   return !(num%2)
// }

const numbers1 = [1,2,3,4,5,6]
const newArr1 = numbers1.filter((num)=> {return !(num % 2)})
console.log(newArr1)


// 3. Write a function that accepts an array of student object. Each student object will have a 
//name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
const filterStudent = students.filter((student) => {
  return  student.name.length > 5;
})
console.log(filterStudent)


// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

const largest = (...allArgs) => {return Math.max(...allArgs)}
largest(1,2,3,4,5,6)


// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. 
//Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
let sum = (...allArgs) => allArgs.reduce((accumulator,addnum)=> { return addnum += accumulator})
sum(1,2,3,4,5)

//another way
let sum1 = (...allArgs) => {
  let addNums = 0
  for(let i=0; i<allArgs.length ; i++){
    addNums += allArgs[i]
  }
  return addNums;
}
sum1(1,2,3,4,5)


// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' }
]

// Target the ul element in index.html and render the above list
const task_list = document.querySelector('.product-list');

products.map((product) => {
    const li = document.createElement('li')
    li.innerText = product.name + " " + product.category
    task_list.appendChild(li)
})

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',toggleFunction)

  function toggleFunction(e){
    console.log('inside toggle');
    if(e.target.className === 'toggle'){
        task_list.style.display = 'none';
        e.target.className = 'hide';
    }
    else if(e.target.className === 'hide'){
        e.target.className = 'toggle';
        task_list.style.display = 'block';
    }
    e.preventDefault()
  }


// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag


const input_search = document.querySelector(".search-input");
const form_search = document.querySelector(".product-form");
const search_result = document.querySelector(".result");
form_search.addEventListener("submit", searchFunction);


function searchFunction(e){
     if(input_search.value === ""){
       alert("Enter your search");
     }
     else{
      products.find(productNameSearch)
     }
    
     e.preventDefault();
    }

function productNameSearch(product){
  if (product.name.slice(0, input_search.value.length) === input_search.value) {
    return search_result.innerText = product.name
  }
}

