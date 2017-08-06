const fs = require('fs');
const readline = require('readline');

const twoFiles = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

twoFiles.question('Choose an input file: ', (inputFile) => {
    fs.readFile(inputFile, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        let allCapsContent = content.toUpperCase();
        console.log('Input file content: ' + allCapsContent);
            twoFiles.question('Choose an output file: ', (outputFile) => {
            twoFiles.close();
            fs.writeFile(outputFile, allCapsContent, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Output file content: ' + outputFile);
            });
        });
    });
});