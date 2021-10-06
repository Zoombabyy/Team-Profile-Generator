const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Should set schhol via constructor", () => {
  const test = "Texas A&M";
  const emp = new Intern("Madison", 50, "test@gmail.com", test);
  expect(emp.school).toBe(test);
});

test('getRole() should return "Intern"', () => {
  const test = "Intern";
  const emp = new Intern("Madison", 50, "test@gmail.com", "Texas A&M");
  expect(emp.getRole()).toBe(test);
});

test("Should get school via getSchool()", () => {
  const test = "Texas A&M";
  const emp = new Intern("Madison", 50, "test@gmail.com", test);
  expect(emp.getSchool()).toBe(test);
});
