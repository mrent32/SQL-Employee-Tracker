const db = require('../../../config/createConnection')
const cTable = require('console.table')
const Roles = require('./db_Roles')

class Employee {
    constructor(id, first_name, last_name, role_Id, manager_Id){
        this.id = id;
        this.first_Name = first_Name;
        this.last_Name = last_Name;
        this.role_Id = role_Id;
        this.manager_Id = manager_Id;
    }

    viewAll() {
        const sql = ;
        return db
            .promise()
            .query(sql)
            .then(([table]) => {
                return table
            })
        }

        getAll() {
            const sql = `SELECT * FROM employee`
            return db.promise().query(sql).then(([table]) => {
                return table
            })
        } 
        getManagerID() {
            const sql = `SELECT * FROM employee WHERE first_name='${this.first_Name}' AND last_name='${this.last_Name}'`
            return db
            .promise()
            .query(sql)
            .then(([manager]) => {
                return manager;
            })
        }

        addEmployee() {
            const sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id)
            VALUES ('${this.first_Name}', '${this.last_Name}', '${this.role_Id}', ${this.manager_Id})`
            return db 
            .promise()
            .query(sql)
        }
        
        updateEmployee(){
            const sql = `UPDATE employee
            SET role_id='${this.role_Id}'
            WHERE id='${this.id}';`
            return db.promise().query(sql)
        }
}

module.exports = Employee