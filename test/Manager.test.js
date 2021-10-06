const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { expect, test } = require("@jest/globals");

test("Should set office number via the constructor argument", () => {
  const test = 89;
  const emp = new Manager("Madison", 50, "test@gmail.com", test);
  expect(emp.officeNumber).toBe(test);
});

test('getRole() should return "Manager"', () => {
  const test = "Manager";
  const emp = new Manager("Madison", 50, "test@gmail.com", 89);
  expect(emp.getRole()).toBe(test);
});

test("Should get office number via getOfficeNumber()", () => {
  const test = 89;
  const emp = new Manager("Madison", 50, "test@gmail.com", test);
  expect(emp.getOfficeNumber()).toBe(test);
});
