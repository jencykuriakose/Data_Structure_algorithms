 function factorial(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result=result*i;
    }
    return result;
}


 console.log(factorial(0)); 1
console.log(factorial(1)); 1
console.log(factorial(5)); 120





function prime(n){
    if (n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%2===0){
            return true;
        }
    }
    return  false;
};
 console.log(prime(2));
 console.log(prime(4));
 console.log(prime(8));


function recursiveFibonacci(n){
    if(n<=1){
        return n;
    }else{
        return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
    }
}
console.log(recursiveFibonacci(10));        //55



function recursivefactorial(n){
    if(n===0){
        return 1;
    }else{
        return n* recursivefactorial(n-1)
    }
}
console.log(recursivefactorial(5));       //120






//  linear search

function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}


console.log(linearsearch([3 ,4 ,10 ,7 ],10));
console.log(linearsearch([3 ,4 ,1 ,7 ],2));
console.log(linearsearch([3 ,4 ,10 ,7 ,8],8));


// the big-o=o(n) linear

function binarysearch(arr,target){
let leftindex=0;
let rightindex=arr.length-1;
while(leftindex<=rightindex){
let middleindex=Math.floor((leftindex+rightindex)/2);
if(target===arr[middleindex]){
    return middleindex; 
}
if(target<arr[middleindex]){
    rightindex=middleindex-1;
}
else{
    leftindex=middleindex+1;
}
}
return -1
}

console.log(binarysearch([-5,2,4,6,10],6));
console.log(binarysearch([-5,2,4,6,10],2));
console.log(binarysearch([-5,2,4,6,10],20));