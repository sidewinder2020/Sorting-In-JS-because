exports.sort = function(array) {
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var current = array[i];
        var next = array[i + 1];
        array[i] = next;
        array[i + 1] = current;
      };
    };
  };
  return array;
};
