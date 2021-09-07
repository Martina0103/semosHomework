// 3.Create a separate file for writing and reading files
// 4. Define a write File function that uses the fs.writeFile() to write to a file. This function should be able to write to many different files
// (Hint: the path of the file should be passed as an argument)
// 5. Create a readFile function that uses the fs.readFile() to read contents of a file. Just like the write function it should work with many different file paths.

//import file system
const fs = require('fs/promises');
//import path
const path = require('path');


const writeToFile = async (pateka, tekst) => {
    const pat = path.join(__dirname, pateka);
    const result = await fs.writeFile(pat, tekst);

}


const readFromFile = async (pateka) => {
    const pat = path.join(__dirname, pateka)
    const result = await fs.readFile(pat);
    return result.toString(); 
}

module.exports = {
    writeToFile,
    readFromFile
}
