const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mysql = require('mysql2');

// Connect to mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'latth_db'
});

app.use(ecxpress.json());

// Check API

app.get('/', (req, res) => {
  res.json({ message: 'API Working', status: true,});
});


app.post('/api/v1/check-access', (req, res) => {
    const data = req.body;

    
});