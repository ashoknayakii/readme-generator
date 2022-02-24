const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadMe = require ('./src/page-template.js');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the project (Required)',
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages did you use to build this project? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide 2 or more steps to install the application'
        },
        {
            type: 'input',
            name: 'tasks',
            message: 'What tasks does this application accomplish?'
        },
        {
            type: 'confirm',
            name: 'confirmTable',
            message:'Would you like a table of contents',
            default: true
        },
        {
            type: 'checkbox',
            name: 'tableContents',
            message: 'Sections do you want include for your table?',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            default: ['Description', 'URL'],
            when: ({ confirmTable }) => confirmTable
              },
        {
            type: 'input',
            name: 'username',
            message: 'What is the github username associated with this project? (Required)'
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the name of the repository associated with the project? (Required)'
        }
    ]);
}

const writeToFile = (fileName, data) => {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);


} 

const init = () => {
    promptUser().then((userResponse)=> {

        writeToFile("readme.md", generateReadMe({...userResponse}));
        
    })
}
init();

// fs.writeFile('readme.md', generateReadMe(), err => {
//     if (err) throw err;
  
// console.log('Portfolio complete! Check out index.html to see the output!');
// });
