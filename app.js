const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./lib/index');
const validate = require('email-validator');
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// use output to create the team html here
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];

function manager() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',

        },
        {
            type: 'number',
            message: 'Whats the office number?',
            name: 'officeNumber',
          },
          {
            type: 'number',
            message: 'Whats the id number?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'Whats the email?',
            name: 'email',
          },
    ]).then((answers) => {
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        team.push(newManager);
        addEmployee();
    })
}

function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Are there more employees?',
          choices: ['engineer', 'intern', 'No more employees'],
          name: 'employee',
        },
      ])
      .then((answers) => {
        console.log(answers);
        if (answers.employee === 'engineer') {
          console.log('---Insert engineers info ---');
          addEngineer();
        } else if (answers.employee === 'intern') {
          console.log('---Insert interns info---');
          addIntern();
        } else {
          completeFile();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the Engineer`s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'Whats the github username?',
          name: 'github',
        },
        {
          type: 'number',
          message: 'Whats the id number?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'Whats the email?',
          name: 'email',
        },
      ]).then((answers) => {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        team.push(newEngineer);
        console.log(team);
        addEmployee();
      });
    }

    function addIntern() {
        inquirer
          .prompt([
            {
              type: 'input',
              message: 'What is the Interns name?',
              name: 'name',
            },
            {
              type: 'input',
              message: 'What school did the intern attend?',
              name: 'school',
            },
            {
              type: 'number',
              message: 'Whats the id number?',
              name: 'id',
            },
            {
              type: 'input',
              message: 'Whats the email?',
              name: 'email',
            },
          ]).then((answers) => {
            const newIntern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            team.push(newIntern);
            console.log(team);
            addEmployee();
          });
        }
    
    function finishedInputs() {
        const newPage = render(team, 'My Team');
        fs.writeFile(outputPath, newPage, (err) => {
            if(err) throw err;
            console.log('file was created!');
        });
    }

manager();