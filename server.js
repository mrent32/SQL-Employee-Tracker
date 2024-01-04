const express = require('express');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');

const app = express();

app.use(express.json());


//  db.query('SELECT * FROM employees', function (err, results){
//     console.log(results)
//  })
 app.get('/api/employees', (req, res)=> {
    res.json()
 })

 app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
 })