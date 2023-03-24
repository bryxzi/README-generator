function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(/-/g, "%20")}-green)`;
}

function generateReadme(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

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

${data.installation}

## Usage

${data.usage}

## License

${data.license !== "None" ? `This project is licensed under the ${data.license} License.` : `This project does not have a specific license.`}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact:

- [GitHub: ${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

module.exports = generateReadme;
