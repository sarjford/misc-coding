//*******     METHOD DECONSTRUCTION    ******************************

var str = "sarahford";
var arr = [1,2,3,4,5,6];
var nested = [ [1,2], [2,4], [4,5] ];
var sum = function(x){ return x+1 };
var bigEnough = function(x){ return x>3 };
var flatten = function(x,y){ return x.concat(y) };
var add = function(x,y){ return x+y };
var biggest = function(x,y){ if (x>y){ return x;} else {return y;} };
var negative = function(x){ return x < 0 };
var positive = function(x){ return x > 0 };
var myObj = {
	name: "sarah",
	last: "ford",
	age: 30
};

//be able to construct in anonymous function declaration as well
	//normal = function "function name"() { }
	//anonymous = var x = function(){ }
//be able to use the methods on objects
//remember to use the word 'function' in the inside function!!
//practice interview: https://codeshare.io/9ftJO
//debugging


function forEach (collection, iterator){
	for (var i = 0; i<collection.length; i++){
		iterator(collection[i]);
		}
	}

function forEach (collection, iterator){
	for (var item in collection){
		iterator(collection[item]);
	}
}//works on both arrays and objects, but won't have index

function map (collection, iterator){
	var newArray = [];
	forEach (collection, function(item){
		newArray.push(iterator(item));	
		});
	return newArray;
}
// map(arr, sum);

function filter(collection, callback){
	var newArray = [];
	forEach (collection, function(item){
		if (callback(item)) {
			newArray.push(item);
		}	
	});
	return newArray;
}
// filter(arr, bigEnough);

function reject(collection, callback){
	var newArray = [];
	forEach (collection, function(item){
		if (!callback(item)) {
			newArray.push(item);
		}
	});
	return newArray;
}
// reject(arr, bigEnough);

function reduce(collection, callback, initial){
	var start = 0;
	if (arguments.length == 2){
		start = collection[0];
	} else {
		start = initial;
	}
	for (var i = 1; i<collection.length; i++){
		start = callback(start, collection[i]);
	}
	return start;
}
// reduce(arr, add, 0);
// reduce(arr, biggest, 0);
// reduce(nested, flatten, []);
//note: don't use forEach, can be used to find greatest, flatten and sum
//note: total = callback(total, collection[i);

function every(collection, callback){
	for (var i = 0; i<collection.length; i++){
		if (callback(collection[i])) {
			return true;
		}
	}
	return false;
}
// every(arr, positive);
// every(arr, negative);
//note: don't use forEach because it can break before the loop is finished
//note: every = !, true, false 

function some(collection, callback){
	for (var i = 0; i<collection.length; i++){
		if (callback(collection[i])){
			return true;
		}
	}
	return false;
}
// some(arr, positive);
//some = no !, false, true

function concatAll(collection){
	var newArray = [];
	collection.forEach(function(subArray){
		subArray.forEach(function(item){
			newArray.push(item);
		});
	});
	return newArray;
}
// concatAll(nested);
//note: concatAll only needs one argument
//note: nested forEach, 2nd takes subArray, push into new Array

//*******   OBJECT BEHAVIOR   ************************************

//print the whole obj:
console.log(myObj);

//print "sarah":
console.log(myObj.name);

//print all keys:
for (var prop in myObj){
	console.log(prop);
}

//print all values:
for (var prop in myObj){
	console.log(myObj[prop]+"*****");
}//remember to use bracket notation!

//add a property called 'hair'
myObj.hair = "black";
console.log(myObj);

//delete the property
delete myObj.hair;
console.log(myObj);

//print all properties:
for (var prop in myObj){
	console.log(prop +" : "+myObj[prop]);
}

//if you ask it to print a property that isn't there you'll get an undefined
//for-in can iterate through arrays
// be confident in your answers, be friendly

//********    CODERBYTE-TYPE STUFF    **************************************

//Given an aray, tally the frequency of each number in an object

var arr = [1,1,3,4,1,1];

function tally (array) {
	var newObj = {};
	var newArray = array.sort();
	var count = 1;
	
	for (var i = 0; i < newArray.length; i++){
		if (newArray[i] === newArray[i+1]){
			count += 1;
		} else {
			newObj[newArray[i]] = count;
			count = 1;
		}
	}
	return newObj;
}
tally(arr);

//********     PROTOTYPE METHODS      *********************************

//Array and String
indexOf()
lastIndexOf()
slice()
includes() //takes in a search element, returns true or false
concat()

//Array
sort() //does NOT work on strings
join()
pop()
push()
reverse()
toString()

//String
split()
slice(x,y) //returns a slice from x to y
splice(position x, remove x, add items) //returns a new string 
match(regexp) //returns all the matches that match a pattern - ain ain ain
charAt()
search() //returns first match
shift() //
other shift
charCodeAt
toStringCharCode

//Math
Math.ceil()
Math.floor()
Math.abs()
Math.round()
Math.min()
Math.max()
















