const fs = require("fs");

fs.writeFile("hey.txt", "hey hello kaise ho?", function (err) {
  if (err) console.log(err);
  else console.log("done");
});

// //appendFile
// fs.appendFile("hey.txt", " main to achaa hu !", function (err) {
//   if (err) console.log(err);
//   else console.log("done");
// });

// //Rename
// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) console.log(err);
//   else console.log("done");
// });

// //copyFile
// fs.copyFile("hello.txt", "./copy/copy.txt", function (err) {
//   if (err) console.error(err.message);
//   else console.log("done");
// });

// //unlink (Delete)
// fs.unlink("hello.txt", function (err) {
//   if (err) console.error(err.message);
//   else console.log("done");
// });

// //data.toString(): Converts the Buffer object into a human-readable string.
// fs.readFile("hello.txt", function (err, data) {
//   if (err) console.error(err);
//   else console.log(data.toString());
// });
