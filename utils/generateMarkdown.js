// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'None':
        badge = '';
        break;
    case 'Apache License 2.0':
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    case 'GNU General Public License v3.0':
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
    case 'MIT License':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    case 'Boost Software License 1.0':
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        break;
    case 'Eclipse Public License 1.0':
        badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'None':
        link = '';
        break;
    case 'Apache License 2.0':
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
    case 'GNU General Public License v3.0':
        link = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
    case 'MIT License':
        link = 'https://opensource.org/licenses/MIT';
        break;
    case 'Boost Software License 1.0':
        link = 'https://www.boost.org/LICENSE_1_0.txt';
        break;
    case 'Eclipse Public License 1.0':
        link = 'https://opensource.org/licenses/EPL-1.0';
        break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  let output = '';
  if (license != 'None') {
    output = `## License

    Copyright (c) ${username}. All rights reserved. <br>
    Licensed under the [${license}](${renderLicenseLink(license)}) license.
    `;
  };
  return output;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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

  ${renderLicenseSection(data.license, data.username)}
  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.test}

  ## Questions
  
  Contact me here at GitHub: https://github.com/${data.username} <br>
  Or here via email: ${data.email}`
}

module.exports = generateMarkdown;
