const inquirer = require('inquirer')
// const Department = require('./db_actions/db_Department')
const main = require('../mainMenu')
const db = require('../../config/createConnection')
const mainMenu = require('../mainMenu')



const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department',
            name: 'department',
        },
    ])
    .then(({department})=> {
        const addDep = new Department(null, department)
        addDep.addDepartment()
        .then(()=> {
            console.log(`Department added successfully`)
            main.mainMenu()
        })
    })
}

module.exports = { viewAllDepartments, addDepartment }