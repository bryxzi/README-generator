function generateReadme(data) {
    return `
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  <Your installation instructions here>
  
  ## Usage
  
  <Your usage instructions here>
  
  ## License
  
  <Your License information here>
  
  ## Contributing
  
  <Your contribution guidelines here>
  
  ## Tests
  
  <Your test instructions here>
  
  ## Questions
  
  For any questions, please contact:
  
  - [GitHub: ${data.githubUsername}](https://github.com/${data.githubUsername})
  - Email: ${data.email}
  `;
  }
  
  module.exports = generateReadme;
  