// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const myArrayFunc = (arr) => arr.map((number) => number * 2)

console.log(myArrayFunc([1,2,3]))

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const myOtherArrowFunc = (arr2) => arr2.filter((number) => number % 2 === 0)

console.log(myOtherArrowFunc([1,2,3,4,5,6,7]))

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const studentFilter = (arr) => arr.filter((obj) => obj.name.length > 5);


console.log(studentFilter([{name:"Tatiana"}, {name:"jose"}, {name: "Juanito"}]))

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

const largest = (...args) => Math.max(...args) 
//first args creates an array, the secons args uncreates the array because Math.max doesn't accept array it needs numbers

console.log(largest(1, 2, 3, 4, 5, 6, 7))
// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0) //0 means the sum starts from 0

console.log(sum(1, 2, 3, 4, 5, 6, 7))


// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list

const ulList = document.querySelector('.product-list')

products.map((prod) => {
  console.log('prod', prod)
  const li = document.createElement('li')
  const productDescription = `${prod.name}: ${prod.category}`
  console.log('description', productDescription)
  const textNode = document.createTextNode(productDescription)

  li.appendChild(textNode)
  ulList.appendChild(li)
})
​



// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const button = document.querySelector('.toggle')
button.addEventListener('click', () => {
  const computedStyle = window.getComputedStyle(ulList)
  const currentDisplay = computedStyle.getPropertyValue('display')

  //const currentDisplay = ulList.style.display
  //console.log('current', computedStyle.getPropertyValue('display'))
  //ulList.style.display = 'block'
  if (currentDisplay === 'block') {
    ulList.style.display = 'none'
  } else {
    ulList.style.display = 'block'
  }
})

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

const input = document.querySelector('.search-input')
const form = document.querySelector('.product-form')
const spanResult = document.querySelector('.result')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('submit')

  const formData = new FormData(form)
  const formValues = Object.fromEntries(formData)
  console.log('form values', formValues)


  //products = [{}, {}, {}] is an array of objects
  const foundProduct = products.find(() => {
    if (prod.name === formValues.product) {
      return true
    }
    return false
  })
  console.log('found', foundProduct)

  const span = document.createElement('span')
  const foundProduct = `${prod.name}: ${prod.category}`
  const textNode = document.createTextNode(foundProduct)

  span.appendChild(textNode)
  spanResult.appendChild(span)
})

// input.addEventListener('input', (event) => {
//   console.log('type', event.target.value)
//   const userInput = event.target.value
// })

// const submitButton = document.querySelector('.submit-button')
// submitButton.addEventListener('click', () => {

// })