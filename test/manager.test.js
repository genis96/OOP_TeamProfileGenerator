const Manager = require('../lib/manager');

test('Set office number', () => {
    const testing = 'St Johns';
    const x = new Manager('Em', 1, 'em@testing.com', testing);
    expect(x.officeNumber).toBe(testing);
})

test('getRole() returns \'Manager\'', () => {
    const testing = 'Manager';
    const x = new Intern("Elmo", 1, 'elmo@testing.com', 15);
    expect(x.getRole()).toBe(testing);
});

test('Get the officeNum', () => {
    const testing = "St Johns";
    const x = new Manager("Bird", 1, "bird@testing.com", testing);
    expect(x.getOfficeNumber()).toBe(testing);
});