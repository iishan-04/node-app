
const path = require('path');
console.log("======== Path module ======");

console.log("======== join the path Path  ======");
const joinPath = path.join(__dirname, 'dir1', 'dir2', 'File.txt')
console.log(joinPath);

console.log("======== File extension  ======");
const FileName = "resume.pdf"
const FileExtension = path.extname(FileName)
console.log(FileExtension);

console.log("======== file base name  ======");

const FilePath = 'H:/ishan coding/Web development/REPO/node-app/dir1/dir2/File.txt';

console.log(`Base Name: ${path.basename(FilePath)}`);
 
console.log("======== file directory  ======");

console.log(`Directory Name : ${path.dirname(FilePath)}`);

console.log(`Directory Name : ${path.isAbsolute(FilePath)}`);