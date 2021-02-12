const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('creates an employee object', () => {
    const employee = new Employee();   
    expect(typeof(employee)).toBe('object');
});

test('creates employee name', () => {
    const name = "Test";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
    console.log(employee);
})

test('creates employee id', () => {
    const testId = 9999;
    const employee = new Employee('Test', testId);
    expect(employee.id).toBe(testId);
    console.log(employee);
})

test('creates employee email', () => {
    const testEmail = "employee@test.com";
    const employee = new Employee('Test', 9999, testEmail);
    expect(employee.email).toBe(testEmail);
    console.log(employee);
})

test('getName()', () => {
    const testName = "Test";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
    console.log(employee); 
});

test('getId()', () => {
    const testId = 9999;
    const employee = new Employee('Test', testId);
    expect(employee.getId()).toBe(testId);
    console.log(employee);
})

test('getEmail()', () => {
    const testEmail = "employee@test.com";
    const employee = new Employee('Test', 9999, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
    console.log(employee);
});

test('getRole()', () => {
    const testRole = "Employee";
    const employee = new Employee('Test', 9999, 'employee@test.com');
    expect(employee.getRole()).toBe(testRole);
    console.log(employee);
}) 