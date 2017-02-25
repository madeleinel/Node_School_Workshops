// -------- Exercise 1 -------- //
// console.log("HELLO WORLD");

// // run by 'node nodeExs'
// // verify exercise by 'learnyounode verify nodeExs'
// // to run in test environment: 'learnyounode run'
// // 'learnyounode print' or 'learnyounode help'

// -------- Exercise 2 -------- //
// var data = process.argv;
// var dataLength = data.length;
// var tot = 0;
//
// for (i = 2; i < dataLength; i++) {
//   // var num = Number(data[i]);
//   // tot = tot + num;
//   tot += Number(data[i]);
// }
//
// console.log(tot);

// -------- Exercise 3 -------- //
// var fs = require('fs');
// var file = process.argv[2];
// var data = fs.readFileSync(file).toString();
// var splitData = data.split('\n');
// var num = (splitData.length - 1);
// console.log(num);

// // OR it can be written in fewer lines:

// var fs = require('fs');
// var data = fs.readFileSync(process.argv[2]);
// var num  = (data.toString().split('\n').length) -1;
// console.log(num);

// -------- Exercise 4 -------- //
// var fs = require('fs');
// var file = process.argv[2];
// // Call 'utf8' as second argument to get results as string, rather than buffer
// fs.readFile(file, 'utf8', function(err, fileContent) {
//   if (err) { console.log(err) } else {
//   console.log(fileContent.split('\n').length - 1);
// }});

// -------- Exercise 5 -------- //
// var fs = require('fs');
// var path = require('path');
//
// // the folder the files are in
// var dataPath = process.argv[2];
// // the file extensions
// var ext = '.' + process.argv[3];
//
// fs.readdir(dataPath, function(err, list) {
//   if (err) {console.log(err); } else {
//     list.filter(function(file) {
//       if (ext == path.extname(file)) {
//         console.log(file);
//       }})}});

// -------- Exercise 6 -------- //
// const myModule = require('./mymodule.js');
//
// const dataPath = process.argv[2];
// const ext = process.argv[3];
//
// function resultHandler (err, data) {
//   if (err)
//     return err;
//   data.forEach(function(file) {
//     console.log(file);
//   });
// }
//
// myModule(dataPath, ext, resultHandler);

// -------- Exercise 7 -------- //
// var http = require('http');
// var url = process.argv[2];
// http.get(url, function(response) {
//   response.setEncoding('utf8');
//   response.on('data', function (data) {
//     console.log(data);
//   });
//   response.on('error', console.error)
// }).on('error', console.error);
//
// // OR could write it as:
//
// http.get(url, function(res) {
//   res.setEncoding('utf8');   // to get the data as a string, and  not a buffer
//   res.on('data', console.log);  // console.log(data)
//   res.on('error', console.error);  // when error >> console.log(error)
// }).on('error', console.error);
//
// // the 'res' / 'response' object = a Node Stream object
// // >> can be treated as objects that emit events (eg data, error, end)
