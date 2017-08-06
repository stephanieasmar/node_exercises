const fs = require('fs');
const readline = require('readline');


// defines standard input and output as a constant names 'rl'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// finds the file, and lets you know what the file name is when found; will print error message if no such file is found
rl.question('what is the filename?', (filename) => {
    console.log('THE FILENAME IS: ' + filename);
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            return console.log(err.message);
        }
        // defines new variables for content that we are trying to read from the file given above,
        // converts content to a string (from binary, through the buffer), then converts it to all uppercase,
        // then we console.log the most recent variable, which prints content to the screen!
        let content = buffer.toString();
        let allCaps = content.toUpperCase();
        console.log(allCaps);
    });
});