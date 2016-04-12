
// Compute and output the average age of the people in the ancestry data set per century. 
// A person is assigned to a century by taking their year of death, dividing it by 100, and 
// rounding it up, as in Math.ceil(person.died / 100).

// For bonus points, write a function groupBy that abstracts the grouping operation. 
// It should accept as arguments an array and a function that computes the group for an 
// element in the array and returns an object that maps group names to arrays of group members.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var newObj = {};
ancestry.forEach(function(person){
	if (!newObj.hasOwnProperty(Math.ceil(person.died/100))){
		newObj[Math.ceil(person.died/100)] = [];
		newObj[Math.ceil(person.died/100)].push(person);
	}
	else {
		newObj[Math.ceil(person.died/100)].push(person);
	}	
});

	for (var century in newObj){
		console.log (century + " : " + average(newObj[century].map(function(person){
			return person.died - person.born;
		})));
}