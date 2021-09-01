// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

function doubler(n){
    return n.map(num => num*2);
}

//let li = [0,1,2,3,4,5,6,7,8,9];
//console.log(doubler(li));

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

function filterEven(n){
    return n.filter(num => num%2 === 0);
}    

//let li = [0,1,2,3,4,5,6,7,8,9];
//console.log(filterEven(li));

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

function filterStudent(n){
    return  n.filter(student => student.name.length > 5);
}

//let students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}, {name:"Deepak"}];
//console.log(filterStudent(students));


// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()


//Done without using Math.max()

function largest_num(...n) { 
    let largest = 0;
    for (i = 0; i < n.length; i++){
        if (n[i] > largest){
            largest = n[i]
        };
      }
    return largest;
}

//console.log(largest_num(0,1,2,3,-1,4,5,6,7,8,9,9999));

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

function sum(...n){
    return n.reduce(function(a,b){
            return a+b;
        }, -1); //for fun put the intial start value as -1 he he
}

//console.log(sum(1,2,3,9,-5));

// 6. You have a list of products
const products = [
  { name: 'paint', category: 'household' },
  { name: 'phone', category: 'communication' },
  { name: 'car', category: 'transportation' },
  { name: 'laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list

products.map(produts => {
  const ulList = document.getElementById("product-list");
  const lis = document.createElement('li');
  lis.innerText = products.name;
  ulList.appendChild(li);
})