exports.sort = function(array) {
  var newArray = [];
  newArray.unshift(array.shift());
  var i = 0;

  while (array.length != 0) {
    if (array[0] < newArray[0]) {
      newArray.unshift(array[0]);
      array.shift();
    }
    else if (array[0] > newArray[newArray.length - 1]) {
      newArray.push(array[0]);
      array.shift();
    }
    else if (array[0] > newArray[i]) {
      newArray.splice(i + 1, 0, array[0]);
      array.shift();
    }
    else {
      i++
    }
  }
  return newArray;
};
