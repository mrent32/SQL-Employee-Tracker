const inquirer = require('inquirer');
const main = require('../mainMenu')
const Employee  = require('./db_actions/db_Employee')
const Roles = require('./db_actions/db_Roles')


const updateEmployee = ()=> {
    const employee = new Employee()
    const roles = new Roles()
    viewAllEmployees.getAll().then((empTable)=> {
        roles.getAll().then((rolesTable) => {
             let roleArray = rolesTable.map((r)=> {
                return `${r.title}`
             });
             let empArray = empTable.map((e)=>{
                return `${e.first_name} ${e.last_name}`
             })
             
             .then(({employee, role})=> {
                const man = employee.split(' ')
                const findEmp = new Employee(null, man[0], man[1], null, null)
                findEmp.getManagerID()
                .then(([empRow])=> {
                    const findRole = new Roles(null, role, null, null)
                    findRole.getRoleID()
                    .then(([roleRow])=> {
                        const upddateEmp = new Employee(empRow.id, null, null, roleRow.id, null)
                        updateEmp.updateEmployee()
                        .then(() => {
                            console.log(`Successfully updated Employees role`)
                            main.mainMenu()
                        })
                    })
                })
             })
        })
    })
}
module.exports = { viewAllEmployees, addEmployee, updateEmployee }