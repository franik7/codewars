function repeatStr(n, s) {
return s.repeat(n);
}


// DESCRIPTION:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
//loading...

let acub = a[0] * a[1] * a[2]
let bcub = b[0] * b[1] * b[2]
if (acub > bcub) {
return acub - bcub
} else {
return bcub - +acub
}
}


// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function getLength(arr) {
//return length of arr
return arr.length
}

function getFirst(arr) {
//return the first element of arr
return arr[0]
}

function getLast(arr) {
//return the last element of arr
return arr[arr.length - 1]
}

function pushElement(arr) {
var el = 1;
//push el to arr
arr.push('el')
return arr
}

function popElement(arr) {
//pop an element from arr
arr.pop()
return arr
}


// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter(birds) {
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

// return an array containing all of the strings in the input array except those that match strings in geese

filteredArray = birds.filter(e => e !== 'African')
filteredArray2 = filteredArray.filter(b => b !== 'Roman Tufted')
filteredArray3 = filteredArray2.filter(c => c !== 'Toulouse')
filteredArray4 = filteredArray3.filter(d => d !== 'Pilgrim')
filteredArray5 = filteredArray4.filter(g => g !== 'Steinbacher')

return filteredArray5

};


// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo() {
return !true
}


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
// TODO May the force be with you
const count = arrayOfSheep.filter(Boolean).length;
return count
}


// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
//your code here


for (var i = 0; i < arr.length; i++) {
arr.splice(i + 1, 1);
}
return arr

}


// This code does not execute properly. Try to figure out why.
function multiply(a, b) {
return a * b
}


//Training JS #5: Basic data types--Object

function animal(obj){

var obj = {name:obj.name,
		legs: obj.legs,
		color: obj.color
		}

return(`This ${obj.color} ${obj.name} has ${obj.legs} legs.`)

}


//#6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val){
if (val)  return "true";
else    return "false";
}


//   Training JS #7: if..else and ternary operator

function saleHotdogs(n){
if(n < 5) {
return n * 100
} else if (n >= 5 && n < 10) {
	return n * 95
} else if (n >= 10) {
	return n * 90
}
}


//   Training JS #8: Conditional statement--switch

function howManydays(month){
var days;
switch (month){
case 2:
days = 28
break
case 4:
days = 30
break
	case 6:
days = 30
break
	case 9:
days = 30
break
	case 11:
days = 30
break
default:
days = 31

}
return days;
}


//Training JS #10: loop statement --for

function pickIt(arr){
var odd=[],even=[];
//coding here
for(i = 0; i < arr.length; i++){
if (arr[i] % 2 === 0) {
even.push(arr[i])
} else odd.push(arr[i])
}

return [odd,even];
}


//Training JS #11: loop statement --break,continue

function grabDoll(dolls){
var bag=[];
//coding here
for (let i = 0; i < dolls.length; i++){
if(dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
bag.push(dolls[i])
} else continue

if (bag.length === 3){
break
}
}

return bag;
}


//Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj){
//coding here
let arr = []


for (key in obj){
let keyLength = key.length
let valueLength = obj[key].length

if (keyLength == 5) {
arr.push(key)
}
if (valueLength == 5) {
arr.push(obj[key])
}
}
return arr
}


//#13: Number object and its properties

function whatNumberIsIt(n){
//coding here
if (n === Number.MAX_VALUE) {
return("Input number is Number.MAX_VALUE")
} else if (n === Number.MIN_VALUE) {
return("Input number is Number.MIN_VALUE")
} else if (n === Number.NEGATIVE_INFINITY) {
return("Input number is Number.NEGATIVE_INFINITY")
}else if (n === Number.POSITIVE_INFINITY) {
return("Input number is Number.POSITIVE_INFINITY")
}else if (n) {
return(`Input number is ${n}`)
}else if (n == 0) {
return("Input number is 0")
}  else if (!n !== NaN) {
return("Input number is Number.NaN")
}
}
whatNumberIsIt()


// Training JS #14: Methods of Number
//object--toString() and toLocaleString()

function colorOf(r,g,b){
//coding here


var k =  r.toString(16)
var l =  g.toString(16)
var m =  b.toString(16)


	if (k.length < 2){
	var k = "0" + k
	}

	if (l.length < 2){
	var l = "0" + l
	}
	if (m.length < 2){
		var m = "0" + m
	}

return ("#" + k+ l+ m)

}


//Rock Paper Scissors!

const rps = (p1, p2) => {
if(p1 == "scissors" && p2 == "paper" || p1 == "rock" && p2 == "scissors" || p1 == "paper" && p2 == "rock"){
	return("Player 1 won!")
} else if (p2 == "scissors" && p1 == "paper" || p2 == "rock" && p1 == "scissors" || p2 == "paper" && p1 == "rock"){
	return("Player 2 won!")
} else if(p1 == "paper" && p2 == "paper" || p1 == "scissors" && p2 == "scissors" || p1 == "rock" && p2 == "rock"){
	return("Draw!")
}
};


//   Total amount of points

function points(games) {
let total = 0

for(let i = 0; i< games.length; i++){
	if(games[i][0] > games[i][2]){
	total += 3
	} else if (games[i][0] < games[i][2]){
	total += 0
	} else {
	total += 1
	}
}
return total
}


// Reverse List Order

function reverseList(list) {
let listReverse = list.reverse()
return listReverse
}


// Find Multiples of a Number

function findMultiples(integer, limit) {
//your code here
var arr = []
for (let i = 1; i<=limit/integer; i++){

if(i * integer <= limit){
	arr.push(i* integer)
}

} return arr


// Convert a String to a Number!
const stringToNumber = function(str){
// put your code here
let strToNum = Number(str)
return strToNum
}


// Convert a Number to a String!
function numberToString(num) {
// Return a string of the number here!

let string = num.toString()
return string
}


//Convert number to reversed array of digits
function digitize(n) {
//code here
let splitN = n.toString().split('')
let splitNum = splitN.map(x => Number(x))
let splitNu = splitNum.reverse()
return splitNu
}


//Return Negative
function makeNegative(num) {
// Code?
if(num<0){
	return num * 1
} else if (num > 0) {
	return num * (-1)
} else {return 0}
}


//Sum without highest and lowest number
function sumArray(array) {
if (!array || array.length <= 1) {
	return 0;
	}

	let sortedArray = array.sort(function(a, b){return a-b});
	let lowestNum = sortedArray[0]
	let highestNum = sortedArray[sortedArray.length - 1]


	let arraySum = 0
	for(let i = 0; i<sortedArray.length; i++){

		arraySum +=sortedArray[i]

	}

return arraySum- lowestNum - highestNum
}


//Keep Hydrated!
function litres(time) {
return Math.floor(time/2)
}


//Printer Errors(7kyu)
function printerError(s) {
// your code
s = s.split('');

let goodCounter = 0
let badCounter = 0

for(let i = 0; i< s.length;i++){
if((
	s[i] === 'a' ||
	s[i] === 'b' ||
	s[i] === 'c' ||
	s[i] === 'd' ||
	s[i] === 'e' ||
	s[i] === 'f' ||
	s[i] === 'g' ||
	s[i] === 'h' ||
	s[i] === 'i' ||
	s[i] === 'j' ||
	s[i] === 'k' ||
	s[i] === 'l' ||
	s[i] === 'm'
)){
} else {
	badCounter++
}

} console.log(goodCounter)
console.log(badCounter)
console.log(s.length)
return (badCounter +"/"+s.length)
}


//Sum The Strings
function sumStr(a,b) {
return (Number(a) + Number(b)).toString()
}


//Remove First and Last Character
function removeChar(str){
//You got this!
	let arr = str.split("")
	arr.pop()
	arr.shift()
	let str2 = arr.join("")
	return str2
};


//Find Maximum and Minimum Values of a List
var min = function(list){
list.sort((a,b) => a-b)
return list[0];
}

var max = function(list){
list.sort((a,b) => b-a)
return list[0];
}


//Is this my tail?
function correctTail(body, tail){
let splitBody = body.split("")
console.log(splitBody)
if(splitBody[splitBody.length - 1] == tail){
	return true
} else {
	return false
}
}


//Grader
function grader(score) {
if(score < 0.6){
	return "F"
} else if (score < 0.7){
	return "D"
} else if (score < 0.8){
	return "C"
} else if (score <0.9){
	return "B"
} else if (score <= 1){
	return "A"
} else {
	return  "F"
}
}


//Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
//coding and coding..
let x = nCols - col +1
let y = nRows - row
let a = x*y
return a
}


//Don't give me five! (7 kyu)
function dontGiveMeFive(start, end) {
let arr = [];
for (let i = start; i <= end; i++) {
	if (!String(i).includes("5")) {
	arr.push(i);
	}
}
let count = 0
for (let k = 0; k < arr.length; k++){
	count++
}
return count
}


//Get the Middle Character (7 kyu)
function getMiddle(s){
//Code goes here!

let split = s.split("")

let middleIndex = Math.floor((0 + split.length) / 2)

if(middleIndex % 2 === 0 && split.length % 2 ===0){
return(split[middleIndex -1] + split[middleIndex])
} else if(middleIndex % 2 !== 0 && split.length % 2 ===0){
return(split[middleIndex -1] + split[middleIndex])
} else {
return(split[middleIndex])
}
}

// Descending Order (7 kyu)
function descendingOrder(n){
let split = n.toString().split("")
let split2 = split.sort((a, b) => b-a);
let split3 = split2.join("")
return Number(split3)
}


//Disemvowel Trolls (7 kyu)
function disemvowel(str) {
let split = str.split("")

split = split.filter(val => val !== "a");
split = split.filter(val => val !== "e");
split = split.filter(val => val !== "i");
split = split.filter(val => val !== "o");
split = split.filter(val => val !== "u");
split = split.filter(val => val !== "A");
split = split.filter(val => val !== "E");
split = split.filter(val => val !== "I");
split = split.filter(val => val !== "O");
split = split.filter(val => val !== "U");

split = split.join("")

return(split)
}


//Reversed Strings

function solution(str){

let split = str.split("")
let reverse = split.reverse()
let joined = reverse.join("")

return joined
}


//Vowel Count (7 kyu)
function getCount(str) {

let split = str.split("")
let sum = 0
for (let i = 0 ; i < split.length; i++){
	if (split[i] == "a" || split[i] == "e" || split[i] == "i" || split[i] == "o" || split[i] == "u"){
	sum +=1
	}

}return sum
}


//Highest and Lowest (7 kyu)
function highAndLow(numbers){

let arr = numbers.split(" ").map(Number)
let min = Math.min(...arr)
let max = Math.max(...arr)
return(`${max} ${min}`)
}


// Get Nth Even Number
function nthEven(n){
// your code here
for (i = 0; i <n ; i +2){
	return n*2-2
}
}

// Switch it Up!
function switchItUp(number){
if(number == 1){
	return "One"
} else if(number == 2){
	return "Two"
}else if(number == 3){
	return "Three"
}else if(number == 4){
	return "Four"
}else if(number == 5){
	return "Five"
}else if(number == 6){
	return "Six"
}else if(number == 7){
	return "Seven"
}else if(number == 8){
	return "Eight"
}else if(number == 9){
	return "Nine"
}else if(number == 0){
	return "Zero"
}
}

// Get the mean of an array
function getAverage(marks){
const initialValue = 0;
const sumWithInitial = marks.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue)
	return Math.floor(sumWithInitial / marks.length)
}

// Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
return Math.floor(hol / (normPrice * discount * 0.01))
}

// Calculate average
function findAverage(array) {
// your code here
if(array.length == 0){
	return 0
} else {
	let total = 0
	for(let i = 0; i < array.length; i++){
	total += array[i]
	}
	return total / array.length
}
}


// A Needle in the Haystack
function findNeedle(haystack) {
// your code here
for (i = 0 ; i < haystack.length ; i++){
	if(haystack[i] == "needle"){
	let num = haystack.indexOf("needle")
	return (`found the needle at position ${num}`)
	}
}
}

// Exclusive "or" (xor) Logical Operator
function xor(a, b) {
if(a == true && b == false){
	return true
} else if (a == false && b == true){
	return true
} else {
	return false
}
}

// Say hello! (7 kata)
function greet(name) {
if(!name || name == null || name == ""){
	return null
} else {
	return (`hello ${name}!`)
}
}

// Array Array Array (7 kata)
function explode(x) {

let firstel = x[0]
let secondel = x[1]

if (typeof (firstel) === "number" && typeof (secondel) === "number") {
	let newArr = []
	for (let i = 0; i < firstel + secondel; i++) {
		newArr.unshift(x)
	}
	return newArr

} else if (typeof (firstel) === "number" && typeof (secondel) != "number") {
	let newArr2 = []
	for (let i = 0; i < firstel; i++) {
		newArr2.unshift(x)
	}
	return newArr2

} else if (typeof (firstel) != "number" && typeof (secondel) === "number") {
	let newArr3 = []
	for (let i = 0; i < secondel; i++) {
		newArr3.unshift(x)

	}
	return newArr3

} else if (typeof (firstel) != "number" && typeof (secondel) != "number") {
	return "Void!"
}
}

//Array plus array
function arrayPlusArray(arr1, arr2) {
const initialValue = 0;
const sumWithInitial = arr1.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue
);

const initialValue2 = 0;
const sumWithInitial2 = arr2.reduce(
(accumulator2, currentValue2) => accumulator2 + currentValue2,
initialValue2
);
return sumWithInitial + sumWithInitial2
}

//Is n divisible by x and y?
function isDivisible(n, x, y) {

if(n % x == 0 && n % y == 0){
	return true
} else {
	return false
}
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
numbers.sort(function(b, a){return b - a});
return numbers[0] + numbers[1]
}


//Flatten and sort an array
function flattenAndSort(array) {
let flatted = (array.flatMap((element) => element));
flatted.sort(function(a, b){return a - b});
return flatted;
}


// Complementary DNA (7 kata)
function DNAStrand(dna){
//your code here

let arr = dna.split("")
let newArr = []
for(let i = 0;i< arr.length;i++){

if(arr[i] == "A"){
	newArr.push("T")
} else if(arr[i] == "T")
	{
	newArr.push("A")
}else if(arr[i] == "G")
	{
	newArr.push("C")
}else if(arr[i] == "C")
	{
	newArr.push("G")
}
} let newArr2 = newArr.join("")

return newArr2
}


//Negative Connotation (7 kata)
function connotation(str) {

let arr = str.split(/\s+/)
let arr2 = arr.filter(word => word !== "")
let newArr = []

for(let i = 0; i<arr2.length; i++){

let firstLetter = arr2[i][0].toLowerCase()

newArr.push(firstLetter)

}

let count = 0
let otherCount = 0

for(let j = 0; j<newArr.length; j++){
let firstSecEl = newArr[j][0]
if(firstSecEl == "a" || firstSecEl == "b" || firstSecEl == "c"|| firstSecEl == "d"|| firstSecEl == "e"|| firstSecEl == "f"|| firstSecEl == "g"|| firstSecEl == "h"|| firstSecEl == "i"|| firstSecEl == "j"|| firstSecEl == "k"|| firstSecEl == "l"|| firstSecEl == "m"){
count = count + 1
} else {
otherCount = otherCount + 1
}
}
if(count >= otherCount){
return true
} else {
return false
}
}


// Insert Dashes 2 (7 kata)
function insertDashII(num) {
let stringed =  num.toString()
let arr = stringed.split("")
let newArr = []

for(let i =0; i< arr.length;i++){
newArr.push(arr[i])
if(arr[i] == 0 || arr[i+1] == 0){
}
else if(i < arr.length -1 &&arr[i] %2 === 1 & arr[i+1] %2 ===1){
newArr.push("-")
} else if(i < arr.length -1 &&arr[i] %2 === 0 & arr[i+1] %2 ===0){
	newArr.push("*")
}
}
let newStr = newArr.join("")
return newStr
}


//Sum of odd numbers (7 kata)
function rowSumOddNumbers(n) {
return n**3
}


//You're a square!
var isSquare = function(n){
let k = Math.floor(Math.sqrt(n))
if(n < 0){
return false
} else if (n == 0){
return true
} else if (n == k*k){
return true
} else {
return false
}
}


//Unfinished Loop - Bug Fixing #1
function createArray(number){
var newArray = [];
for(var counter = 1; counter <= number; counter++){
newArray.push(counter);
}
return newArray;
}


// String Templates - Bug Fixing #5
function buildString(...template){
return `I like ${template.join(', ')}!`;
}


// Beginner - Lost Without a Map
function maps(x){
let newArr = []
for(let i = 0; i<x.length;i++){
newArr.push(x[i]*2)
}
return newArr
}


//Pillars
function pillars(numPill, dist, width) {
if(numPill === 1){
return 0
} else if(numPill === 2){
return dist * 100
} else if (numPill > 2){
return (dist * (numPill - 1)) * 100 + (width * (numPill - 2))
}
}


// Switcheroo
function switcheroo(x){
let arr = x.split("")
let newArr = []
for(let i =0;i<arr.length;i++){
if(arr[i] == "a"){
newArr.push("b")
} else if(arr[i] == "b"){
newArr.push("a")
} else{
newArr.push("c")
}
} let string = newArr.join("")
return string
}


// The old switcheroo 2
function encode(str) {
let str2 = str.toLowerCase()
let arr = str2.split("")
let newArr = []
for (let i = 0; i < arr.length; i++) {
if (arr[i] == "a") {
	newArr.push("1")
} else if (arr[i] == "b") {
	newArr.push("2")
} else if (arr[i] == "c") {
	newArr.push("3")
} else if (arr[i] == "d") {
	newArr.push("4")
} else if (arr[i] == "e") {
	newArr.push("5")
} else if (arr[i] == "f") {
	newArr.push("6")
} else if (arr[i] == "g") {
	newArr.push("7")
} else if (arr[i] == "h") {
	newArr.push("8")
} else if (arr[i] == "i") {
	newArr.push("9")
} else if (arr[i] == "j") {
	newArr.push("10")
} else if (arr[i] == "k") {
	newArr.push("11")
} else if (arr[i] == "l") {
	newArr.push("12")
} else if (arr[i] == "m") {
	newArr.push("13")
} else if (arr[i] == "n") {
	newArr.push("14")
} else if (arr[i] == "o") {
	newArr.push("15")
} else if (arr[i] == "p") {
	newArr.push("16")
} else if (arr[i] == "q") {
	newArr.push("17")
} else if (arr[i] == "r") {
	newArr.push("18")
} else if (arr[i] == "s") {
	newArr.push("19")
} else if (arr[i] == "t") {
	newArr.push("20")
} else if (arr[i] == "u") {
	newArr.push("21")
} else if (arr[i] == "v") {
	newArr.push("22")
} else if (arr[i] == "w") {
	newArr.push("23")
} else if (arr[i] == "x") {
	newArr.push("24")
} else if (arr[i] == "y") {
	newArr.push("25")
} else if (arr[i] == "z") {
	newArr.push("26")
} else {
	newArr.push(arr[i])
}
}
let string2 = newArr.join("")
return string2
}


//Digits Explosion
function explode(s) {
	let newArr = []
	for(let i = 0; i<s.length;i++){
		if(s[i] == 0){
		} else if (s[i] == 1){
		newArr.push(s[i])
		}else if (s[i] == 2){
		newArr.push(s[i], s[i])
		}else if (s[i] == 3){
		newArr.push(s[i], s[i], s[i])
		}else if (s[i] == 4){
		newArr.push(s[i], s[i], s[i], s[i])
		}else if (s[i] == 5){
		newArr.push(s[i], s[i], s[i], s[i], s[i])
		}else if (s[i] == 6){
		newArr.push(s[i], s[i], s[i], s[i], s[i], s[i])
		}else if (s[i] == 7){
		newArr.push(s[i], s[i], s[i], s[i], s[i], s[i], s[i])
		}else if (s[i] == 8){
		newArr.push(s[i], s[i], s[i], s[i], s[i], s[i], s[i], s[i])
		}else if (s[i] == 9){
		newArr.push(s[i], s[i], s[i], s[i], s[i], s[i], s[i], s[i], s[i])
		}
	}
	let newStr = newArr.join("")
	return(newStr)
	}


//Divisible by previous digit?
	function divisibleByLast(n) {

	let number = n.toString()
	let arr = number.split("")
	let newArr =[]
	newArr[0] = false
	for(let i = arr.length - 1; i >= 0; i--){
	if(arr[i] % arr[i-1] == 0){
		newArr.unshift(true)
	} else {
		newArr.unshift(false)
	}
	}
	newArr.pop(newArr.length - 1)
	console.log(newArr)
	return(newArr)
	}


//Jenny's secret message
function greet(name){
return "Hello, " + name + "!";
if(name === "Johnny")
	return "Hello, my love!";
}


//What time is it?
var getMilitaryTime = function(input) {
let array = input.split(":")
if(array[2].includes("AM") && Number(array[0]) == 12){
array[0] = "00"
} else if(array[2].includes("PM") && Number(array[0]) == "01"){
array[0] = "13"
} else if(array[2].includes("PM") && Number(array[0]) == "02"){
array[0] = "14"
} else if(array[2].includes("PM") && Number(array[0]) == "03"){
array[0] = "15"
} else if(array[2].includes("PM") && Number(array[0]) == "04"){
array[0] = "16"
} else if(array[2].includes("PM") && Number(array[0]) == "05"){
array[0] = "17"
} else if(array[2].includes("PM") && Number(array[0]) == "06"){
array[0] = "18"
} else if(array[2].includes("PM") && Number(array[0]) == "07"){
array[0] = "19"
} else if(array[2].includes("PM") && Number(array[0]) == "08"){
array[0] = "20"
} else if(array[2].includes("PM") && Number(array[0]) == "09"){
array[0] = "21"
} else if(array[2].includes("PM") && Number(array[0]) == "10"){
array[0] = "22"
} else if(array[2].includes("PM") && Number(array[0]) == "11"){
array[0] = "23"
}
let lastEl = array[2].split("")
lastEl.pop()
lastEl.pop()
let combo = lastEl[0].concat(lastEl[1])
return array[0] + ":" + array[1] +":"+ combo
};


//Create Phone Number (6 kata)
function createPhoneNumber(numbers){
return "(" + numbers[0] + numbers[1]  + numbers[2] + ")" + " " + numbers[3] + numbers[4] + numbers[5] + "-" + + numbers[6] + numbers[7] + numbers[8] + numbers[9]
}


//Reversing Words in a String
function reverse(string){
	return string.split(' ').reverse().join(' ');
	}

//Reversed Words
function reverseWords(str){
	return str.split(' ').reverse().join(' ');
	}

//Generate user links
function generateLink(user) {
	return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
	}


//Remove String Spaces
function noSpace(x){
	let arr = x.split("")
	console.log(arr)
	let newArr = []
	for(let i = 0; i < arr.length;i++){
		if(arr[i] != " "){
		newArr.push(arr[i])
		}
	} console.log(newArr)
		let str = newArr.join("")
		return str
	}


//Invert values
function invert(array) {
	var newArr = [];
	for(var i = 0; i < array.length; i++){
		newArr.push(-array[i]);
	}
	return newArr;
	}


//Remove the noise from the string
function removeNoise(str){
	// write your code below
	let arr = str.split("")
	let newArr = []
	for(let i = 0; i<arr.length;i++){
	if (arr[i] == "%" || arr[i] == "$" || arr[i] == "&" || arr[i] == "%" || arr[i] == "/" || arr[i] == "#" || arr[i] == "·"
		|| arr[i] == "@"|| arr[i] == "|"|| arr[i] == "º" || arr[i] == "ª" || arr[i] == "\\"){
	} else {
	newArr.push(arr[i])
	}}
	let strAgain = newArr.join("")
	return strAgain
}


//Stop gninnipS My sdroW!
function spinWords(string){
	//TODO Have fun :)
	let arr = string.split(" ")
	let newArr = []
	for(let i = 0; i<arr.length;i++){
	if(arr[i].length < 5){
		newArr.push(arr[i])
	} else {
		let reversed = arr[i].split("").reverse().join("")
		newArr.push(reversed)
	}
	}
	let newStr = newArr.join(" ")
	return newStr
	}

//Row Weights
function rowWeights(array){
	//your code here
	let newArr= []
	let total1 = 0
	let total2 = 0
	for(let i = 0; i<array.length; i=i+2){
		total1 = total1 + array[i]
	}
	for(let j = 1; j<array.length; j=j+2){
		total2 = total2 + array[j]
	}
	newArr.push(total1, total2)
	return newArr
	}


//Do I get a bonus?
function bonusTime(salary, bonus) {
		if(bonus){
		return "£" + salary * 10
		} else {
		return "£" + salary
		}
	}


//Extract Values and Units
function valAndUnits(s) {
	let arr = s.split("")
	let numArr = []
	let letArr = []
	for(let i = 0;i<arr.length;i++){
		if(arr[i] == "-" || arr[i] == "." || arr[i] == 1 || arr[i] == 2 || arr[i] == 3 || arr[i] == 4 || arr[i] == 5 || arr[i] == 6 || arr[i] == 7 || arr[i] == 8 || arr[i] == 9 || arr[i] == 0){
		numArr.push(arr[i])
		} else {
			letArr.push(arr[i])
		}
	}
	let n = numArr.join('')
	let l = letArr.join('')

	let newN = parseFloat(n)

	const obj = {val: newN, units: l}
	return obj
	}

//Multiply array values and filter non-numeric
function multiplyAndFilter(array, multiplier){
// your code
	const newArr = array.filter((el) => typeof el == "number").map((x) => x * multiplier);
	return newArr
	}

//Multiply the strings in the array
function arrMultiply(arr){
	//your solution
	for(let i =0; i< arr.length;i++){
		return (Number(arr[0]) * Number(arr[1])).toString()
	}
	}


//Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
	let newArr = []
	for(let el of numbers){
		if(el % divisor == 0){
		newArr.push(el)
		}
	} return newArr
	}


//If you can read this...
function to_nato(words) {
	// Go code
	let arr = words.toLowerCase().split("")
	let newArr = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == "a"){
		newArr.push("Alfa")
		} else if(arr[i] == "b"){
		newArr.push("Bravo")
		} else if(arr[i] == "c"){
		newArr.push("Charlie")
		}else if(arr[i] == "d"){
		newArr.push("Delta")
		}else if(arr[i] == "e"){
		newArr.push("Echo")
		}else if(arr[i] == "f"){
		newArr.push("Foxtrot")
		}else if(arr[i] == "g"){
		newArr.push("Golf")
		}else if(arr[i] == "h"){
		newArr.push("Hotel")
		}else if(arr[i] == "i"){
		newArr.push("India")
		}else if(arr[i] == "j"){
		newArr.push("Juliett")
		}else if(arr[i] == "k"){
		newArr.push("Kilo")
		}else if(arr[i] == "l"){
		newArr.push("Lima")
		}else if(arr[i] == "m"){
		newArr.push("Mike")
		}else if(arr[i] == "n"){
		newArr.push("November")
		}else if(arr[i] == "o"){
		newArr.push("Oscar")
		}else if(arr[i] == "p"){
		newArr.push("Papa")
		}else if(arr[i] == "q"){
		newArr.push("Quebec")
		}else if(arr[i] == "r"){
		newArr.push("Romeo")
		}else if(arr[i] == "s"){
		newArr.push("Sierra")
		}else if(arr[i] == "t"){
		newArr.push("Tango")
		}else if(arr[i] == "u"){
		newArr.push("Uniform")
		}else if(arr[i] == "v"){
		newArr.push("Victor")
		}else if(arr[i] == "w"){
		newArr.push("Whiskey")
		}else if(arr[i] == "x"){
		newArr.push("Xray")
		}else if(arr[i] == "y"){
		newArr.push("Yankee")
		}else if(arr[i] == "z"){
		newArr.push("Zulu")
		} else if(arr[i] == "!"){
		newArr.push("!")
		} else if(arr[i] == "."){
		newArr.push(".")
		} else if(arr[i] == "?"){
		newArr.push("?")
		}
	}
	let NATO = newArr.join(' ')
	return NATO
}


//Remove anchor from URL
function removeUrlAnchor(url){
	// TODO: complete
	let arr = url.split("")
	let newArr = []
	for(let el of arr){
	if(el != "#"){
		newArr.push(el)
	} else if (el == "#") {
		break
	}
	}  let newStr = newArr.join("")
	return newStr
}


//MakeUpperCase
function makeUpperCase(str) {
	// Code here
	let up = str.toUpperCase()
	return up
	}


//The Lazy Startup Office
function binRota(arr){
	let newArr = []
	for(let i = 0; i<arr.length; i++){
		if(arr.indexOf(arr[i]) % 2 != 0){
		let reversed = arr[i].reverse()
		newArr.push(reversed)
	} else {
	newArr.push(arr[i])
	}
	}
	let flat = newArr.flat()
	return flat
	}


//NATO Phonetic Alphabet
// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc
function nato(word) {
let word1 = word.toLowerCase()
let arr = word1.split("")
let newArr = []

for (let i = 0; i < arr.length; i++){
	if (arr[i] == "a") {
	newArr.push("Alpha");
	} else if (arr[i] == "b") {
	newArr.push("Bravo");
	} else if (arr[i] == "c") {
	newArr.push("Charlie");
	} else if (arr[i] == "d") {
	newArr.push("Delta");
	} else if (arr[i] == "e") {
	newArr.push("Echo");
	} else if (arr[i] == "f") {
	newArr.push("Foxtrot");
	} else if (arr[i] == "g") {
	newArr.push("Golf");
	} else if (arr[i] == "h") {
	newArr.push("Hotel");
	} else if (arr[i] == "i") {
	newArr.push("India");
	} else if (arr[i] == "j") {
	newArr.push("Juliett");
	} else if (arr[i] == "k") {
	newArr.push("Kilo");
	} else if (arr[i] == "l") {
	newArr.push("Lima");
	} else if (arr[i] == "m") {
	newArr.push("Mike");
	} else if (arr[i] == "n") {
	newArr.push("November");
	} else if (arr[i] == "o") {
	newArr.push("Oscar");
	} else if (arr[i] == "p") {
	newArr.push("Papa");
	} else if (arr[i] == "q") {
	newArr.push("Quebec");
	} else if (arr[i] == "r") {
	newArr.push("Romeo");
	} else if (arr[i] == "s") {
	newArr.push("Sierra");
	} else if (arr[i] == "t") {
	newArr.push("Tango");
	} else if (arr[i] == "u") {
	newArr.push("Uniform");
	} else if (arr[i] == "v") {
	newArr.push("Victor");
	} else if (arr[i] == "w") {
	newArr.push("Whiskey");
	} else if (arr[i] == "x") {
	newArr.push("X-ray");
	} else if (arr[i] == "y") {
	newArr.push("Yankee");
	} else if (arr[i] == "z") {
	newArr.push("Zulu");
	}
	} let str = newArr.join(" ")
	return str
}


//FIXME: Replace all dots
var replaceDots = function(str) {
	return (str.replaceAll('.', '-'));
}


//Keep at it until you get it
function hoopCount (n) {
	//your code goes here
	if(n >= 10){
	return "Great, now move on to tricks"
	} else {
	return "Keep at it until you get it"
	}
}


//Simple multiplication
function simpleMultiplication(number) {
	// your code........
	if(number % 2 == 0){
	return number * 8
	} else {
	return number * 9
	}
}


//Is it even?
const testEven = (n) => n % 2 === 0;


//Correct the mistakes of the character recognition software
function correct(string)
{
	let arr = string.split("")
	const newVal0 = "O"
	const newVal5 = "S"
	const newVal1 = "I"
	for(let i = 0; i<arr.length; i++){
		if(arr[i] == "0"){
		arr[i] = newVal0
		}
		if(arr[i] == "5"){
		arr[i] = newVal5
		}
		if(arr[i] == "1"){
		arr[i] = newVal1
		}
	} return arr.join("")
}


//Function 1 - hello world
function greet(){
  return "hello world!"
}


//Shortest word
	function findShort(s){
let arr = s.split(" ")
let newArr = []
for(let i = 0; i<arr.length; i++){
	newArr.push(Math.min(arr[i].length))
}
return Math.min(...newArr)
}


//Changing letters
function swap (string) {
let arr = string.split("")
let newArr = []
for(let i = 0; i <arr.length; i++){
	if(arr[i] == "a" || arr[i] == "e" || arr[i] == "o" || arr[i] == "u" || arr[i] == "i" ){
	newArr.push(arr[i].toUpperCase())
	} else {
	newArr.push(arr[i])
	}
} return newArr.join("")
}


//Grasshopper - If/else syntax debug
function checkAlive (health) {
	if (health <= 0) {
	return false
	} else {
	return true
	}
}


//Exes and Ohs
function XO(str) {
	//code here
let lowr = str.toLowerCase()

let arr = lowr.split("")
let arrO = []
let arrX = []
for(let i = 0; i< arr.length;i++){
	if(arr[i] == "o"){
	arrO.push(arr[i])
	} else if(arr[i] == "x"){
		arrX.push(arr[i])
	}
}
	if(arrO.length == arrX.length){
	return true
	} else {
	return false
	}
}.


//Powers of 3
function largestPower(n){
let i = -1;
do {
	i ++;
} while (Math.pow(3, i) < n);
return i - 1
}


//ReOrdering
function reOrdering(text){
	//your code here
let arr = text.split(" ")
let newArr = []
for(let i= 0; i <arr.length;i++){
	if(arr[i].charAt(0) === arr[i].charAt(0).toUpperCase()){
	newArr.push(arr[i])
	}
}
const arr3 = newArr.concat(arr);
let uniqueChars = [...new Set(arr3)];
return (uniqueChars.join(" "));
}


//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
	//your code here!
if(current == "green"){
	return "yellow"
	}else if (current == "yellow"){
		return "red"
	}else if (current == "red"){
	return "green"
	}
}


//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
	//Good Luck!
	return Math.floor(s * 27.778)
	}


//JavaScript Array Filter
function getEvenNumbers(numbersArray){
	// filter out the odd numbers
	numbersArray = numbersArray.filter(el => (el%2 == 0))
	return numbersArray
	}


//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
let newArr = []
for(let i = 0; i< array.length; i++){  
	let squared = Math.pow(array[i],2)
	let sqrt = array[i] / Math.sqrt(array[i])
	if(Number.isInteger(sqrt)){
	newArr.push(Math.sqrt(array[i]))
	} else {
	newArr.push(squared)
	} 
} return newArr
}


//Ones and Zeros
const binaryArrayToNumber = arr => {
	// your code
	let reg = arr.join("")
	return parseInt(reg, 2)
	};


//Maximum Multiple
function maxMultiple(divisor, bound){
	//your code here
let i = 0
let result = 0 
while (result <= bound) {
	i = i + 1
	result = divisor * i
} 
	return result - divisor
}


//Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
	for(let i = 0; i<list.length;i++){
		if(list[i]["language"] === 'Ruby'){
		return true
		} 
	}  return false
	}


//The highest profit wins!
function minMax(arr){
	let sortedArr = arr.sort((a, b) => a - b);
	let newArr = []
	newArr.push(sortedArr[0])
	newArr.push(sortedArr[sortedArr.length - 1 ])
	return newArr
}


//Length of missing array
function getLengthOfMissingArray(arrayOfArrays) {
if(arrayOfArrays === [] || arrayOfArrays == null || arrayOfArrays.length == 0){
	return 0
} else {
	for(let u = 0; u<arrayOfArrays.length; u++){
	if(arrayOfArrays[u] === [] || arrayOfArrays[u] == null || arrayOfArrays[u].length == 0){
		return 0
	}
	}
}
let newArr = []
for (let i = 0; i< arrayOfArrays.length;i++){
	newArr.push(arrayOfArrays[i].length)
}
let newArr2 = newArr.sort((a, b) => a - b);
let newArr3 = []
for(let j = 0; j<newArr2.length;j++){
	if(newArr2[j] + 2 == newArr2[j+1]){
	newArr3.push(newArr2[j])
	newArr3.push(newArr2[j + 1])   
	} 
}  
for(let k = 0; k<newArr3.length; k++){
return (newArr3[0] + newArr3[1])  / 2
}
}


//No Loops 1 - Small enough?
function smallEnough(a, limit){
let result = a.filter((x) => x <= limit);
if (result.length == a.length){
return true
} else {
return false
}
}


//Fix the Bugs (Syntax) - My First Kata
function myFirstKata(a,b) {
if (typeof(a) != "number" || typeof(b) != "number") {
return false;
} else {
	return a % b + b % a
}
}


//Maximum Gap (Array Series #4)
function maxGap (numbers){
	//your code here
	const sorted = [...numbers].sort((a, b) => a - b);
	let diff = 0
	for(let i = 0; i < sorted.length;i++){
		if(sorted[i+1] - sorted[i] > diff){
		diff = sorted[i+1] - sorted[i]
		} 
	}
		return diff
	}


//BASIC: Making Six Toast.
function sixToast(num) {
// you code here
let howManyMore = 0
if(num < 6){
	howManyMore = 6 - num
	return howManyMore 
} else if (num == 6){
	return howManyMore
} else {
	howManyMore = num - 6 
	return howManyMore
}
}


//No Loops 2 - You only need one
function check(a,x){
return (a.includes(x));
};


//The Office VI - Sabbatical
function sabb(s, val, happiness){
let newArr = []
let arr = s.split("")
let sum = 0
	for(let i = 0; i<arr.length;i++){
	if (arr[i] == "s" || arr[i] == "a" || arr[i] == "b"|| arr[i] == "t" || arr[i] == "i" || arr[i] == "c" || arr[i] == "l" ){
		sum = sum + 1
	} 
} 
if(sum + val + happiness > 22){
	return "Sabbatical! Boom!"
} else {
	return "Back to your desk, boy."
}
} 


//Basic Mathematical Operations
function basicOp(operation, value1, value2){
 if(operation == "+"){
  return value1 + value2
} else if(operation == "-") {
  return value1 - value2
} else if(operation == "*"){
  return value1 * value2  
} else {
  return value1/value2
}
}


//Enumerable Magic - Does My List Include This?
function include(arr, item){ 
	return arr.includes(item)
  }


//Number of People in the Bus
var number = function(busStops){
  // Good Luck!
  let total = 0
  for(let i = 0; i<busStops.length;i++){
      total = total + busStops[i][0] - busStops[i][1]
    }return (total)
}


//Thinkful - List and Loop Drills: Lists of lists
function processData(data){
	let newArr = []
	for (let i = 0; i<data.length;i++){
	  newArr.push(data[i][0] - data[i][1])
	}
  const initialValue = 1;
  return newArr.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);
  }


  //Enumerable Magic #25 - Take the First N Elements
  function take(arr, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if (arr.length == 0) {
      return [];
    } else if (arr.length < n) {
      newArr.push(arr[i]);
    } else if (arr.length > n) {
      newArr.push(arr[i]);
    }
  }
  // Filter out undefined elements and update newArr
  newArr = newArr.filter((el) => el !== undefined);
  return newArr;
}


//Sum of positive
function positiveSum(arr) {
	let newArr = []
	for(let i = 0;i<arr.length;i++){
	  if(arr[i] * 1 > 0){
		newArr.push(arr[i])
	  }
	} 
  const initialValue = 0;
  return newArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  }


//Sum of array singles
  function repeats(arr){
	const result = arr.filter((el) => arr.indexOf(el) == arr.lastIndexOf(el));
	return(result[0] + result[1])
	};


//Sum Mixed Array
function sumMix(x){
	let newArr = []
	for(let i = 0; i<x.length;i++){
	  newArr.push(Number(x[i]))
	} 
	let start = 0
	return newArr.reduce((accum, currVal) => accum + currVal, start)
	}


//Is he gonna survive?
function hero(bullets, dragons){
	//Get Coding!
	  if(bullets >= dragons * 2){
		return true
	  } else {
		return false
	  }
	}


//Fake Binary
function fakeBin(x){
	let arr = x.split("")
	let newArr = []
	for(let i = 0; i<arr.length;i++){
	  if(arr[i] < 5){
		newArr.push("0")
	  } else {
		newArr.push("1")
	  }
	} return newArr.join("")
  }


//Count Odd Numbers below n
function oddCount(n){
	// your code here
  if(n % 2 == 0){
	  return n / 2 
	} else {
	  return n / 2 - 0.5
	}
  }


  //Returning Strings
function greet(name){
//your code here
return (`Hello, ${name} how are you doing today?`)
}


//Beginner Series #3 Sum of Numbers
function getSum(a, b){
   //Good luck!
  let sum = 0
  if(a == b){
    return a
  } else if (a > b){
    for (let i = b; i<a+1;i++){
      sum += i
    }} else {
      for (let i = a; i<b+1;i++){
      sum += i
    }}
   return sum
}


//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if(n<0 || m<0){
    return 0
  } else {
    return n * m
  }
}


//Leap Years
function isLeapYear(year) {
	// TODO
	if(year % 400 == 0 || year % 4 == 0 && year %100 !== 0){
	  return true
	} else if (year % 100 == 0){
	  return false
	} else {
	  return false
	}
  }


//Two numbers are positive
function twoArePositive(a, b, c) {
// Happy Coding
let arr = [a,b,c]
const sorted = arr.sort((a, b) => a - b);
console.log(sorted)
if(sorted[0] > 0 && sorted[1] > 0 && sorted[2] > 0) {
	return false
} else if(sorted[0] > 0 && sorted[1] > 0){
	return true
} else if (sorted[1] > 0 && sorted[2] > 0){
	return true
}else if (sorted[0] > 0 && sorted[2] > 0){
	return true
} else {
	return false
}
}


//Cat Years, Dog Years (2)
var ownedCatAndDog = function(catYears, dogYears) {
	// Your code here!
	let catHumanYrs
	let dogHumanYrs
	let resultArr = []
	if(catYears == 0){
	  catHumanYrs = 0
	  resultArr.push(catHumanYrs)
	} else if(catYears < 15){
	  catHumanYrs = 0
	  resultArr.push(Math.floor(catHumanYrs))
	}else if(catYears >= 15 && catYears < 24){
	  catHumanYrs = 1
	  resultArr.push(Math.floor(catHumanYrs))
	} else if (catYears < 24) {
	  catHumanYrs = 2
	  resultArr.push(Math.floor(catHumanYrs))
	} else if (catYears < 28) {
	  catHumanYrs = 2
	  resultArr.push(Math.floor(catHumanYrs))
	} else {
	  catHumanYrs = (catYears - 24) / 4 + 2
	  resultArr.push(Math.floor(catHumanYrs))
	}
	
	if(dogYears == 0){
	  dogHumanYrs = 0
	  resultArr.push(dogHumanYrs)
	} else if(dogYears < 15){
	  dogHumanYrs = 0
	  resultArr.push(Math.floor(dogHumanYrs))
	}else if(dogYears >= 15 && dogYears < 24){
	  dogHumanYrs = 1
	  resultArr.push(Math.floor(dogHumanYrs))
	} else if (dogYears < 24) {
	  dogHumanYrs = 2
	  resultArr.push(Math.floor(dogHumanYrs))
	} else if (dogYears < 29) {
	  dogHumanYrs = 2
	  resultArr.push(Math.floor(dogHumanYrs))
	} else {
	  dogHumanYrs = (dogYears - 24) / 5 + 2
	  resultArr.push(Math.floor(dogHumanYrs))
	}
	return resultArr
}


//Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
	// Your code here!
	let yearsArr = []
	let dogYears
	let catYears
	if(humanYears == 1){
	  dogYears = 15
	  catYears = 15
	  yearsArr.push(humanYears, catYears, dogYears)
	  return yearsArr
	} else if (humanYears == 2){
	  dogYears = 24 
	  catYears = 24
	  yearsArr.push(humanYears, catYears, dogYears)
	  return yearsArr
	} else {
	  dogYears = 24 + (humanYears - 2) * 5
	  catYears = 24 + (humanYears - 2) * 4
	  yearsArr.push(humanYears, catYears, dogYears)
	  return yearsArr
	}
  }


//Quadrants
function quadrant(x, y) {
	if(x > 0 && y > 0 ){
	  return 1
	} else if (x < 0 && y > 0){
	  return 2
	} else if (x < 0 && y < 0){
	  return 3
	} else {
	  return 4
	}
  }


  //Pirates!! Are the Cannons ready!??
  const cannonsReady = (gunners) => {
	//your solution here
	let arr = (Object.values(gunners))
	for(let i = 0; i<arr.length;i++){
	  if(arr[i] != 'aye'){
		return "Shiver me timbers!"
	  } 
	} return "Fire!"
  }


  //KISS - Keep It Simple Stupid
  function isKiss( words ){
	// Have Fun!
	let arr = words.split(" ")
	let countT = 0
	let countW = 0
	for(let i = 0; i<arr.length;i++){
	  countT++ 
	}   
	for(let j of arr){
	  if(j.length > countW){ 
		countW = j.length
	} 
	 }   
	if(countW <= countT){
	  return "Good work Joe!"
	} else {
		return "Keep It Simple Stupid"
	}
  }

	
//Sum Arrays
function sum (numbers) {
    "use strict";
  if(numbers.length == 0){
    return 0
  } else {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
};

	
//Find the Missing Number
function missingNo(nums) {
  const sorted = nums.sort((a, b) => a - b);
  for(let i = 0; i<sorted.length;i++){
    if(sorted[i] + 1 != sorted[i+1]){
       return sorted[i] + 1
       }
  }
}

	
//Thinkful - Logic Drills: Umbrella decider
function takeUmbrella(weather, chance) {
  //code here 
  if(weather == "rainy" || weather == "cloudy" && chance > 0.2 || weather == "sunny" && chance > 0.5){
    return true
  } else {
    return false
  }

	
//Convert the score
	function scoreboard(string) {
  // code here!
  let arr = string.split(" ")
  let score = []
  for(let i = 0; i<arr.length;i++){
    if(arr[i] == "nil"){
      score.push(0)
    } else if(arr[i] == "one"){score.push(1)}
    else if(arr[i] == "two"){score.push(2)}
    else if(arr[i] == "three"){score.push(3)}
    else if(arr[i] == "four"){score.push(4)}
    else if(arr[i] == "five"){score.push(5)}
    else if(arr[i] == "six"){score.push(6)}
    else if(arr[i] == "seven"){score.push(7)}
    else if(arr[i] == "eight"){score.push(8)}
    else if(arr[i] == "nine"){score.push(9)}
  }
  return (score)
}

	
//Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replaceAll("!", "")
}

	
//DNA to RNA Conversion
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replaceAll("T", "U")
}


//Friend or Foe?
function friend(friends){
  //your code here
  let myFriends = []
  for(let i = 0; i<friends.length;i++){
    if(friends[i].length === 4){
      myFriends.push(friends[i])
    }
  } return myFriends
}

	
//Greet Me
var greet = function(name) {
  let lowName = name.toLowerCase()
  let firstLetter = lowName.slice(0, 1)
  let upFirstLetter = firstLetter.toUpperCase()
  let theRest = lowName.slice(1)

  return "Hello " + upFirstLetter + theRest + "!"
};

	
//Super Duper Easy
function problem(x){
  //your code here
   if(typeof(x) == "string"){
     return "Error"
   } else {
     return x * 50 + 6
   }
}

	
//Who ate the cookie?
function cookie(x){
  // ...
  let stringName = "Zach"
  let numName = "Monica"
  let otherName = "the dog"
  if(typeof(x) == "string"){
    return `Who ate the last cookie? It was ${stringName}!`
  } else if(typeof(x) == "number"){
    return `Who ate the last cookie? It was ${numName}!`
  } else {
    return `Who ate the last cookie? It was ${otherName}!`
  }
}


//Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


//One down
function oneDown(str) {
  if(typeof(str) != "string"){
    return "Input is not a string"
  } else {
    let newArr = []
    let arr = str.split("")
     for(let i = 0; i<arr.length; i++){
      if(arr[i] == " "){
        newArr.push(" ")
      } else if (arr[i] == "a") {
        newArr.push("Z")
      } else if(arr[i] == "b"){
        newArr.push("a")
      }else if(arr[i] == "c"){
        newArr.push("b")
      }else if(arr[i] == "d"){
        newArr.push("c")
      }else if(arr[i] == "e"){
        newArr.push("d")
      }else if(arr[i] == "f"){
        newArr.push("e")
      }else if(arr[i] == "g"){
        newArr.push("f")
      }else if(arr[i] == "h"){
        newArr.push("g")
      }else if(arr[i] == "i"){
        newArr.push("h")
      }else if(arr[i] == "j"){
        newArr.push("i")
      }else if(arr[i] == "k"){
        newArr.push("j")
      }else if(arr[i] == "l"){
        newArr.push("k")
      }else if(arr[i] == "m"){
        newArr.push("l")
      }else if(arr[i] == "n"){
        newArr.push("m")
      }else if(arr[i] == "o"){
        newArr.push("n")
      }else if(arr[i] == "p"){
        newArr.push("o")
      }else if(arr[i] == "q"){
        newArr.push("p")
      }else if(arr[i] == "r"){
        newArr.push("q")
      }else if(arr[i] == "s"){
        newArr.push("r")
      }else if(arr[i] == "t"){
        newArr.push("s")
      }else if(arr[i] == "u"){
        newArr.push("t")
      }else if(arr[i] == "v"){
        newArr.push("u")
      }else if(arr[i] == "w"){
        newArr.push("v")
      }else if(arr[i] == "x"){
        newArr.push("w")
      }else if(arr[i] == "y"){
        newArr.push("x")
      }else if(arr[i] == "z"){
        newArr.push("y")
      }else if(arr[i] == "A"){
        newArr.push("z")
      }else if(arr[i] == "B"){
        newArr.push("A")
      }else if(arr[i] == "C"){
        newArr.push("B")
      }else if(arr[i] == "D"){
        newArr.push("C")
      }else if(arr[i] == "E"){
        newArr.push("D")
      }else if(arr[i] == "F"){
        newArr.push("E")
      }else if(arr[i] == "G"){
        newArr.push("F")
      }else if(arr[i] == "H"){
        newArr.push("G")
      }else if(arr[i] == "I"){
        newArr.push("H")
      }else if(arr[i] == "J"){
        newArr.push("I")
      }else if(arr[i] == "K"){
        newArr.push("J")
      }else if(arr[i] == "L"){
        newArr.push("K")
      }else if(arr[i] == "M"){
        newArr.push("L")
      }else if(arr[i] == "N"){
        newArr.push("M")
      }else if(arr[i] == "O"){
        newArr.push("N")
      }else if(arr[i] == "P"){
        newArr.push("O")
      }else if(arr[i] == "Q"){
        newArr.push("P")
      }else if(arr[i] == "R"){
        newArr.push("Q")
      }else if(arr[i] == "S"){
        newArr.push("R")
      }else if(arr[i] == "T"){
        newArr.push("S")
      }else if(arr[i] == "U"){
        newArr.push("T")
      }else if(arr[i] == "V"){
        newArr.push("U")
      }else if(arr[i] == "W"){
        newArr.push("V")
      }else if(arr[i] == "X"){
        newArr.push("W")
      }else if(arr[i] == "Y"){
        newArr.push("X")
      }else if(arr[i] == "Z"){
        newArr.push("Y")
      } else if(arr[i] == "."){
        newArr.push(".")
      } else if(arr[i] == ":"){
        newArr.push(":")
      } else if(arr[i] == ","){
        newArr.push(",")
      }else if(arr[i] == ";"){
        newArr.push(";")
      } else if(arr[i] == "'"){
        newArr.push("'")
      }
    } return newArr.join("")
  }
}


//Slice the middle of a list backwards
function reverseMiddle(array) {
  if (array.length % 2 === 0) {
    while (array.length > 4) {
      array.pop();
      array.shift();
    }
  } else {
    while (array.length > 5) {
      array.pop();
      array.shift();
    }
  }
  let middle = array.slice(1, array.length - 1);
  return middle.reverse(); 
}

	
//Move all vowels
function moveVowel(input) {
  let arr = input.split("");
  let newArr = [];
  for(let el of arr){
    if(el == "b" ||
       el == "c" ||
       el == "d" ||
       el == "f" ||
       el == "g" ||
       el == "h" ||
       el == "j" ||
       el == "k" ||
       el == "l" ||
       el == "m" ||
       el == "n" ||
       el == "p" ||
       el == "q" ||
       el == "r" ||
       el == "s" ||
       el == "t" ||
       el == "v" ||
       el == "w" ||
       el == "x" ||
       el == "y" ||
       el == "z" 
  ){newArr.push(el)} 
  }
  for(let el of arr){
    if(el == "a" ||
       el == "e" ||
       el == "i" ||
       el == "o" ||
       el == "u"
      ){newArr.push(el)}
  } 
return(newArr.join(""))
}

	
//Grasshopper - Array Mean
var findAverage = function (nums) {
  // Code here
  let total = 0
  for(let i = 0; i<nums.length; i++){
    total = total + nums[i]
  } return total/nums.length
}


//Categorize New Member
function openOrSenior(data){
  // ...
  let resultArr = []
  for(let i = 0 ;i<data.length;i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      resultArr.push("Senior")
    } else {
      resultArr.push("Open")
    }  
  } return resultArr 
}

	
//Job Matching #1
function match(candidate, job) {
  // is this job a valid match for the candidate?
 let discountedSalary = candidate.minSalary - (candidate.minSalary * .1)
  if(!candidate.minSalary || !job.maxSalary){
    throw new Error('Something is missing!');
  } else if(job.maxSalary >= discountedSalary){
   return true
  } else {
    return false
  } 
}


//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
	// your awesome code here :)
	let developersFromEurope = list.filter((devFromEurope) => (devFromEurope.continent === "Europe"))
	let jsFromEurope = developersFromEurope.filter((devWithJS) => (devWithJS.language === "JavaScript"))                          
	return jsFromEurope.length
	}

	
//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
	// thank you for checking out my kata :)
	let list2 = list.map((el) => el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`)
	return (list)
	}

	
//Reversed sequence
const reverseSeq = n => {
  let newArr = []
  for(let i = n; i > 0;i--){
    newArr.push(i)
  }
  return newArr
};

	
//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr){
  //coding here...
  if(!Array.isArray(arr)){
    return ("It's a fake array")
  } else if (arr.includes(5) && arr.includes(13)){
    return ("It's a black array") 
  } else {
    return ("It's a white array") 
  } 
}

	
//Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
  //coding here...
  let str = n.toString()
  let arr = str.split(".")
  
  if(arr[0].length < arr[1].length){
    return Math.ceil(n)
  } else if (arr[0].length > arr[1].length){
    return Math.floor(n)
  } else {
    return Math.round(n)
  }
}

	
//Predict your age!
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  // your code
  let newArr = []
  newArr.push(age1,age2,age3,age4,age5,age6,age7,age8)
  let double = newArr.map((el) => el * el)
  let initialValue = 0;
  let sumWithInitial = double.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue)
  return sqrt =  Math.floor(Math.sqrt(sumWithInitial) / 2) 
}


//Phone Number Creator
//create a phone number
function createPhoneNumber(phoneNumber){
    let areaCode1 = phoneNumber[0]
    let areaCode2 = phoneNumber[1]
    let areaCode3 = phoneNumber[2]

    let phoneDigit1 = phoneNumber[3]
    let phoneDigit2 = phoneNumber[4]
    let phoneDigit3 = phoneNumber[5]
    let phoneDigit4 = phoneNumber[6]
    let phoneDigit5 = phoneNumber[7]
    let phoneDigit6 = phoneNumber[8]
    let phoneDigit7 = phoneNumber[9]

    console.log(`(${areaCode1}${areaCode2}${areaCode3}) ${phoneDigit1}${phoneDigit2}${phoneDigit3}-${phoneDigit4}${phoneDigit5}${phoneDigit6}${phoneDigit7}`)
}
	
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

	
//Guess The Gifts!
function guessGifts(wishlist, presents) {
	  // TODO
	let cart = [];
	for(let i = 0; i < wishlist.length; i++){
	    for(let j = 0; j < presents.length; j++){
	        if(wishlist[i].size == presents[j].size && wishlist[i].weight == presents[j].weight && wishlist[i].clatters == presents[j].clatters) {
	            cart.push(wishlist[i].name)
	        }
	    }
	} let uniqueItems = [...new Set(cart)];
	  return uniqueItems
}


//Find the next perfect square!
function nextPerfectSquare(num) {
   let squareRooted = Math.sqrt(num)

   if(squareRooted == Math.round(squareRooted)){
       nextSquareRoot = squareRooted + 1 
       return nextSquareRoot * nextSquareRoot
   } else {
    return -1
   }
}

console.log(nextPerfectSquare(64))


// Sort by Product
function productSort(numbers) {
const products = numbers.map((value, index) => {
    return {
        original: value,
        product: value * (index + 1)
    };
});

    products.sort((a, b) => a.product - b.product);
    
    // const result = numbers.sort((a, b) => a - b);
    return products.map(value => value.original)
}

console.log(productSort([23,2,3,4,5]))

	
//Dollars and Cents
function formatMoney(amount){
  // your formatting code here
  return '$' + amount.toFixed(2);
}


//Replace With Alphabet Position
function alphabetPosition(text) {
  let arr = text.split("")
  let newArr = []
  for(let i = 0; i<arr.length;i++){
    if(arr[i] == "a" || arr[i] == "A"){
      newArr.push(1)
    } else if(arr[i] == "b" || arr[i] == "B"){
      newArr.push(2)
    } else if(arr[i] == "c" || arr[i] == "C"){
      newArr.push(3)
    }else if(arr[i] == "d" || arr[i] == "D"){
      newArr.push(4)
    }else if(arr[i] == "e" || arr[i] == "E"){
      newArr.push(5)
    }else if(arr[i] == "f" || arr[i] == "F"){
      newArr.push(6)
    }else if(arr[i] == "g" || arr[i] == "G"){
      newArr.push(7)
    }else if(arr[i] == "h" || arr[i] == "H"){
      newArr.push(8)
    }else if(arr[i] == "i" || arr[i] == "I"){
      newArr.push(9)
    }else if(arr[i] == "j" || arr[i] == "J"){
      newArr.push(10)
    }else if(arr[i] == "k" || arr[i] == "K"){
      newArr.push(11)
    }else if(arr[i] == "l" || arr[i] == "L"){
      newArr.push(12)
    }else if(arr[i] == "m" || arr[i] == "M"){
      newArr.push(13)
    }else if(arr[i] == "n" || arr[i] == "N"){
      newArr.push(14)
    }else if(arr[i] == "o" || arr[i] == "O"){
      newArr.push(15)
    }else if(arr[i] == "p" || arr[i] == "P"){
      newArr.push(16)
    }else if(arr[i] == "q" || arr[i] == "Q"){
      newArr.push(17)
    }else if(arr[i] == "r" || arr[i] == "R"){
      newArr.push(18)
    }else if(arr[i] == "s" || arr[i] == "S"){
      newArr.push(19)
    }else if(arr[i] == "t" || arr[i] == "T"){
      newArr.push(20)
    }else if(arr[i] == "u" || arr[i] == "U"){
      newArr.push(21)
    }else if(arr[i] == "v" || arr[i] == "V"){
      newArr.push(22)
    }else if(arr[i] == "w" || arr[i] == "W"){
      newArr.push(23)
    }else if(arr[i] == "x" || arr[i] == "X"){
      newArr.push(24)
    }else if(arr[i] == "y" || arr[i] == "Y"){
      newArr.push(25)
    }else if(arr[i] == "z" || arr[i] == "Z"){
      newArr.push(26)
    } 
  }
  return newArr.join(" ")
}


//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if(distanceToPump / mpg > fuelLeft) {
    return false
  } else {
    return true
  }
};

	
//Closest elevator
function elevator(left, right, call){
  // code on! :)
  if(call == right && call == left){
    return "right"
  } else if (left - call == 0) {
    return "left"
  } else if (right - call == 0) {
    return "right"
  } else if (call == 0 && right == left || call == 1 && right == left || call == 2 && right == left){
    return "right"
  } else if (call == 0 && right > left){
    return "left"
  } else if (call == 0 && right < left){
    return "right"
  } else if (call == 1 && right < left) {
    return "right"
  } else if (call == 1 && right > left) {
    return "right"
  } else if (call == 1 && right < left) {
    return "left"
  } else if (call == 2 && right > left) {
    return "right"
  } else if (call == 2 && right < left) {
    return "left"
 } else if (call == 2 && right < left) {
    return "left"
 }
}


//Reverse words
function reverseWords(str) {
  // Go for it
let backway = str.split("").reverse().join("");
let arr = backway.split(" ")
let newArr = []
for(let i = 0; i< arr.length;i++){
  newArr.unshift(arr[i])
} 
return(newArr.join(" "))
}


//
Filter the number
var filterString = function(value) {
  let arr = value.split("")
  let newArr = []
  for(let i = 0; i<arr.length;i++){
    if(arr[i] % 2 === 1 || arr[i] % 2 === 0){
      newArr.push(arr[i])
    } 
  }return Number(newArr.join(""))
    }  


//Detect Pangram
function isPangram(string){
    let str = string.toLowerCase()
    let arr = str.split("")
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split("")

    let newArr = []
    
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'd' ||
        arr[i] === 'e' || arr[i] === 'f' || arr[i] === 'g' || arr[i] === 'h' ||
        arr[i] === 'i' || arr[i] === 'j' || arr[i] === 'k' || arr[i] === 'l' ||
        arr[i] === 'm' || arr[i] === 'n' || arr[i] === 'o' || arr[i] === 'p' ||
        arr[i] === 'q' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't' ||
        arr[i] === 'u' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'x' ||
        arr[i] === 'y' || arr[i] === 'z'){
            newArr.push(arr[i])
        }
    }

    let newSet = new Set(newArr)
    let newArr2 = Array.from(newSet)
    if(newArr2.length === alphabetArr.length){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}


//Who likes it?
function likes(names) {

if(names.length == 0){
  return "no one likes this"
} else if (names.length == 1){
  return `${names[0]} likes this`
} else if (names.length == 2){
  return `${names[0]} and ${names[1]} like this`
} else if (names.length == 3){
  return `${names[0]}, ${names[1]} and ${names[2]} like this`
} else {
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}
}

	
//Find the missing letter
function findMissingLetter(arr){
  
    
for(let i = 0; i<arr.length;i++){
  if(arr[i] === "a" && arr[i + 1] === "c") {
    return "b"
  } else if (arr[i] === "b" && arr[i + 1] === "d") {
    return "c"
  } else if (arr[i] === "c" && arr[i + 1] === "e") {
    return "d"
  }else if (arr[i] === "d" && arr[i + 1] === "f") {
  return "e";
} else if (arr[i] === "e" && arr[i + 1] === "g") {
  return "f";
} else if (arr[i] === "f" && arr[i + 1] === "h") {
  return "g";
} else if (arr[i] === "g" && arr[i + 1] === "i") {
  return "h";
} else if (arr[i] === "h" && arr[i + 1] === "j") {
  return "i";
} else if (arr[i] === "i" && arr[i + 1] === "k") {
  return "j";
} else if (arr[i] === "j" && arr[i + 1] === "l") {
  return "k";
} else if (arr[i] === "k" && arr[i + 1] === "m") {
  return "l";
} else if (arr[i] === "l" && arr[i + 1] === "n") {
  return "m";
} else if (arr[i] === "m" && arr[i + 1] === "o") {
  return "n";
} else if (arr[i] === "n" && arr[i + 1] === "p") {
  return "o";
} else if (arr[i] === "o" && arr[i + 1] === "q") {
  return "p";
} else if (arr[i] === "p" && arr[i + 1] === "r") {
  return "q";
} else if (arr[i] === "q" && arr[i + 1] === "s") {
  return "r";
} else if (arr[i] === "r" && arr[i + 1] === "t") {
  return "s";
} else if (arr[i] === "s" && arr[i + 1] === "u") {
  return "t";
} else if (arr[i] === "t" && arr[i + 1] === "v") {
  return "u";
} else if (arr[i] === "u" && arr[i + 1] === "w") {
  return "v";
} else if (arr[i] === "v" && arr[i + 1] === "x") {
  return "w";
} else if (arr[i] === "w" && arr[i + 1] === "y") {
  return "x";
} else if (arr[i] === "x" && arr[i + 1] === "z") {
  return "y";
} else if (arr[i] === "y" && arr[i + 1] !== "z") {
  return "z";
}
  
for (let j = 0; j < arr.length; j++) {
if (arr[j] === "A" && arr[j + 1] === "C") {
return "B";
} else if (arr[j] === "B" && arr[j + 1] === "D") {
return "C";
} else if (arr[j] === "C" && arr[j + 1] === "E") {
return "D";
} else if (arr[j] === "D" && arr[j + 1] === "F") {
return "E";
} else if (arr[j] === "E" && arr[j + 1] === "G") {
return "F";
} else if (arr[j] === "F" && arr[j + 1] === "H") {
return "G";
} else if (arr[j] === "G" && arr[j + 1] === "I") {
return "H";
} else if (arr[j] === "H" && arr[j + 1] === "J") {
return "I";
} else if (arr[j] === "I" && arr[j + 1] === "K") {
return "J";
} else if (arr[j] === "J" && arr[j + 1] === "L") {
return "K";
} else if (arr[j] === "K" && arr[j + 1] === "M") {
return "L";
} else if (arr[j] === "L" && arr[j + 1] === "N") {
return "M";
} else if (arr[j] === "M" && arr[j + 1] === "O") {
return "N";
} else if (arr[j] === "N" && arr[j + 1] === "P") {
return "O";
} else if (arr[j] === "O" && arr[j + 1] === "Q") {
return "P";
} else if (arr[j] === "P" && arr[j + 1] === "R") {
return "Q";
} else if (arr[j] === "Q" && arr[j + 1] === "S") {
return "R";
} else if (arr[j] === "R" && arr[j + 1] === "T") {
return "S";
} else if (arr[j] === "S" && arr[j + 1] === "U") {
return "T";
} else if (arr[j] === "T" && arr[j + 1] === "V") {
return "U";
} else if (arr[j] === "U" && arr[j + 1] === "W") {
return "V";
} else if (arr[j] === "V" && arr[j + 1] === "X") {
return "W";
} else if (arr[j] === "W" && arr[j + 1] === "Y") {
return "X";
} else if (arr[j] === "X" && arr[j + 1] === "Y") {
return "Z";
} else if (arr[j] === "Y" && arr[j + 1] !== "Z") {
return "Z";
}
} 
}  
}


//Odd-Even String Sort
function sortMyString(S) {
    // your code here
    let oddArr = []
    let evenArr = []
    let arr = S.split("")
    for(let i = 0; i< arr.length;i++){
      if(i % 2 === 0){
        evenArr.push(arr[i])
      } else {
        oddArr.push(arr[i])
      }
    }
  return evenArr.join("") + " " + oddArr.join("")
}
