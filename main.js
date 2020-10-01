//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings

function arrConvert(arr) {
  let newArr = arr.map(String)
  return newArr;
}
console.log(arrConvert([1, 2, 3, 4]))

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function doubleArr(arrr) {
  let newArrr = [];
  arrr.forEach(function (item) {
    newArrr.push(item * 2);
  });
  return newArrr;
}

console.log(doubleArr([1, 2, 3, 4]));

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

function firstAndLast(strArray) {
  let newArray = [];
  strArray.forEach(function (currentString) {
    if (typeof currentString === "string") {
      newArray.push(currentString[0] + currentString[currentString.length - 1]);
    }
  });
  return newArray;
}
console.log(firstAndLast(['winning', 'tomato']))

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let g = 0; g < 3; g++)
    console.log(i);
}