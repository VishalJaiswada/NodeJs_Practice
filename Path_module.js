const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
// Returns: 'C:\\temp\\myfile.html'

// console.log(process.env.PATH);
// // Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

// process.env.PATH.split(path.delimiter);
// // Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']

path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf'

path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''

path.extname('.index.md');
// Returns: '.md'

path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }