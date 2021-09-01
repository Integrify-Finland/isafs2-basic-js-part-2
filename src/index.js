// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

const double=([1,2,3])
double.map((item)=>item*2);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

const filterEven=([1,2,3,4,5,6]);
filterEven.filter((item)=>item%2===0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}];
students.filter((item)=>item.name.length>5);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

const largest =[1,2,3,4,5];
Math.max(...largest);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

const sum = (...arr) => arr.reduce((acc,num)=>acc+num,0);
 sum(1,2,3);

 // 6. You have a list of products

 const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'car1', category: 'transportation' },
  { name: 'car2', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]

// Target the ul element in index.html and render the above list

let productListContainer = document.querySelector(".product-list");
productListContainer.style.display = "none";
products.forEach((product)=>{
  let listElement = document.createElement("li");
  listElement.innerHTML=`name: ${product.name}, category:${product.category}`;
  productListContainer.appendChild(listElement);
});

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", (e) => {
  productListContainer.style.display = productListContainer.style.display === "block" ? "none":"block" ; 
});

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
const searchBtn = (e) => {
  e.preventDefault();
  let input = document.querySelector(".search-input").value;
  const searchArr = products.filter((product)=> input && product.name.includes(input));
  const span = document.querySelector(".result");
  const searchResult = searchArr.reduce((acc, item)=> {
    return acc +`${item.name} `;
  }, "");
  span.innerHTML = searchResult;
}
