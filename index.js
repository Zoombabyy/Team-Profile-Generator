const inquirer = require("inquirer");
const fs = require("fs");
const genHTML = require("./lib/HTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose a role for your employee.",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.info("Please enter an employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.info("Please enter the employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.info("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Manager's office number.",
        when: (input) => input.role === "Manager",
        validate: (input) => {
          if (isNaN(input)) {
            console.info("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.info("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.info("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((data) => {
      const {
        name,
        id,
        email,
        role,
        officeNumber,
        github,
        school,
        confirmEmployee,
      } = data;
      let employee;

      if (role === "Manager") {
        employee = new Manager(name, id, email, officeNumber);

        console.info(employee);
      } else if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.info(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.info(employee);
      }

      teamArray.push(employee);

      if (confirmEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("index.html", data, (err) => {
    if (err) {
      console.info(err);
      return;
    } else {
      console.info(
        "Your team profile has been successfully created! Please check out index.html!"
      );
    }
  });
};

addEmployee()
  .then((teamArray) => {
    return genHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
