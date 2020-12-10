const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Selections for addEmployees prompt
const roles = ["Engineer", "Intern"];

//array of employee objects, populated from user input
let employees = [];

/**
 * managerInquiry is a function that asks manager specifc questions, and creates a manager object from the answers. 
 * It calls addEmployees to begin the loop of adding new employees.
 */
let managerInquiry = function () {
    inquirer
        .prompt([
            {
                name: "name",
                message: "Enter manager's first name: ",
            },
            {
                name: "email",
                message: "Please enter manager's email: ",
            },
            {
                name: "office",
                message: "Enter manager's office number: "
            },
        ])
        .then(answers => {
            let manager = new Manager(answers.name, employees.length + 1, answers.email, answers.office);
            employees.push(manager);
            addEmployees();
        })
}

/**
 * dataGather prompts responses for all of the data needed for the employee objects to be filled, Intern or Engineer. 
 * It also calls addEmployees after the current employee is added so that more cards/employees can be added.
 */
let dataGather = function () {
    inquirer
        .prompt([
            {
                name: "name",
                message: "Enter employee's first name: ",
            },
            {
                name: "email",
                message: "Please enter employee's email: ",
            },
            {
                type: 'list',
                name: "role",
                message: "Select employee's position: ",
                choices: roles,
            },
        ])
        .then(answers => {
            switch (answers.role) {
                case "Engineer":
                    inquirer
                        .prompt([
                            {
                                name: "github",
                                message: "Enter employee's github username: "
                            },
                        ])
                        .then(answers2 => {
                            let engineer = new Engineer(answers.name, employees.length + 1, answers.email, answers2.github);
                            employees.push(engineer);
                            addEmployees();
                        })
                    break;

                case "Intern":
                    inquirer
                        .prompt([
                            {
                                name: "school",
                                message: "Enter the name of employee's school: "
                            },
                        ])
                        .then(answers2 => {
                            let intern = new Intern(answers.name, employees.length + 1, answers.email, answers2.school);
                            employees.push(intern);
                            addEmployees();
                        })
                    break;
            }
        })
}

/**
 * makeHTML is a small helper that writes the HTML using render on the employees array
 */
let makeHTML = function () {
    fs.writeFile(outputPath, render(employees), (err) => {
        if (err) throw err;
    });
}

/**
 * addEmployees allows this app to add more than one employee, it prompts the user if they would like to add another employee after each employee is added.
 */
const addEmployees = function () {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: 'add',
                message: "Would you like to add another employee?"
            }
        ])
        .then(answers => {
            if (answers.add) {
                dataGather();
            } else {
                makeHTML();
            }
        })
}

//Calling managerInquiry to get the app started.
managerInquiry();

