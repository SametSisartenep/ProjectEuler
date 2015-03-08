var fibonacci = require('./fibonacci');

var numbers = parseInt(process.argv[2], 10) || 10;

fibonacci(numbers, function (err, future, present, past) {
  var color = '\x1b[0;36m',
    nColor = '\x1b[0;35m',
    resetColor = '\x1b[0m';

  if (err || future > 4e6) {
    console.error('There was an error processing the numbers');
    process.exit(1);
    return;
  }

  process.stdout.write('Past: ' + nColor + past + resetColor);
  process.stdout.write(color + ' <=> ' + resetColor + 'Present: ' + nColor + present + resetColor);
  process.stdout.write(color + ' <=> ' + resetColor + 'Future: ' + nColor + future + resetColor + '\n');
});
