// TODO: Include packages needed for this application
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },


    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install the dependencies?',
        default: 'npm i',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repository?',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repository?',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log('Generating README...');
            writeToFile('README.md', generateMarkdown(answers));
            console.log('README generated!');
        });
}

// Function call to initialize app
init();
