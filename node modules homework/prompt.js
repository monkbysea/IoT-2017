var readline = require('readline');
var writeFile = require('write');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("what is your name?", function(answer){
	console.log(answer);
	writeFile('foo.txt', answer, function(err) {
  if (err) console.log(err);
});
 
// promise 
writeFile('foo.txt', answer)
  .then(function() {
    // do stuff 
    console.log(answer);
  });
})


