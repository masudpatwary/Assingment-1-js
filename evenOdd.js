// Problem 2: Finding even or odd
// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে।

// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

// Input: ‘Phero’

// Output: odd

// Input: ‘Batch7’

// Output: even

function evenOdd(names) {
  const splits = names.split("");
  for (let i = 0; i < names.length; i++) {
    if (splits.length % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}
const result = evenOdd("va");
console.log(result);
