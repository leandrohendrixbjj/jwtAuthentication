const express = require('express');
const posts = require('./posts.js');
const jwt = require('jsonwebtoken');

module.exports = (app) => {

    app.use(express.json());

    app.post('/api/posts', authenticateToken, (req, res) => {
        res.send(
            posts.filter(posts => posts.name == req.user));
    });

    function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) return res.status(401).end();

        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) return res.status(403).end();
            req.user = user.user;
            next();
        });
    }

}