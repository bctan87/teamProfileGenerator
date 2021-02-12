const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('check employee github', () => {
    const testGithub = "TestAccount";
    const employee = new Engineer('Test', 9999, 'employee@test.com', testGithub);
    expect(employee.github).toBe(testGithub);
    console.log(employee)
});

test('getGithub()', () => {
    const testGithub = "TestAccount";
    const employee = new Engineer('Test', 9999, 'employee@test.com', testGithub);
    expect(employee.getGithub()).toBe(testGithub);
    console.log(employee)
});

test('getRole()', () => {
    const testRole = "Engineer";
    const employee = new Engineer('Test', 9999, 'employee@test.com', "TestAccount");
    expect(employee.getRole()).toBe(testRole);
    console.log(employee)
  });
  
