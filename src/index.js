// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

let elements = [1, 2, 3];
function double() {

    let doubled = elements.map(elem => elem*2);    
   
  return doubled;
}
double();

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function filterEven () {

    let even = arr.filter(elem => elem % 2 === 0);

    return even;
}

filterEven();

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]

function filterStudent() {

    let filteredStudents = students.filter(student => student.name.length > 5);

    return filteredStudents;
}

filterStudent();

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

let manyArgsArr = (...args) =>{
    
  return Math.max(...args);
}

manyArgsArr(10,12,13,15,18,1,45,16);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

let sum = (...args) => {

  return args.reduce((a, b) => a + b, 0);
}
sum(1,2,3,6,8,9,10,15);

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]

// Target the ul element in index.html and render the above list

let ul = document.querySelector("ul");

let list = products.forEach((product) => {          
            
            let li = document.createElement("li");
            let textNode = document.createTextNode(product.name + " : " + product.category);
            li.appendChild(textNode); 
            ul.appendChild(li);
            });


// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show


let toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", toggleList);

function toggleList () {
  if (ul.style.display==="none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
}


// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

let searchButton = document.getElementById("submit");

searchButton.addEventListener("click", searchProduct);

function searchProduct () {
  let prodName = document.getElementById("input").value;
  let span = document.getElementById("search");
  let searchedProduct = products.find(prod => prod.name===prodName);
  if(searchedProduct) {
    span.innerText = searchedProduct.name;
    document.getElementById("input").value="";
  } else {
    span.innerText = "";
    document.getElementById("input").value="";
    alert("Product is not available");
  }
}