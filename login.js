console.clear();
require('dotenv').config();

const PORT = process.env.PORT2 || 4000;
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/login', (req, res) => {
    const accessToken = jwt.sign({ user: req.body }, process.env.JWT_KEY, { expiresIn: '1m' });
    res.set('Authorization', accessToken);
    res.status(204).end();
});


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});