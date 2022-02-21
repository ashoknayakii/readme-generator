const fs = require('fs');
const generateReadMe = (Project, Description) => {
    return `
    
#${Project}

## Description
${Description}

## Programming Languages
${Languages}

## Installation
${Installation}

## Tasks Accomplished
${Tasks}


### URL of the deployed application (GitHub Pages):
<a href="https://${github}.github.io/${repo}


### URL of the GitHub repository:
<a href="https://github.com/${github}/${repo}.git>
    `
}

fs.writeFile('index.html', generateReadMe(Project, Description), err => {
    if (err) throw err;
  
console.log('Portfolio complete! Check out index.html to see the output!');
});