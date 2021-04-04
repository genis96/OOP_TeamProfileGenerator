const path = require('path');
const fs = require('fs');

const templateDir = path.resolve(__dirname, '../templates');

const renderMain = (html) => {
    const template = fs.readFileSync(
        path.resolve(templateDir, 'index.html'),
        'utf-8'
    );
    return replaceHolders(template, 'team', html);
}

const replaceHolders = (template, placeholder, value) => {
    const regexPattern = RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(regexPattern, value);
}


const renderManager = (manager) => {
    let template = fs.readFileSync(
        path.resolve(templateDir, 'manager.html'),
        'utf-8'
    );
    template = replaceHolders(template, 'name', manager.getName());
    template = replaceHolders(template, 'role', manager.getRole());
    template = replaceHolders(template, 'email', manager.getEmail());
    template = replaceHolders(template, 'id', manager.getId());
    template = replaceHolders(template, 'officeNumber', manager.officeNumber());
    return template;
};

const renderEngineer = (engineer) => {
    let template = fs.readFileSync(
        path.resolve(templateDir, 'engineer.html'),
        'utf-8'
    );
    template = replaceHolders(template, 'name', manager.getName());
    template = replaceHolders(template, 'role', manager.getRole());
    template = replaceHolders(template, 'email', manager.getEmail());
    template = replaceHolders(template, 'id', manager.getId());
    template = replaceHolders(template, 'github', manager.getGithub());
    return template;
};

const renderIntern = (intern) => {
    let template = fs.readFileSync(
        path.resolve(templateDir, 'intern.html'),
        'utf-8'
    );
    template = replaceHolders(template, 'name', manager.getName());
    template = replaceHolders(template, 'role', manager.getRole());
    template = replaceHolders(template, 'email', manager.getEmail());
    template = replaceHolders(template, 'id', manager.getId());
    template = replaceHolders(template, 'school', manager.getSchool());
    return template;
};



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
