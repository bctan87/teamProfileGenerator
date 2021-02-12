const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

let TeamArr = [];

function startPrompt() {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter manager's name"

        },
        {
            name: "email",
            message: "Enter manager's email address"
        },

        {
            name: "officeNumber",
            type: "number",
            message: "Enter manager's office number"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            TeamArr.push(teamMember)
            createTeamMembers();
        });

}

function createTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamData",
            message: "Add more team members?",
            choices: ['Engineer', 'Intern', 'DONE']
        }
    ])

        .then(function (data) {

            switch (data.teamData) {
                case "Engineer":
                    createEngineer();
                    break;

                case "Intern":
                    createIntern();
                    break;
                case "DONE":
                    compileTeam();
                    break;
            }
        });
}

function createEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter engineer's name" 
        },
        {
            name: "email",
            message: "Enter engineer's email address"
        },
        {
            name: "github",
            message: "Enter engineer's Github profile?"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = TeamArr.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            TeamArr.push(teamMember)
            createTeamMembers()
        });

}

function createIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter intern's name"

        },
        {
            name: "email",
            message: "Enter intern's email address"

        },
        {
            name: "school",
            message: "Enter intern's school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = TeamArr.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            TeamArr.push(teamMember)
            createTeamMembers()
        });

};

startPrompt();