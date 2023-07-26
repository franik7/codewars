	function repeatStr(n, s) {
	return s.repeat(n);



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