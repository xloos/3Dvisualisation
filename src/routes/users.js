const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    console.log('Register route hit'); // This will confirm the route is being accessed
        console.log(req.body); // This will show the incoming request data
    try {
        const { username, password } = req.body;
        

        // Check if user already exists
        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            return res.status(400).send('Username already exists.');
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create the user in the database
        await User.create(username, passwordHash);

        res.status(201).send('User registered successfully.');
    } catch (error) {
        res.status(500).send('Server error.');
    }
});

module.exports = router;
