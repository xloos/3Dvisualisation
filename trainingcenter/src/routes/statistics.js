const express = require('express');
const CourseStatistics = require('../models/CourseStatistics');
const router = express.Router();

// Zaznamenanie štatistiky pre kurz
router.post('/', async (req, res) => {
    const { userId, courseId, timeSpent, attempts } = req.body;
    try {
        await CourseStatistics.recordStatistics(userId, courseId, timeSpent, attempts);
        res.status(201).send('Štatistika bola úspešne zaznamenaná.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri zaznamenávaní štatistiky.');
    }
});

router.get('/:userId/:courseId', async (req, res) => {
    const { userId, courseId } = req.params;
    try {
        const statistics = await CourseStatistics.findByUserAndCourse(userId, courseId);
        if (statistics) {
            res.status(200).json(statistics);
        } else {
            res.status(404).send('Štatistiky pre daného používateľa a kurz neboli nájdené.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri získavaní štatistík.');
    }
});



module.exports = router;
