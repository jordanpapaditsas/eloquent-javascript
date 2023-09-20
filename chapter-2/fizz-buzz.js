// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print Fizz instead of the number, for numbers divisible by 5(and not 3), print Buzz.
// After, make sure that the number if its divisible by 3 and 5 to print out FizzBuzz.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

