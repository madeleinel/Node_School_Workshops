// -------- for Exercise 6 -------- //
const fs = require('fs');
const path = require('path');

function filterList(dataPath, ext, callback) {
  fs.readdir(dataPath, function (err, list) {
    // if error >> stop the function
    if (err)
      return callback(err);

    // if no error >> return data to client,
    // filter the list so only return the relevant files
    let filteredList = list.filter(function(file) {
      return path.extname(file) === ('.' + ext);
    });
    // using the callback function
    callback(null, filteredList);
  });
}

// export the function >> so can call it within nodeExs.js
module.exports = filterList;
