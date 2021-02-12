const Manager = require("../lib/Manager");

test('create officeNumber', () => {
  const testNum = 9999900000;
  const employee = new Manager('Test', 9999, "employee@test.com", testNum);
  expect(employee.officeNumber).toBe(testNum);
  console.log(employee)
});

test('getRole()', () => {
    const testRole = "Manager";
    const employee = new Manager('Test', 9999, "employee@test.com", 9999900000);
    expect(employee.getRole()).toBe(testRole);
    console.log(employee)
});