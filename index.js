const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const teamMembers = [];

const Manager = require('./lib.Manager');
const Engineer = require('./lib.Engineer');
const Intern = require('./lib.Intern');

const generateSite = require('./src/generate-site.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (Required)',
            validate : email => {
                if (email) {
                    return true;
                } else {
                console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'officeNumber',
            message: 'Enter your offivce number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};
