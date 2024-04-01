// function linearSearch(arr,target){
// for(let i=0;i<=arr.length;i++){
// if(arr[i]===target){
//     return i;
// }
// }
// return -1;
// }
// console.log(linearSearch([5,4,3,6,7],7));    //output:4




function linearsearch(arr,target){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===target){
            return i;
        }
      
    }
    return -1;
}
console.log(linearsearch([2,4,5,7,8,9],2));




