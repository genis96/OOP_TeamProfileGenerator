const Manager = require('../lib/manager');

test('Get office number', () => {
    const testing = 100;
    const x = new Manager('Genis', 1, 'genis@testing.com', testing);
    expect(x.officeNumber).toBe(testing);
});

test('getRole() returns "Manager"', () => {
    const testing = 'Manager';
    const x = new Intern('Genis', 1, 'genis@testing.com', 100);
    expect(x.getRole()).toBe(testing);
});

test('Set the officeNum', () => {
    const testing = 100;
    const x = new Manager('officeNumber', 1, 'genis@testing.com', testing);
});