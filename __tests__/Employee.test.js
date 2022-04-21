const Employee = require('../lib/Employee');
const employee = new Employee('Nate', '2566131', 'natesmyth1@gmail.com');

test('see if we can get constructor returned as an object', () => {
    expect(employee.name).toBe('Nate');
    expect(employee.id).toBe('2566131');
    expect(employee.email).toBe('natesmyth1@gmail.com');
});

test('tests the getName() function', () => {
    expect(employee.getName()).toBe('Nate');
});

test('tests the getId() function', () => {
    expect(employee.getId()).toBe('2566131');
});

test('tests the getEmail() function', () => {
    expect(employee.getEmail()).toBe('natesmyth1@gmail.com');
});

test('tests the getRole() function', () => {
    expect(employee.getRole()).toBe('Employee');
});