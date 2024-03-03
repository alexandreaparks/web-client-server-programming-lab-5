console.log('Hello World!')

// 3 ways to create variables

let color = 'blue'

var size = 'medium'  // wider scope - can cause bugs

const language = 'JavaScript'  // cannot change this variable - final
// const is good for representing HTML elements
// language = 'C#'  // error

let quantity = 5  // can be integer or floating-point
let distance = 4.5

let text = 'Hello World'
let message = "Hi Programmers"  // can use either single or double quotes

console.log('There are ' + quantity + ' programmers')  // can join strings with numbers

let todayTemp = 75
console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')  // formatted with 2 decimal places

// template string 
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is ${todayTemp}F`)