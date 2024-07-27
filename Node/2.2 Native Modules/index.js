// const fs = require("fs");

// fs.readFile("/message.txt", 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require('fs');
const path = require('path');

// Use __dirname to get the directory of the current script
const filePath = path.join(__dirname, 'message.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});