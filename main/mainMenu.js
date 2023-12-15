const inquirer = require('inquirer');


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
   .then((mainMenu) => {
    switch(mainMenu) {
        case  'View all employees':
          viewAllEmployees();
          break;
          case  'View all departments':
          viewAllDepartments();
          break;
          case  'View all roles':
          viewAllRoles();
          break;
          case  'Add an employee':
          addAnEmployee();
          break;
          case  'Add a department':
          addDepartment();
          break;
          case  'Add a role':
          addRole();
          break;
          case  'Update an employee':
          updateEmployee();
          break;
          case 'Exit':

          console.log(`Quit application`);
          process.exit(0)
        }
   }
   )
}

module.exports = mainMenu;
   
    