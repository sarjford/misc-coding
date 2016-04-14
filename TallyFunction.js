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