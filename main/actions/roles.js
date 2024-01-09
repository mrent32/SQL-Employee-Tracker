const inquirer = require('inquirer')
const Roles = require('./db_actions/db_Department')
const Department = require('./db_actions/db_Department')
const main = require('../mainMenu')


const addRole = () => {
    const dep = new Department()

    dep.getAll().then((depTable)=> {
        let depArray = depTable.map((d) => {
            return `${d.dep_name}`
        })
        
        .then(({role, salary, department})=> {
            const getDep = new Department(null, department)
            getDep.getDepartmentId()
            .then(([d])=> {

                const addRole = new Roles(null, role, salary, d.id)
                addRole.addRole()
                .then(()=> {
                    console.log(`
                    successfully added role`)
                    main.mainMenu
                })
            })
        })
    })
}
module.exports = {viewAllRoles, addRole}

