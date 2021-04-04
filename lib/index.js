const path = require('path');
const fs = require('fs');
const path = require('./path');

const templateDir = path.resolve(__dirname, '../templates');


const renderMain = (html) => {
    
}


const render = (employees) => {
    const html = [];

    hmtl.push(
        ...employees
        .filter((employees) => employee.getRole() === 'Manager')
        .map((manager) => renderManager(manager))
    );
    hmtl.push(
        ...employees
        .filter((employees) => employee.getRole() === 'Engineer')
        .map((engineer) => renderEngineer(engineer))
    );
    hmtl.push(
        ...employees
        .filter((employees) => employee.getRole() === 'Intern')
        .map((intern) => renderIntern(intern))
    );

    return renderMain(html.join(''));
}

module.exports = render;
