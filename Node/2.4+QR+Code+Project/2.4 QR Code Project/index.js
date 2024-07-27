/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from 'qr-image';
import { writeFile, createWriteStream } from 'fs';
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: "What's your URL that you want to change into a QR Code?",
    },
  ])
  .then((answers) => {
    writeFile('./message.txt', answers.url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

    const qrCode = qr.image(answers.url, { type: 'png', parse_url: true });
    const qrCodeStream = createWriteStream('./QR.png');
    qrCode.pipe(qrCodeStream);

    qrCodeStream.on('finish', () => {
      console.log('QR code generated');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });