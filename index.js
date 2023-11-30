const inquirer = require('inquirer');
const fs = require('fs');


class Logo {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  generateSvgCode() {
    let svgCode = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="display: block; margin: auto;">
    `;
  
    if (this.shape === 'circle') {
      svgCode += `<circle cx="50%" cy="50%" r="20%" fill="${this.shapeColor}" />`;
    } else if (this.shape === 'triangle') {
      svgCode += `<polygon points="900,300 750,500 1050,500" fill="${this.shapeColor}" />`;
    } else if (this.shape === 'square') {
      svgCode += `<rect x="720" y="220" width="25%" height="50%" fill="${this.shapeColor}" />`;
    }
  
    let textX, textY;
  
    if (this.shape === 'circle') {
      textX = '50%';
      textY = '50%';
    } else if (this.shape === 'triangle') {
      textX = '900';
      textY = '430'; 
    } else if (this.shape === 'square') {
      textX = '50%';
      textY = '50%';
    }
  
    svgCode += `<text x="${textX}" y="${textY}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    svgCode += `</svg>`;
  
    return svgCode;
  }
  

  generateLogoFile() {
    const svgCode = this.generateSvgCode();
    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  }
}

function generateLogoPrompt() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: function (input) {
            if (input.length > 3) {
              return 'Please enter up to three characters.';
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape color (keyword or hexadecimal number):',
        },
      ])
      .then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
        const logo = new Logo(text, textColor, shape, shapeColor);
        logo.generateLogoFile();
      });
  }
  
  generateLogoPrompt();


  if (this.shape === 'circle') {
    svgCode += `<circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" />`;
  } else if (this.shape === 'triangle') {
    svgCode += `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
  } else if (this.shape === 'square') {
    svgCode += `<rect x="100" y="50" width="100%" height="100%" fill="${this.shapeColor}" />`;
  }




  



















