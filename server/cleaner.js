const findRemoveSync = require('find-remove')

setInterval(() => {
    var result = findRemoveSync('/Users/marty331/Movies/videos/second', { age: { seconds: 30 }, extensions: '.ts' });
    console.log(result);
}, 20000);
