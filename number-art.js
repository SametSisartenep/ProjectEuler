var numbers = [],
  n = '';

for (var i = 0; i < 1000; i++) {
  var numbers = i.toString().split('');
  numbers.map(function ( number ) {
    n += '\x1b[0;3' + Math.round(Math.random() * 6 + 1) + 'm' + number + '\x1b[0m';
  });

  console.log(n);
}
