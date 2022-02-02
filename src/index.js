// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

const doubleArray = (arr) => {
  return arr.map(item => item * 2)
}
const arr1 = doubleArray([1, 2, 3]);
console.log(arr1)


// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

const filterEven = (arr) => {
  return arr.filter(item => item % 2 === 0)
}
const arr2 = filterEven([1, 2, 3, 4, 5, 6]);
console.log(arr2)

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
const students = [{ name: "abc" }, { name: "Umer Khan" }, { name: "Duy Nguyen" }]
const filterStudent = (stus) => {
  return stus.filter(stu => stu.name.length < 5)
}
const filteredStudent = filterStudent(students)
console.log(filteredStudent)

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

const largest = (...args) => Math.max(...args)
console.log(largest(1, 2, 3, 4, 5, 87, 1))

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

const sum = (...args) => args.reduce((prev, cur) => prev + cur, 0)
console.log(sum(1, 2, 3, 4, 5))
// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list
const list = document.querySelector('.product-list')
const createListItem = (obj) => {
  let li = document.createElement('li')
  li.innerHTML = `<h2><span style='margin-right: 100px'>${obj.name}</span>:<span>${obj.category}</span></h2>`
  return li;
}
products.map(product => list.appendChild(createListItem(product)))

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const btn = document.querySelector('.toggle');
const toggleList = () => {
  if (list.classList.contains('show')) {
    list.style.display = 'none'
    list.classList.remove('show')
  }
  else {
    list.style.display = 'block'
    list.classList.add('show')
  }
}
btn.addEventListener("click",toggleList)
// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
const form = document.querySelector('.product-form')
let input,search
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  input = document.querySelector('.search-input').value
  search = products.filter(product=>product.name.includes(input))
  const res=document.querySelector('.result')
  res.innerHTML = search[0].name
})
