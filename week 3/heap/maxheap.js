class maxHeap {
    constructor() {
      this.heap = []
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
    getLeftIndex(index) {
      return 2 * index + 1;
    }
    getRightIndex(index) {
      return 2 * index + 2;
    }
    swap(index1, index2) {
      const temp = this.heap[index1]
      this.heap[index1] = this.heap[index2]
      this.heap[index2] = temp
  
    }
  
   heapfyUp(index){
    const parentIndex = this.getRightIndex(index)
    if ( parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
         this.swap(index , parentIndex)
         this.heapfyUp( parentIndex)
    }
   }
  
  
   insert(value){
    this.heap.push(value)
    this.heapfyUp(this.heap.length - 1)
   }
  
   remove(){
     if (this.heap.length === 0) {
        return null
     }
     if (this.heap.length === 1) {
       return this.heap.pop()
     }
     const max = this.heap[0]
     this.heap[0] = this.heap.pop()
     this.heapfyDown(0)
     return max
   }
  
   heapifyDown(index){
    const leftChildIndex = this.getLeftIndex(index)
    const rightChildIndex = this.getRightIndex(index)
    let maxIndex = index;
    if (leftChildIndex >= 0 && this.heap[leftChildIndex] > this.heap[maxIndex]) {
        maxIndex = leftChildIndex;
    }
    if (rightChildIndex >= 0 && this.heap[rightChildIndex] > this.heap[maxIndex]) {
        maxIndex = rightChildIndex;
    }
    if (maxIndex !== index) {
        this.swap(index , maxIndex)
        this.heapifyDown(maxIndex); // Corrected method name here
    }
}


  
     // function to insert an element in the heap
     insert(value) { 
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // function to remove the maximum element from the heap
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return max;
    }
  
  
    // function to perform heap sort
    heapSort() {
      const sortedArray = [];
      while (this.heap.length > 0) {
        sortedArray.push(this.remove());
      }
      return sortedArray;
    }
  
  
    // function to build heap from an array
    buildHeapFromArray(array) {
        this.heap = array;
        const firstNonLeafIndex = Math.floor((array.length - 2) / 2);
        for (let i = firstNonLeafIndex; i >= 0; i--) {
            this.heapifyDown(i); // Corrected method name here
        }
    }
    
      
  }
  
  const maxHeapObj = new maxHeap();
    
  maxHeapObj.buildHeapFromArray([3, 7, 2, 1, 9, 8]);
  
  console.log(maxHeapObj.heap); // [9, 7, 8, 1, 3, 2]
  
  console.log(maxHeapObj.remove()); // 9
  
  console.log(maxHeapObj.heap); // [8, 7, 2, 1, 3]
  
  console.log(maxHeapObj.heapSort()); // [1, 2, 3, 7, 8]
  