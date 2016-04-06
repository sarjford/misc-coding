_//******************EACH*****************************

//forEach
forEach = function(collection, callback) {
  for (var i = 0; i < collection.length; i++) {
    callback(collection[i]);
  }
}

//_.each
_.each = function(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
};

// test:
// var collection1 = [10,20,30,40,50];
// var callback1 = function(value){ return value + 1; };
// _.each(collection1, callback1);

//***************FILTER****************************

//filter using 'for' loop
function filter(collection, test) {
  newArray = [];
  for (var i = 0; i < collection.length; i++) {
    if (test(collection[i])) {
      newArray.push(collection[i]);
    }
  }
  return newArray;
}

//filter using forEach
function filter(collection, test) {
  var newArray = [];
  collection.forEach(function(element) {
    if (test(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

//test:
// var collection1 = [10,20,30,40,50];
// var test1 = function(element){ return element > 10; };
// filter(collection1, test1);

//*********MAP************************************

//*********REDUCE*********************************

function reduce(array, callback, initialValue) {
  var accumulator = initialValue;
  for (var i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}
//reduce + forEach
function reduce(array, callback, initialValue) {
  var accumulator = initialValue;
  array.forEach(function(element) {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
}
//test:
// var nums = [4, 1, 3];
// var add = function(a, b) { return a + b; };
// reduce(nums, add, 0);

//reduce + arguments.length === 2

//*******EVERY***********************************

//*******CONCATALL*******************************

//*******ZIP*************************************

//*******FLATTEN*********************************