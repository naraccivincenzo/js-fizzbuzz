`use strict`

/* FizzBuzz
the for loop should print all numbers from 1 to 100
if the number is divisible by 3, print "Fizz"
if the number is divisible by 5, print "Buzz"
if the number is divisible by 3 and 5, print "Fizz Buzz"
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
