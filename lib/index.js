const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

class startApp {
    constructor() {
        this.emplyees = [];
        this.employeePrompts = [
            {
                type: 'list',
                name: 'role',
                message: 'Enter Role',
                choices: ['Manager', 'Engineer', 'Intern', 'Done'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                when: (data) => data.role != 'Done',
                validate: name => {
                    if(name) {
                        return true;
                    } else {
                        console.log('Enter Your Name');
                        return false;
                    }
                } 
            }
        ]
    }
}

module.exports = startApp;