// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
let subtractFirstFromLast = (array) => ages[ages.length - 1] - ages[0]
console.log(subtractFirstFromLast(ages))
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(4);
console.log(subtractFirstFromLast(ages))
// Use a loop to iterate through the array and calculate the average age.
var total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];    
}
console.log(total/ages.length);
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// Use a loop to iterate through the array and calculate the average number of letters per name. 
const letters = (names) => {
    let total  = 0;
    for(var i = 0; i < names.length; i++) {
        let name = names[i]
        total += name.length;
    }
    return total / names.length;
};
console.log(letters(names));
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
const combine = (array) => {
    let sentance  = "";
    for(var i = 0; i < array.length; i++) {
        let item = array[i]
        sentance += `${item} `;
    }
    return sentance;
};
console.log(combine(names));
// How do you access the last element of any array?
console.log(names.slice(-1));
// How do you access the first element of any array?
console.log(names[0]);
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalLength = 0;
nameLengths.forEach((length) => totalLength += length);
console.log(totalLength);
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let concate = (word, n) => {
    let newWord = "";
    for (let i = 0; i < n; i++) {
        newWord += word;        
    }
    return newWord
}
console.log(concate("Hello",3))
// Another way to do this as i was searching for awnsers is this

let concate2 = (word, n) => Array(n).fill(word).join("")
console.log(concate2("Bye",3));
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Bill", "Sikes"))
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = [1, 2, 35, 4, 54];
let greaterThenOneHundred = (array) =>{
    let sum = array.reduce((a, b) => a + b);
    return sum > 100
}
console.log(greaterThenOneHundred(numbers))
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
let average = (array) => array.reduce((a, b) => a + b)/array.length
console.log(average(numbers));
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let greaterAverage = (array1, array2) => {
    let average2 = (array) => array.reduce((a, b) => a + b)/array.length
    return average2(array1) > average2(array2)
}
console.log(greaterAverage(numbers,nameLengths))
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let willBuyDrink = (isHotOutside,moneyInPocket) => isHotOutside === true & moneyInPocket > 10.50
console.log(willBuyDrink(true, 12.50));
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// takes the date and tells you how long it will take to make it to that date
let dateEntered = new Date('6-22-24');
let daysTell = (date) => {
    let date1 = new Date(date);
    let date2 = new Date();
    let diff = Math.abs(date1 - date2);
    return `It will take ${Math.round((diff/1000/60/60)/24)} days ${Math.round((diff/1000/60/60)%24)} hrs`
}
console.log(daysTell(dateEntered))