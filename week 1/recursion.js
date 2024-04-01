// fabanocci using recursion

function fabanocci(n){
    if(n<=1){
        return n;  
    }else{
        return fabanocci(n-1)+fabanocci(n-2);
    }
}
console.log(fabanocci(10));


// // multiply  of array numbers 


function multiply(arr){
    if(arr.lenght<=0){
        return 1;
    }else{
        return arr[arr.lenght-1]*(multiply(arr.slice(0,arr.lenght-1)))
    }
}
console.log(multiply([1,2,3,4]));



// factorial

function factorial(n){
    if(n===0){
        return 1;
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5));



// reverse the string

function reverseStr(string){
    if(string===""){
        return "";
    }else{
        return reverseStr(string.substr(1))+string.charAt(0)
    }
}
console.log(reverseStr("hello world"));






