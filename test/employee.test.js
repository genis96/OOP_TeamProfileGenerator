const Employee = require("../lib/employee");

describe('Employee', () => {
    it('start Employee', () => {
        const x = new Employee();
        expect(typeof(x)).toBe('object');
    });
    it('set name', () => {
        const x = new Employee();
        const name = 'GB'
        expect(x.name).toBe(name);
    });
    it('set id', () => {
        const x = new Employee('AB', testing);
        const testing = 20;
        expect(x.id).toBe(testing);
    });
    it('set email', () => {
        const x = new Employee('GE', 1, testing);
        const testing = 'ab@test.com';
        expect(x.email).toBe(testing);
    });
    describe('getName', () => {
        it('gets name via getName', () => {
            const testing = 'El';
            const x = new Employee(testing);
            expect(x.getName()).toBe(testing);
        })
    })
    describe('getId', () => {
        it('gets id via getId', () => {
            const testing = 20;
            const x = new Employee('Ele', testing);
            expect(x.getId()).toBe(testing);
        })
    })
    describe('getEmail', () => {
        it('gets email via getEmail', () => {
            const testing = 'el@testing.com';
            const x = new Employee('Ele', 1, testing);
            expect(x.getEmail()).toBe(testing);
        })
    })
    describe('getRole', () => {
        it('gets role via getRole', () => {
            const testing = 'el@testing.com';
            const x = new Employee('Ge', 1, 'ge@test.com');
            expect(x.getRole()).toBe(testing);
        })
    })
})

