// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Enter the project title.', 'Enter the project description.', 'Enter the installation instructions for the project.', 'Enter the usage information for the project.', 'Enter the contribution guidelines.', 'Enter the test instructions for the project.', 'What kind of license will the application have?', 'Enter your GitHub username.', 'Enter an email that you want to be contacted with if someone has a question about the application.'];

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
                choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Eclipse Public License 1.0'],
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
            fs.writeFile('./generatedREADME/README.md', generateMarkdown(res), err => 
            err ? console.log(err) : console.log("Success!")
            )
        })
}

// Function call to initialize app
init();




