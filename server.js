const express = require('express');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'anir7bas',
        database: 'employees_db'
    },
    console.log('Connected to the employee_db database.')
 )

 db.query('SELECT * FROM employees', function (err, results){
    console.log(results)
 })
 app.get('/api/employees', (req, res)=> {
    res.json()
 })

 app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
 })