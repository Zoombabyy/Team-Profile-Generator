const Employee = require('../lib/Employee');

test('Should incorporate Employee instance', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test('Should set name via constructor argument', () => {
const test = "Madison";
const emp = new Employee(test);
expect(emp.name).toBe(test);
});

test('Should set id via constructor argument', () => {
    const test = 50;
    const emp = new Employee("Madison", test);
    expect(emp.id).toBe(test);
});

test('Should set email via constructor argument', () => {
    const test = 'test@gmail.com';
    const emp = new Employee("Madison", 50, test);
    expect(emp.email).toBe(test);
});

test('Should get name via getName()', () => {
    const test = "Madison";
    const emp = new Employee(test);
    expect(emp.getName()).toBe(test);
});

test('Should get id via getId()', () => {
    const test = 50;
    const emp = new Employee("Madison", test);
    expect(emp.getId()).toBe(test);
});

test('Should get email via getEmail()', () => {
    const test = "test@gmail.com";
    const emp = new Employee("Madison", 50, test);
    expect(emp.getEmail()).toBe(test);
});

test('getRole() should return "Employee"', () => {
    const test = "Employee";
    const emp = new Employee("Madison", 50, "test@gmail.com");
    expect(emp.getRole()).toBe(test);
});