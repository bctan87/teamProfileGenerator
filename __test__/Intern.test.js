const Intern = require("../lib/Intern");

test('create employee school', () => {
  const testSchool = "TestStudent";
  const employee = new Intern('Test', 9999, 'employee@test.com', testSchool);
  expect(employee.school).toBe(testSchool);
  console.log(employee)
});

test('getRole()', () => {
  const testRole = "Intern";
  const employee = new Intern('Test', 9999, 'employee@test.com', 'TestStudent');
  expect(employee.getRole()).toBe(testRole);
  console.log(employee)
});

test('getSchool()', () => {
  const testSchool = "TestStudent";
  const employee = new Intern('Test', 9999, 'employee@test.com', testSchool);
  expect(employee.getSchool()).toBe(testSchool);
  console.log(employee)
});