// Problem 1: Let’s play a mind game
// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

// Sample Input & Output

// Input: 5

// Output: 7.5

function mineGame(inputNumber) {
  const multiplication = inputNumber * 3;
  const sum = multiplication + 10;
  const divition = sum / 2;
  const substrition = divition - 5;
  return substrition;
}

const inputPeramiter = 5;
const outputresult = mineGame(inputPeramiter);
console.log(outputresult);
