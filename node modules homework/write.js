var writeFile = require('write');
writeFile('foo.txt', 'This is content...', function(err) {
  if (err) console.log(err);
});
 
// promise 
writeFile('foo.txt', 'This is content...')
  .then(function() {
    // do stuff 
  });