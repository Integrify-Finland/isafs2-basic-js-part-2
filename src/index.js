// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const double = (arr) => arr.map((item) => item * 2);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
const filterEven = (arr) => arr.filter((item) => item % 2 === 0);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
const filterStudent = (student) =>
  student.filter((item) => (item.name.length > 5 ? item : ""));

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
const largest = (...all) => Math.max(...all);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
/*
const sum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};
*/
const sum = (...numbers) =>
  numbers.reduce(function (sum, item) {
    return sum + item;
  }, 0);

// 6. You have a list of products
const products = [
  { name: "paint", category: "household" },
  { name: "phone", category: "communication" },
  { name: "car", category: "transportation" },
  { name: "laptop", category: "computer" },
];
// Target the ul element in index.html and render the above list
let ul = document.querySelector("ul.product-list");

for (let product of products) {
  const { name, category } = product;
  let li = document.createElement("li");
  li.className = category;
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
}

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show

let toggle = document.querySelector("button.toggle");
toggle.addEventListener("click", (e) => {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag
let searchInput = document.querySelector("input.search-input");
let searchButton = document.querySelector("button[type=submit]");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = searchInput.value;
  const result = document.querySelector(".result");
  result.innerHTML = "";
  const matchResults = products.filter(
    (item) => item.name.substring(0, inputText.length) === inputText
  );
  if (matchResults.length > 0) {
    resultString = matchResults.reduce(function (pre, cur) {
      pre.push(cur.name);
      return pre;
    }, []);
    result.innerHTML = resultString.join(",");
  } else {
    result.innerHTML = "No item found";
  }
});
