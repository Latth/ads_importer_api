const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

// Check API
app.get('/', (req, res) => {
  res.json({ message: 'API Working', status: true,});
});


app.post('/api/v1/check-access', (req, res) => {
    const data = req.body;

    
});