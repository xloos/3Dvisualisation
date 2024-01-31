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

router.post('/login', async (req, res) => {
  console.log('Login route hit');
  console.log(req.body);

  try {
    const { username, password } = req.body;

    // Check if the user exists and the password is valid
    const user = await User.findByUsernameAndPassword(username, password);
    console.log('User:', user);

    if (!user) {
      console.log('Invalid username or password.');
      return res.status(400).send('Invalid username or password.');
    }

    console.log('Login successful.');
    res.status(200).send('Login successful.');
  } catch (error) {
    console.log('Server error:', error);
    res.status(500).send('Server error.');
  }
});

  
  

module.exports = router;
