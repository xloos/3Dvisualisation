const express = require('express');
const CourseStatistics = require('../models/CourseStatistics');
const router = express.Router();

// Endpoint pre získanie štatistík kurzov pre prihláseného užívateľa
router.get('/user/:userId', async (req, res) => {
    const userId = req.cookies.userId
    console.log(req.cookies.userId)
    try {
        const statistics = await CourseStatistics.findByUser(userId);
        res.json(statistics);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error while fetching course statistics.');
    }
});

module.exports = router;
