module.exports = function ( limitNumber, callback ) {
  var past = 0,
    present = 1,
    future = 0;

  if (typeof(limitNumber) === 'number' && typeof(callback) === 'function') {
    for (var i = 0; i < limitNumber; i++) {
      if (i <= 1) {
        future = i;
      } else {
        future = past + present;
        past = present;
        present = future;
      }
      callback(false, future, present, past);
    }
  } else {
   callback(true);
  }
};
