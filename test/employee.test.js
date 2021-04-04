const Employee = require("../lib/employee");

test('employee case', () => {
    const e = new Employee();
    expect(typeof x).toBe('object');
});
test('set names', () => {
    const x = new Employee();
    const testing = 'Genis'
    expect(x.name).toBe(testing);
});
test('set email', () => {
    const x = new Employee('email', 1, testing);
    const testing = 'genis@testing.com'
    expect(x.email).toBe(testing);
});
test('set id', () => {
    const x = new Employee('number', testing);
    const testing = 100;
    expect(x.id).toBe(testing);
});

test('get id, using getId()', () => {
    const x = new Employee('number', testing);
    const testing = 100;
    expect(x.getId()).toBe(testing);
});

test('get email, using getEmail()', () => {
    const x = new Employee('email', 1, testing);
    const testing = 'genis@testing.com'
    expect(x.getEmail()).toBe(testing);
});
test('get name, using getName()', () => {
    const x = new Employee();
    const testing = 'Genis'
    expect(x.getName()).toBe(testing);
});
test('get role, using getRole()', () => {
    const x = new Employee('email', 1, 'genis@testing.com' );
    const testing = 'Employee';
    expect(x.getRole()).toBe(testing);
});

