const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./lib/index');
const validate = require('email-validator');
// const Employee = require('./lib/employee');
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
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID?',
                when: (data) => data.role != 'Done',
                validate: id => {
                    if(id) {
                        return true;
                    } else {
                        console.log('Enter Your ID');
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
                when: (data) => data.role != 'Done',
                validate: email => {
                    if(email) {
                        return true;
                    } else {
                        console.log('Enter Your Email');
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?',
                when: (data) => data.role === 'Manager',
                validate: officeNumber => {
                    if(officeNumber) {
                        return true;
                    } else {
                        console.log('Enter Your Office Number');
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub?',
                when: (data) => data.role === 'Engineer',
                validate: github => {
                    if(github) {
                        return true;
                    } else {
                        console.log('Enter Your GitHub');
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is your School?',
                when: (data) => data.role === 'Intern',
                validate: school => {
                    if(school) {
                        return true;
                    } else {
                        console.log('Enter Your School');
                        return false;
                    }
                } 
            }
        ];
    }
    //start
    start() { this.switchEmployee };

    //start Inquirer
    switchEmployee() {
        inquirer.prompt(this.employeePrompts).then(data => {
            switch(data.role) {
                case 'Done':
                    this.createHtml();
                    console.log('Team Profile Generator');
                    break;
                case 'Manager':
                    this.emplyees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                    this.switchEmployee();
                    break;
                case 'Engineer':
                    this.emplyees.push(new Engineer(data.name,  data.id, data.email, data.github));
                    this.switchEmployee();
                    break;
                case 'Intern':
                    this.emplyees.push(new Intern(data.name,  data.id, data.email, data.school));
                    this.switchEmployee();
                    break
            }
        });
    }
    
}

module.exports = startApp;