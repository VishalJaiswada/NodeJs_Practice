// const url = require('url');
import url from 'url';

const myURL = new URL('https://example.org:21');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.username ='pr.vishaljaiswada';
myURL.password = '123';
console.log(myURL);

// for finding constructed url
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.href);
console.log(myURL.hostname);
console.log(myURL.origin);
console.log(myURL.port);

//for constructing new URL(input,[base])
const myURL1 = new URL('/foo','https://example.org/');
console.log(myURL1.href);

const isValid = URL.canParse('/foo', 'https://example.org/'); // true

const isNotValid = URL.canParse('/foo'); // false 