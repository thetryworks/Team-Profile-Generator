const Intern = require('../lib/Intern');
const intern = new Intern('Nate', '2566131', 'natesmyth1@gmail.com', 'University of Arkansas');

test('test for constructor values', () => {
    expect(intern.name).toBe('Nate');
    expect(intern.id).toBe('2566131');
    expect(intern.email).toBe('natesmyth1@gmail.com');
    expect(intern.school).toBe('University of Arkansas');
})

test('tests the getName() function', () => {
    expect(intern.getName()).toBe('Nate');
});

test('tests the getId() function', () => {
    expect(intern.getId()).toBe('2566131');
});

test('tests the getEmail() function', () => {
    expect(intern.getEmail()).toBe('natesmyth1@gmail.com');
});

test('tests the getSchool() function', () => {
    expect(intern.getSchool()).toBe('University of Arkansas');
});

test('tests the getRole() function', () => {
    expect(manager.getRole()).toBe('Manager');
});

