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