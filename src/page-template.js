const checkTable = (contents) => {
    if (!contents) {
        return '';
    }
    contents.forEach(section => {
        return `-[${section}](${section})`;
    });
}

const generateReadMe = (data) => {
    return `
    
# ${data.project}

## License 

[![License](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents
${checkTable(data.tableContents)}

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contribution)
- [Testing](#testing)
- [Tasks](#tasks)
- [URL](#URL)

## Description
${data.description}

### Programming Languages
${data.languages}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Testing
${data.testing}

## Tasks Accomplished
${data.tasks}


### URL of the deployed application (GitHub Pages):
<https://${data.username}.github.io/${data.repo}>


### URL of the GitHub repository:
<https://github.com/${data.username}/${data.repo}.git>
    `
}

module.exports = generateReadMe;

