const Intern = require('../lib/intern');

test('Set school for intern', () => {
    const testing = 'St Johns';
    const x = new Intern('Genis', 1, 'genis@testing.com', testing);
    expect(x.school).toBe(testing);
})

test('getRole() returns \'Intern\'', () => {
    const testing = 'Engineer';
    const x = new Intern("El", 1, 'el@testing.com', 'GitHubUser', 'St Johns');
    expect(x.getRole()).toBe(testing);
});

test('Set school for intern', () => {
    const testing = "St Johns";
    const x = new Intern("Ash", 1, "ash@testing.com", testing);
    expect(x.getSchool()).toBe(testing);
});