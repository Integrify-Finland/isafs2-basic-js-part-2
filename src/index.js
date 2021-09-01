// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
function doubleAll(element){
  return element * 2;
}
arr = [ 1, 2, 3, 4, 5]
let result = arr.map(doubleAll)
console.log(result)
// shortcut way 
result = arr.map((element)=>element * 2)
console.log('second result:',result)

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
function selectEven(element){
  if(element % 2 == 0){
    return true
  }
}
result = arr.filter(selectEven)
console.log(result)
// shortcut way:
result = arr.filter((element)=>element % 2 == 0)
console.log(result)

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
let students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
filterStudent = students.filter(student => student.name.length > 5)
console.log('filterStudent of name more than 5 letters: ',filterStudent)

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
function largestNumber(...numbers){
  return Math.max(...numbers)
}
result = largestNumber(1, 2, 3, 4, 5, 99)
console.log('The largest number: ', result)
// shortcut way:
function largestNum(...num){
  return num.reduce((a, b)=>a>b?a:b)
}
console.log(largestNum(1, 2, 3, 4, 88, 99, 876))

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
function findSum(...numbers){
  return numbers.reduce((acc, nxt) => acc + nxt )
}
result = findSum(4, 5, 6)
console.log("sum is :", result)


// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const ulist = document.querySelector(".product-list");
const btnToggle = document.querySelector(".toggle");
var searchInput = document.querySelector(".search-input");
const res = document.querySelector(".result")
const form = document.querySelector(".product-form")
btnToggle.addEventListener('click', function (){
  products.forEach((element)=>{
    const newLi = document.createElement('li')
    newLi.innerText = element.name;
    ulist.appendChild(newLi)
  })
  btnToggle.style.visibility = 'visible'? 'hidden': 'visible';
})
form.addEventListener('submit',function(e){
  e.preventDefault()
  res.textContent = "";
  if(searchInput.value !== "") {
    console.log(searchInput.value)
    var found = products.find((product)=> product.name === searchInput.value);
    if(found){
      res.textContent = found.name;
      res.style.color = "green";
    }
    else{
      res.textContent = "Did not match";
      res.style.color = "red";
    }
    
  }  
  }) 


// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span>
