const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

test('Setting the Github account', () => {
    const testing = 'GithubEngineer';
    const x = new Engineer('Genis', 1, 'genis@testing.com', testing, 'Engineer');
    expect(x.github).toBe(testing);
})

test('getRole() returns \'Engineer\'', () => {
    const testing = 'Engineer';
    const x = new Engineer("El", 1, 'el@testing.com', 'GitHubUser', 'Engineer');
    expect(x.getRole()).toBe(testing);
});

test('Gets GitHub account username via getGithub()', () => {
    const testing = "GithubEngineer";
    const x = new Engineer("Ash", 1, "ash@testing.com", testing, "Engineer");
    expect(x.getGithub()).toBe(testing);
});