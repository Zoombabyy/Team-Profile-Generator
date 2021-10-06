const inquirer = require('inquirer')
const fs = require('fs')
const genHTML = require('./lib/HTML');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teanArray = []

const addManager = () => {
    return inquirer.prompt([
        {}
    ])
}