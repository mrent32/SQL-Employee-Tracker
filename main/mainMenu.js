const inquirer = require('inquirer');
const db = require('../config/createConnection')
// const { viewAllEmployees, addEmployee, updateEmployee} = require('./actions/employees');
// const { viewAllDepartments, addDepartment} = require('./actions/department')
// const {viewAllRoles, addRole} = require('./actions/roles')

const mainMenu = ()  => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Choose an action.',
            name: 'mainMenu',
            choices: [
                'View employees',
                'View roles',
                'View departments',
                'Add employee',
                'Add role',
                'Add department',
                'Update employees',
                'Exit'
            ],
        },
    ])
   .then(({mainMenu}) => {
    console.log(mainMenu)
    switch(mainMenu) {
        case  'View employees':
          viewAllEmployees();
          break;
          case  'View departments':
          viewAllDepartments();
          break;
          case  'View roles':
          viewAllRoles();
          break;
          case  'Add employee':
          addAnEmployee();
          break;
          case  'Add department':
          addDepartment();
          break;
          case  'Add role':
          addRole();
          break;
          case  'Update employees':
          updateEmployee();
          break;
          case 'Exit':

          console.log(`Quit application`);
          process.exit(0)
        }
   }
   )
}
const viewAllDepartments = () => {
    db.promise().query('SELECT * FROM department').then(([data]) => {
    console.table(data);
    mainMenu()
   })
}

const viewAllRoles = () => {
    db.promise().query(`SELECT
    r.title,
    r.salary,
    d.dep_name AS Department
    FROM roles r
    LEFT JOIN department d ON d.id = r.department_id`)
    .then(([roleTable]) => {
        console.log(``)
        console.table(roleTable)
        console.log('')
    })
    .then(()=> {
        mainMenu()
    })
}

const viewAllEmployees = () => {
    db.promise().query(`SELECT 
    e.first_name AS 'First name',
    e.last_name AS 'Last name',
    r.title AS 'Role',
    CONCAT(g.first_name, '  ',g.last_name) AS Manager
    FROM employee e
    LEFT JOIN roles r ON r.id = e.role_id
    LEFT JOIN employee g ON g.id = e.manager_id`)
    .then(([empTable]) => {
        console.log(``)
        console.table(empTable)
        console.log('')
    })
    .then(() => {
        mainMenu()

    })
}
const addRole = async () => {
    const [departments] = await db.promise().query('SELECT * FROM department')
    const departmentArray = departments.map(department => ({name: department.dep_name, value: department.id}))
    console.log(departmentArray)
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the salary for this role?',
            name: 'salary',
        },
        {
            type: 'list',
            mesasge: 'What department does the role belong to?',
            choices: departmentArray,
            name: 'department_id',
        },
    ])
    .then(({title, salary, department_id}) => {
        db.promise().query('INSERT INTO roles SET ?', {title, salary, department_id})
        .then(([res]) => {
            if(res.affectedRows > 0) {
                viewAllRoles()
            } else {
                console.error('failed to add role')
                mainMenu()
            } 
            
        })
        
    })
}
module.exports = mainMenu;
   
    