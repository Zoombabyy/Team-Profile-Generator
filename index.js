const inquirer = require("inquirer");
const fs = require("fs");
const genHTML = require("./lib/HTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { listenerCount } = require("process");
const teamArray = [];

// reduce below to other function
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the Manager of the team?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Manager's ID.",
        validate: (input) => {
          if (isNaN(input)) {
            console.log("Please enter an ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter an email for the Manager.",
        validate: (input) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Manager's office number.",
        validate: (input) => {
          if (isNaN(input)) {
            console.log("Please enter an office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((input) => {
      const { name, id, email, officeNumber } = input;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  return inquirer.prompt([
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
          console.log("Please enter an employee's name!");
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
          console.log("Please enter the employee's ID!");
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
          console.log("Please enter an email!");
          return false;
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
          console.log("Please enter the employee's github username!");
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
          console.log("Please enter the intern's school!");
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add more team members?",
      default: false,
    },
  ]);
};
