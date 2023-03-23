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
