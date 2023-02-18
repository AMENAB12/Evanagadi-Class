const myFirst = require('./myFirst');
const firstFunction = myFirst.myMultiplier;
const mySecond = require('./mySecond');
const secondFunction = mySecond.myMultiplier;



// const result1 = myFirst(5);
// const result2 = mySecond(5);


console.log(firstFunction(5));
console.log(secondFunction(5));

// console.log(firstFunction(14));
// console.log(`Result from myMultiplier: ${result1}`);
// console.log(`Result from myCollector: ${result2}`);

const fs = require('fs');

/** A */
// const myFirst = require('./myFirst');
// const firstFunction = myFirst.myMultiplier;


const inputNumber = 14;
const result = firstFunction(inputNumber);

const message = `The value of ${inputNumber} when passed through the myMultiplier function is ${result}.`;

// fs.writeFile('results.txt', message, (err) => {
//   if (err) throw err;
//   console.log('The result has been saved to results.txt');
// });
/** B */
// const { myMultiplier } = require('./mySecond');
// const mySecond = require('./mySecond');
// const secondFunction = mySecond.myMultiplier;


const inputNumbers = 14;
const results = secondFunction(inputNumbers);

const messages = `The value of ${inputNumber} when passed through the myMultiplier function is ${result}.`;

fs.writeFile('results.txt', message + '\n' + messages, (err) => {
  if (err) throw err;
  console.log('The result has been saved to results.txt');
});