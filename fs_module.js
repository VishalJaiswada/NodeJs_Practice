const fs = require('fs');

// Without blocking the content

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });

// Using readFileSync will block the content

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());


// to write data in the file
fs.writeFile('file2.txt',"This data is written in the file via fs_module system.",()=>{
    console.log("Written into the file");
});

console.log("File reading process Finished");