const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./generateReadme");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache-2.0", "BSD-3-Clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions for your project:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md file has been generated successfully!");
  });
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    const readmeContent = generateReadme(responses);
    writeToFile("README.md", readmeContent);
  });
}

init();
