// Find the Maximum Element in an Array


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Test
const nums = [5, 7, 2, 10, 4];
console.log(findMax(nums)); // Output: 10



// Remove Duplicates from an Array

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Test
const num = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4, 5]



// // Check if Array Contains a Given Value



function containsValue(arr, value) {
    return arr.includes(value);
}

// Test
const nus = [1, 2, 3, 4, 5];
console.log(containsValue(nums, 3)); // Output: true
console.log(containsValue(nums, 6)); // Output: false



// // Sum of Array Elements



function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test
const nms = [1, 2, 3, 4, 5];
console.log(sumArray(nums)); // Output: 15















// function reverseStr(str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverseStr(str.substr(1)) + str.charAt(0);
//     }
// }

// console.log(reverseStr("heeloooooooo"));


// function factorial(n){
//     if(n===0){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(5));



// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(12)); 



// string 

// const str="heeloo world"

// console.log("charAt:",str.charAt(2));

// console.log("indexof:",str.indexOf("world"));

// console.log("substring:",str.substring(4));

// console.log("split:",str.split("o"));

// console.log("match:",str.match("i"));

// console.log("toUpperCase:",str.toUpperCase());

// console.log("toLowerCase:",str.toLowerCase());

// console.log("replace:",str.replace("hello","kelo"));

// console.log("trim:",str.trim());

// console.log("concat:",str.concat("this is a concat sentence"));

// console.log("includes:",str.includes("jjj"));


// console.log("repeat:",str.repeat(3));



let arr = [6, 2, 3, 6, 8, 9, 1];
const target = 6;

function swap(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    arr[count++] = target;
  }
}

swap(arr, target);
console.log(arr);













function factoial(){
let result=1;
for(let i=2;i<arr.length;i++){
    result=result*i;
}
return result;
}

console.log(factoial(5));











