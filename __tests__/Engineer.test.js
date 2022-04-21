const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Nate', '2566131', 'natesmyth1@gmail.com', 'thetryworks');

test('test for constructor values', () => {
    expect(engineer.name).toBe('Nate');
    expect(engineer.id).toBe('2566131');
    expect(engineer.email).toBe('natesmyth1@gmail.com');
    expect(engineer.githubUsername).toBe('thetryworks');
})

test('tests the getName() function', () => {
    expect(engineer.getName()).toBe('Nate');
});

test('tests the getId() function', () => {
    expect(engineer.getId()).toBe('2566131');
});

test('tests the getEmail() function', () => {
    expect(engineer.getEmail()).toBe('natesmyth1@gmail.com');
});

test('tests the getOfficeNumber() function', () => {
    expect(engineer.getGithub()).toBe('thetryworks');
});

test('tests the getRole() function', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

