 const express = require('express');

 const mysql = require('mysql2');

 const PORT = process.env.PORT || 3001;
 const app = express();

 app.use(express.urlencoded({ extended: false}));
 app.use(express.json());

 const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'anir7bas',
        database: 'employees_db',
    },
    console.log('Connected to the employees_db database.')
 );

 app.post('/api/new-employee', ({ body}, res)=> {
    const sql = `INSERT INTO employees (employee_name) VALUES (?)`;

    const params = [body.employee_name];

    db.query(sql, params, (err, result)=> {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success!',
            data: body
        });
    })
    
 })