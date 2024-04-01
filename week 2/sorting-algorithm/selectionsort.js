const arr = [-6, 20, 8, -2, 4];

function selectionsort(arr){
    let n=arr.length;
    let min;
    for(let i=0;i<n;i++){
        min=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
    }
    
    let temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
    }
    return arr;
};
console.log(selectionsort(arr));