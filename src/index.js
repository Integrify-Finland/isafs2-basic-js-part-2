// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

  const ArrayOfNumbers = [1, 2, 3, 4, 5].map(num => num * 2)
  console.log(ArrayOfNumbers)

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

const ArrayOfNums = [1, 2, 3, 4, 5].filter(num => num % 2 === 0)
console.log(ArrayOfNumbers)

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const ArrayofStudents = arr => arr.filter(obj => obj.name.length > 5)

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

let array = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...array))

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

const object1 = { 'a': 1 , 'b': 2 , 'c':3 }
console.log(Object.values(object1).reduce((a, b) => a + b, 0));
// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list
const productList = document.querySelector('.product-list')
products.forEach(product => {
  const li = document.createElement('li')
  const text = document.createTextNode(`${product.name}-${product.category}`)

  li.appendChild(text)
  productList.appendChild(li)
})
// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const button = document.querySelector('.toggle')
button.addEventListener('click', () => {
  const currentStyle = productList.style.display
  currentStyle === 'block' ?
  productList.style.display = 'none' :
  productList.style.display = 'block'
})
// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

const form = document.querySelector('.product-form')
const span = document.querySelector('.result')

form.addEventListener('submit', event => {
  event.preventDefault()
  console.log('event', event)
  const formData = new FormData(event.target)
  const formValues = Object.fromEntries(formData)
  const { product } = formValues

  const foundProduct = products.find(prod => {
    return prod.name.includes(product)
  })

  if(!foundProduct) {
    return (span.innerText = 'product not found')
  }

  span.innerText = foundProduct.name
})