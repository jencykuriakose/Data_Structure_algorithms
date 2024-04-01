function binarysearch(arr,target){
    leftidx=0;
    rightidx=arr.length-1;
    while(leftidx<=rightidx){
        let mid=Math.floor((leftidx+rightidx)/2);
        if(target===arr[mid]){
            return mid;
        }
        if(target<arr[mid]){
            rightidx=mid-1;
        }
        else{
            leftidx=mid+1;
        }

    }
    return -1;
}
console.log(binarysearch([10,20,30,40,50],30));