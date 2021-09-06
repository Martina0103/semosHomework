const fs = require('fs/promises');
const path = require('path');

const writeToFile = async(data, pathToFile) => {
    const pat = path.join(__dirname, pathToFile);
    const result = await fs.writeFile(path, data);
}

module.exports = {
    writeToFile
}