var number = parseInt(process.argv[2], 10) || 100;

var result = (number * (number + 1)) / 2;

console.log('Result:\n' + result);
