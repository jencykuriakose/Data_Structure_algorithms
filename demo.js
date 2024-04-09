// heap

class minHeap{
  constructor(){
    this.heap=[]
  }

getParentIndex(index){
  return Math.floor((index-1)/2);
}
getLeftChildIndex(index){
  return 2*index-1;
}
getRigthChildIndex(index){
  return 2*index+2;
}
swap(index1,index2){
  const temp=this.heap[index1]
  this.heap[index1]=this.heap[index2]
  this.heap[index2]=temp;
}
heapifyUp(index){
  const parentIndex=this.getParentIndex(index);
  if(parentIndex>=0&&this.heap[parentIndex]>this.heap[index]){
    this.swap(index,parentIndex)
    this.heapifyUp(parentIndex)
  }
}
remove(){
  if(this.heap.length===0){
    return null;
  }
  if(this.heap.length===1){
    return this.heap.pop();
  }
  const min=this.heap[0];
  this.heap[0]=thisheap.pop();
  
}

};