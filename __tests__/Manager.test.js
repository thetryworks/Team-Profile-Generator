const Manager = require('../lib/Manager');
const manager = new Manager('Nate', '2566131', 'natesmyth1@gmail.com', '13');

test('test for constructor values', () => {
    expect(manager.name).toBe('Nate');
    expect(manager.id).toBe('2566131');
    expect(manager.email).toBe('natesmyth1@gmail.com');
    expect(manager.officeNumber).toBe('13');
})

test('tests the getName() function', () => {
    expect(manager.getName()).toBe('Nate');
});

test('tests the getId() function', () => {
    expect(manager.getId()).toBe('2566131');
});

test('tests the getEmail() function', () => {
    expect(manager.getEmail()).toBe('natesmyth1@gmail.com');
});

test('tests the getOfficeNumber() function', () => {
    expect(manager.getOfficeNumber()).toBe('13');
});

test('tests the getRole() function', () => {
    expect(manager.getRole()).toBe('Manager');
});

