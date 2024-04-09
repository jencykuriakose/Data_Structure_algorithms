

// 344 reverse the string 


var reverseString = function(s) {
    
    let left = 0;
    let right = s.length - 1;
  
    while (left <= right) {
      [s[left],s[right]] = [s[right],s[left]]
      left++;
      right--;
    }
    return s;
  };
  

//   334 increase triple subsequence

var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    
    for(const num of nums) {
        if(num <= first){
            first = num;
        }else if(num <= second){
            second = num;
        }else{
            return true;
        }
    }

    return false;
};


// 2418  sort the people

var sortPeople = function(names, heights) {

    let temp,temp1;

    for(let i = 0; i < heights.length-1; i++){

        for(let j = i+1; j < heights.length; j++){

            if(heights[i] < heights[j]){

                temp = heights[i]

                heights[i] = heights[j]

                heights[j] = temp

                temp1 = names[i]

                names[i] = names[j]

                names[j] = temp1  
            }
        }
    }  
    return names
};



// 1534 count good triplet

var countGoodTriplets = function(arr, a, b, c) {

    let count = 0;

    for(let i=0;i<arr.length; i++) {

        for(let j= i+1;j<arr.length;j++){

            for(let k=j+1;k<arr.length;k++){

                let res1 = Math.abs(arr[i]-arr[j]);
                let res2 = Math.abs(arr[j]-arr[k]);
                let res3 = Math.abs(arr[i]-arr[k]);

                if(res1 <= a && res2 <= b && res3 <= c){
                    count ++;
                }
            }
        }
    }

    return count;
    
};

// 2114 maximum number of words in a sentence

var mostWordsFound = function(sentences) {
    let arr = []
    for(let i = 0; i < sentences.length; i++ ){
        let count = 1;
        for(let j = 0; j < sentences[i].length; j++){
            if(sentences[i][j] == " " ){
                count++
            }arr[i]=count
        }
        
    }
    let max = Math.max(...arr);
    return max
};

// 66 plus one

var plusOne = function(arr) {
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]<9){
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};


// 414 the third maximum

var thirdMax = function (nums) {
    let nums1 = new Set(nums);
    let arr = [...nums1];
    arr.sort((a, b) => b - a)
    if(arr.length >= 3) {
        return arr[2]
    }else{
        return arr[0]
    }
};


// 2815 

var maxSum = function(nums) {
    let res = -1
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(largestDigit(nums[i]) === largestDigit(nums[j]) && nums[i] + nums[j] > res) res = nums[i] + nums[j]
        }
    }

    return res
};

let largestDigit = num => {
    let max = num % 10

    while(num > 0) {
        num = Math.floor(num / 10)

        if(num %10 > max) max = num %10
    }

    return max
}



