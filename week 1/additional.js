

function countOccurrences(str, substring) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] + str[i + 1] === substring) {
            count++;
        }
    }
    return count;
}

const str = "ajfjhhfjddiidddd";
const substring = "dd";

console.log(countOccurrences(str, substring)); // Output: 3





// normal factorial 

function factorial(n){
let result=1;
for(let i=1;i<=n;i++){
    result=result*i;
}
return result;
};
console.log(factorial(5));


// isprime in normal way 

function isprime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%2===0){
            return true;
        }
    }
    return false;
}
console.log(isprime(10));

// ispowertwo 

function isPowerTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!=0){
            return false
        }
        n=n/2
    }
    return false
};
console.log(isPowerTwo(1));