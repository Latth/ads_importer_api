const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const db = mysql.createConnection({
    host: 'alm-ads-importer-api-db-dropwapi.g.aivencloud.com',
    port: 17621,
    user: "avnadmin",
    password: "AVNS_LpvDV0xUtwY6IvQ7ICf",
    database: 'defaultdb',
});

db.connect((err) => {
    if (err) {
        console.log('Couldnt connect to database '+err);
    } else {
        console.log('Connected to database');
    }
});

// Check API
app.get('/', (req, res) => {
  res.json({ message: 'API Working', status: true,});
});


app.post('/api/check-access', (req, res) => {
    const data = req.body;
});