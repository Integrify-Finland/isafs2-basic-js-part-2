// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
array = [1, 2, 3]
result = array.map((item) => item * 2)
console.log('result', result)

//another way
function double(item) {
    return item * 2
}
array = [1, 2, 3]
result = array.map(double)
console.log(result)

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
function filterEven(element) {
    if (element % 2 == 0) {
        return true
    }
}
array = [1, 2, 3, 4, 5, 6]
result = array.filter(filterEven)
console.log(result)

//another way
array = [1, 2, 3, 4, 5, 6]
result = array.filter((element) => element % 2 == 0)
console.log('result:', result)

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [{ name: "abc" }, { name: "Umer Khan" }, { name: "Duy Nguyen" }]
result = students.filter((student) => student.name.length > 5)
console.log(result)

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6)=> 6
// Hint: use Math.max()

function largest(...numbers) {
    return Math.max(...numbers)
}
result = largest(1, 2, 3, 4, 5, 6)
console.log('The largest no. is: ', result)

//another way

function largest(...number) {
    return number.reduce((a, b) => a > b ? a : b)
}
result = largest(1, 2, 3, 4, 5, 6)
console.log('The largest no. is: ', result)

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

function sum(...numbers) {
    return numbers.reduce((first, second) => first + second)
}
result = sum(1, 2, 3, 4, 5)
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

// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag

const list = document.querySelector(".product-list");
const btnToggle = document.querySelector(".toggle");
var searchInput = document.querySelector(".search-input");
const res = document.querySelector(".result")
const form = document.querySelector(".product-form")
btnToggle.addEventListener('click', function() {
    products.forEach((element) => {
        const newList = document.createElement('li')
        newList.innerText = element.name;
        list.appendChild(newList)
    })
    btnToggle.style.visibility = 'visible' ? 'hidden' : 'visible';

})
form.addEventListener('submit', function(e) {
    e.preventDefault()
    res.textContent = "";
    if (searchInput.value !== "") {
        console.log(searchInput.value)
        var found = products.find((product) => product.name === searchInput.value);
        if (found) {
            res.textContent = found.name;
        } else {
            res.textContent = "It doesnt match";
        }
    } else {
        res.textContent = "Write something inside the the box above !!!"
    }
})