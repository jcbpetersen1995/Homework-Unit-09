var inquire = require('inquirer');
var axios = require('axios');
var fs = require('fs');
var util = require('util');
///////////////////////////////////////////
const writeReadMeAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquire.prompt([
        {
                type: "input",
                name: "title",
                message: "What is your project's title?"
            },
            {
                type: "input",
                name: "describe",
                message: "Please describe your project."
            },
            {
                type: "input",
                name: "install",
                message: "How does a user install the project?",
            },
            {
                type: "input",
                name: "uses",
                message: "What is the project used for?"
            },
            {
                type: "input",
                name: "license",
                message: "What license is associated with the project?"
            },
            {
                type: "input",
                name: "contribute",
                message: "Who contributed to the project?"
            },
            {
                type: "input",
                name: "test",
                message: "What tests should the user run?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "Github",
                message: "What is your Github username?"
            }
        ])
        };
function generateReadMe(answers) {
return `# ${answers.title}
## About 
* ${answers.describe}
## Table of Contents
* Installation
* Practival Uses
* Licenses
* Contributors
* Tests
* Questions
## How to Install:
* ${answers.install}
## Practical Uses: 
* ${answers.uses}
## Licenses: 
* ${answers.license}
## Contributors:
* ${answers.contribute}
## Tests for this Application:
* ${answers.test}
## My Email Address: 
* ${answers.email}
## Github Profile:
* ${answers.Github}
<img src="" alt="Profile Picture">
[![Build Status](https://travis-ci.com/username/projectname.svg?branch=master)](https://travis-ci.com/username/projectname)
`
};

promptUser()
    .then(function(answers) {
        const read = generateReadMe(answers);
        return writeReadMeAsync("README.md", read);
    })
    .then(function() {
        console.log("Successfully created new README to README.md");
    })
    .catch(function(err) {
        console.log(err);
    });
