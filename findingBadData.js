// Problem 4: Finding Bad data

// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

// Sample Input & Output:-

// Input: [ 1,2,5 ]

// Output: 0

// Input: [ 2, -5, -7, -13 ]

// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]

// Output: 5

function findingBadData(arr) {
  const goodData = [];
  const badData = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      goodData.push(arr);
    } else if (arr[i] < 0) {
      badData.push(arr);
    }
  }
  return badData.length;
}

const numbers = [-3, -212,-96,2,4,6,-12,];
const result = findingBadData(numbers);
console.log(result);
