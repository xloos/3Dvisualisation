const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Pridanie nového kurzu
router.post('/courses', async (req, res) => {
    const { name, description, url, courseType, estimatedTime, endDate } = req.body;
    try {
        await Course.create(name, description, url, courseType, estimatedTime, endDate);
        res.status(201).send('Kurz bol úspešne pridaný.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri pridávaní kurzu.');
    }
});

// Získanie všetkých kurzov
router.get('/', async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri získavaní kurzov.');
    }
});



module.exports = router;
