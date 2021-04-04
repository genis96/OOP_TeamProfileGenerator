const Engineer = require('../lib/engineer');

test('Setting the Github account', () => {
    const testing = 'GithubEngineer';
    const x = new Engineer('user', 1, 'genis@testing.com', testing);
    expect(x.github).toBe(testing);
});

test('getRole() returns "Engineer"', () => {
    const testing = 'Engineer';
    const x = new Engineer('user', 1, 'genis@testing.com', 'GitHubUser', 'Engineer');
    expect(x.getRole()).toBe(testing);
});

test('Gets GitHub account username via getGithub()', () => {
    const testing = 'GithubEngineer';
    const x = new Engineer('user', 1, 'genis@testing.com', testing);
    expect(x.getGithub()).toBe(testing);
});