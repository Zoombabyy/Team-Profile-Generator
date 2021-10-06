const Engineer = require("../lib/Engineer");

test("Should set GitHub account via constructor", () => {
  const test = "GitHub User Name";
  const emp = new Engineer("Madison", 50, "test@gmail.com", test);
  expect(emp.github).toBe(test);
});

test('getRole() should return "Engineer"', () => {
  const test = "Engineer";
  const emp = new Engineer("Madison", 50, "test@gmail.com", "GitHub User Name");
  expect(emp.getRole()).toBe(test);
});

test("Should get GitHub username via getGithub()", () => {
  const test = "GitHub User Name";
  const emp = new Engineer("Madison", 50, "test@gmail.com", test);
  expect(emp.getGithub()).toBe(test);
});
