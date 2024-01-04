const inquirer = require('inquirer')
const Department = require('./db_Choices/db_Department')
const main = require('../mainMenu')

const viewAllDepartments = () => {
    const depMenu = new Department()
    depMenu.viewAll()
    .then((depTable) => {
        console.log(``)
        console.table(depTable)
        console.log('')
    })
    .then(() => {
        main.mainMenu()
    })
}

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

module.exports = [viewAllDepartments. addDepartment]