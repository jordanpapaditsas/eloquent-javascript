// Chapter 2 introduced the standard function Math.min, which returns its smallest argument (see "Return Values" on page 27).
// We can build something like that now.  
// Write a function min that takes two arguments and returns their minimum.

// Solution

function getMin(a, b) {
  return Math.min(a, b);
}

const getMinimum = (a, b) => {
  return Math.min(a, b);
}

console.log(getMin(-1, -5));

console.log(getMinimum(30, 40));

