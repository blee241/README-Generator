// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['What is the title of the project?', 'What do you want the description to be?', 'How will the user install the application?', 'How will someone use this application?', 'How can someone contribute to this work?', 'How can someone test the application?', 'What kind of license will the application have?', 'What is your GitHub username?', 'Enter an email that you want to be contacted with if someone has a question about the application.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Commit logged!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contributions'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test'
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
                default: 'None',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email'
            }
        ])
        .then((res) => {
            console.log(res.title)
        })
}

// Function call to initialize app
init();




