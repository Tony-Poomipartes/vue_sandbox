// write a function that adds a list of numbers
function add(...nums) {
  let sum = 0
  for (let num of nums){
    sum += num
  }
  return sum
}



console.log("test 3");
console.log("test 1", add(1, 2, 3, 4, 5));
console.log("test 2", add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//5 Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.
//5 Once you've written your solution, you can test it with different arrays to see if it returns the correct sum. If you'd like, you can share your solution with me and I can provide feedback.

let addArr =(arr) =>
{
    let sum = 0
    for (let i=0; i<arr.length; i++)
    {

    if (i>=0)
    {
      sum+=arr[i]
    }
  }
  return sum
}
console.log("test 3");
console.log("test 1", addArr([1, 2, 3, 4, 5]));
console.log("test 2", addArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));