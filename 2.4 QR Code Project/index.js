/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import * as fs from 'node:fs';
import { image }from 'qr-image';

var question = 
{
    "name": "weblink",
    "message": "Please share the link of you website: "
}

inquirer
  .prompt([
    question
  ])
  .then((answers) => {
    var qr_pdf = image(answers.weblink, { type: 'pdf' });
    qr_pdf.pipe(fs.createWriteStream('weblink.pdf'));
    
    fs.writeFile("URL.txt", answers.weblink,  (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Sorry, couldn't read what you just said.")
    } else {
      // Something else went wrong
    }
  });