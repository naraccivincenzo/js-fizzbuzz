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
// Same sa before but with DOM (Bonus Track :-))
const ul = document.getElementById("list");
for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0) {
        li.innerText = "FizzBuzz";
        ul.append(li);
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        li.innerText = "Fizz";
        ul.append(li);
        console.log("Fizz");
    } else if (i % 5 === 0) {
        li.innerText = "Buzz";
        ul.append(li);
        console.log("Buzz");
    } else {
        li.innerText = i;
        ul.append(li);
        console.log(i);
    }
}

