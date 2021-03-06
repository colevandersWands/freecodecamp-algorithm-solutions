// ES6: Write Higher Order Arrow Functions
// It's time we see how powerful arrow functions are when processing data.

// Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.

// Read the following code:

// FBPosts.filter(function(post) {
//   return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
// })
// We have written this with filter() to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:

// FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
// This code is more succinct and accomplishes the same task with fewer lines of code.


// Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

// User did replace var keyword.
// squaredIntegers should be a constant variable (by using const).
// squaredIntegers should be an array
// squaredIntegers should be [16, 1764, 36]
// function keyword was not used.
// loop should not be used
// map, filter, or reduce should be used

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  let squaredIntegers = arr.filter((num) =>
    num > 0 && num % 1 == 0
  );
  squaredIntegers = squaredIntegers.map(num =>  Math.pow(num, 2));

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);