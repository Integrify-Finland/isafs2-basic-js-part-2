// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

// 3. Write a function that accepts an array of student object. Each student object will have a name property. 
// Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]

// Target the ul element in index.html and render the above list
//...............comment......................................//
//..generate a string inside the loop and use inner html after //
//..the loop so that the previous li's dont get over written....//
function toggle_inOut() {

  //string item with html tag to be added
  let temp = "";

  for (let index = 0; index < products.length; index++) {

    // two ways to do this. one by traversing through product-list and append
    // let menuItem = document.querySelector(".product-list");
    // let li = document.createElement('li');
    // li.textContent = products[index].name
    // menuItem.appendChild(li)

    //way 2 by creating a temp var to hold a string and add it using inner html
    let tempList = products[index].name;
    temp += "<li>" + tempList + "</li>";
  }

  //way 2
  //add it to innerHTML and this way is way better 
  let list = document.querySelector("ul");
  list.innerHTML = temp;
  //console.log(document.querySelectorAll('li'))

}

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
let button = document.querySelector("button");
button.addEventListener("click", function () {

  toggle_inOut();
  location.reload();
})

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

let input = document.getElementById('browser');
let buttonResult = document.getElementById('button');

let datalist = document.getElementsByTagName("datalist")[0]
let option   = document.createElement('option');

let tempProduct = "";
for (let index = 0; index < products.length; index++) {
  
  let tempProductList = products[index].name;
  tempProduct += "<option>" + tempProductList + "</option>";
  
}

option.innerHTML = tempProduct;
datalist.appendChild(option);


//event listener for input&search
input.addEventListener('input', (event) => {

  // focus on input-box when clicked
  input.focus();

  //hold current input-box value
  temp = "";
  temp += event.target.value;
  //console.log(temp)

  buttonResult.addEventListener("click", function () {

    let span = document.querySelector('span');
    span.textContent = temp;
   
  
  })

});





  