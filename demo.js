const arr=[-6,20,-2,8,4]

function quicksort(arr){
  if(arr.length<2){
    return arr;
  }
  let pivot=arr[arr.length-1]
  let left=[];
  let rigth=[];
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      rigth.push(arr[i])
    }
  }
  return [...quicksort(left),pivot,...quicksort(rigth)];
}
console.log(quicksort(arr));
console.log("jecncy")