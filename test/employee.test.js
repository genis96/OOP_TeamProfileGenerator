const Employee = require("../lib/employee");

test('employee case', () => {
    const e = new Employee();
    expect(typeof x).toBe('object');
});
test('set names', () => {
    const x = new Employee();
    const name = 'Genis'
    expect(x.name).toBe(name);
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
