const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mysql = require('mysql2');

// Connect to mysql
const db = mysql.createConnection({
    host: 'alm-ads-importer-api-db-dropwapi.g.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_LpvDV0xUtwY6IvQ7ICf',
    database: 'defaultdb',
    port: 17621
});

app.use(express.json());

// Check API

app.get('/', (req, res) => {
  res.json({ message: 'API Working', status: true,});
});


app.post('/api/v1/check-access', (req, res) => {
    const data = req.body;

    
});