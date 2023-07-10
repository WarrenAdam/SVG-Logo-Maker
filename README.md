# SVG-Logo-Maker
    challenge 10
## Description

The SVG Logo Maker is a backend project designed to create a 300x200 SVG imgae through inquirer prompted questions. The project was tested using Jest. Through this project process, I learned about how to run test operations to ensure the project ran smoothly for user interactions in the future.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)

## Installation

The following information was used to begin the project:

User Story <br>
AS a freelance web developer <br>
I WANT to generate a simple logo for my projects <br>
SO THAT I don't have to pay a graphic designer

Acceptance Criteria <br>
GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for text <br>
THEN I can enter up to three characters <br>
WHEN I am prompted for the text color <br>
THEN I can enter a color keyword (OR a hexadecimal number) <br>
WHEN I am prompted for a shape <br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square <br>
WHEN I am prompted for the shape's color <br>
THEN I can enter a color keyword (OR a hexadecimal number) <br>
WHEN I have entered input for all the prompts <br>
THEN an SVG file is created named `logo.svg` <br>
AND the output text "Generated logo.svg" is printed in the command line <br>
WHEN I open the `logo.svg` file in a browser <br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Usage

Walthrough video:
https://watch.screencastify.com/v/9M2R9Z8G4D5y5bsCc6H5 <br>

screenshot: 
![LOGO](SVG-Logo-Maker/Images/SVG render code.png)


## Credits

I would like to give contribution to my tutor Scott McAnnally for helping me de bug the code to make the SVG logo apear better in the browser.
## Tests

The project was run in the backend and needed inquirer 8.2.4 and Jest. Inquirer was used for the prompted questions and Jest was used for testing purposes. To install jest and inquirer 8.2.4, you select the path required and run command npm install inquirer 8.2.4. Upon completion, run command npm i jest --save -dev. Once completed you are able to run node index.js for the prompts and in the shapes.test.js file, npm run test to complete a test diagnostic.