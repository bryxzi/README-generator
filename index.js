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
  // Add more questions following the same format
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
