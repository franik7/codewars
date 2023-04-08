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
