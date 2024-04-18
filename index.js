// TODO: Include packages needed for this application
const colors = require("colors");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'projectTitle',
        message: "Please enter the title of your project",
    },
    {
        type: "input",
        name: 'projectDescription',
        message: "Please enter the description of your project",
    },
    {
        type: "input",
        name: "projectInstallationInstructions",
        message: "Please enter the installation instructions if applicable for your project",
    },
    {
        type: "input",
        name: "projectUsageInformation",
        message: "Please enter the usage information for your project",
    },
    {
        type: "input",
        name: "projectContributorInformation",
        message: "Please enter the contributor information for your project",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Please enter the test instructions for your project",
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Please choose your preferred license for this project",
        choices: ["MIT","Mozilla Public License 2.0", "BSD 3-Clause License", "Apache License 2.0", "GNU General Public License (GPL) v3"],
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please provide your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email: "
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Getting results! Please hold!...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();